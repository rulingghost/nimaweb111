import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if KV is configured
    if (!process.env.KV_REST_API_URL && !process.env.KV_URL) {
      console.warn('Vercel KV environment variables not found. Returning empty state for local fallback.');
      return res.status(200).json({ 
        success: true, 
        data: null, 
        source: 'local_fallback',
        message: 'KV not configured, using fallback default data.' 
      });
    }

    const content = await kv.get('site_content');
    
    return res.status(200).json({
      success: true,
      data: content || null,
      source: 'vercel_kv'
    });
  } catch (error) {
    console.error('Error fetching site content from KV:', error);
    return res.status(200).json({
      success: false,
      data: null,
      error: error.message,
      source: 'error_fallback'
    });
  }
}
