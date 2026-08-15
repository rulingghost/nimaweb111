import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ error: 'Invalid content payload format' });
    }

    // Attach last modified timestamp
    const enrichedPayload = {
      ...payload,
      _metadata: {
        lastSavedAt: new Date().toISOString(),
        version: (payload._metadata?.version || 0) + 1
      }
    };

    // Check if KV is configured
    if (!process.env.KV_REST_API_URL && !process.env.KV_URL) {
      console.warn('Vercel KV environment variables not configured. Simulation mode.');
      return res.status(200).json({
        success: true,
        data: enrichedPayload,
        source: 'simulated_local',
        message: 'KV environment not set up in Vercel. Stored locally in browser context.'
      });
    }

    await kv.set('site_content', enrichedPayload);

    return res.status(200).json({
      success: true,
      data: enrichedPayload,
      source: 'vercel_kv',
      message: 'Site content successfully saved to Vercel KV'
    });
  } catch (error) {
    console.error('Error saving site content to KV:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error while saving to KV'
    });
  }
}
