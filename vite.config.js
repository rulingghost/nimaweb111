import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Lightweight local API simulator plugin for local Vite dev server (npm run dev)
// On Vercel production, /api/* routes are handled automatically by Vercel Serverless Functions.
function vercelApiDevPlugin() {
  let localMemoryContent = null;

  return {
    name: 'vercel-api-dev-simulator',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api/')) {
          return next();
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.url.startsWith('/api/get-content')) {
          res.statusCode = 200;
          return res.end(JSON.stringify({
            success: true,
            data: localMemoryContent,
            source: 'local_dev_simulator',
            message: 'Yerel Vite geliştirme ortamı simülatörü'
          }));
        }

        if (req.url.startsWith('/api/save-content') && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              localMemoryContent = parsed;
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                data: parsed,
                source: 'local_dev_simulator',
                message: 'Veriler yerel geliştirme belleğine ve tarayıcıya kaydedildi.'
              }));
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Geçersiz JSON verisi' }));
            }
          });
          return;
        }

        if (req.url.startsWith('/api/upload-image') && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const { base64, filename } = JSON.parse(body);
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                url: base64,
                filename: filename || 'upload.jpg',
                source: 'local_dev_simulator',
                message: 'Görsel yerel önizleme verisi olarak yüklendi.'
              }));
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Görsel yüklenemedi' }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    vercelApiDevPlugin()
  ],
});
