import { put } from '@vercel/blob';

// Config to allow larger payloads for base64 images
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

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
    const { filename, base64, contentType } = req.body || {};

    if (!base64 || !filename) {
      return res.status(400).json({ error: 'Filename and base64 image data are required.' });
    }

    // Clean base64 string
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const safeFilename = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // If BLOB_READ_WRITE_TOKEN is not set (e.g. local dev without .env.local)
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('Vercel Blob token not configured. Returning data URL simulation.');
      const simulatedUrl = base64.startsWith('data:') ? base64 : `data:${contentType || 'image/jpeg'};base64,${base64}`;
      return res.status(200).json({
        success: true,
        url: simulatedUrl,
        filename: safeFilename,
        source: 'simulated_local',
        message: 'Vercel Blob token not found. Preview generated locally.'
      });
    }

    // Upload to Vercel Blob
    const blob = await put(safeFilename, buffer, {
      access: 'public',
      contentType: contentType || 'image/jpeg'
    });

    return res.status(200).json({
      success: true,
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      source: 'vercel_blob',
      message: 'Image successfully uploaded to Vercel Blob'
    });
  } catch (error) {
    console.error('Error uploading image to Vercel Blob:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Image upload failed'
    });
  }
}
