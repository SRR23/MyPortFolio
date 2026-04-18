import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Absolute site URL for OG/social meta (optional).
 * - Vercel sets VERCEL_URL during build (preview/production host).
 * - Set VITE_SITE_URL in .env for your canonical custom domain (recommended for OG).
 */
function siteOriginFromEnv() {
  const fromEnv = process.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return ''
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-og-absolute-urls',
      transformIndexHtml(html) {
        const origin = siteOriginFromEnv()
        const ogImage = origin ? `${origin}/srr.jpg` : '/srr.jpg'
        const ogUrl = origin ? `${origin}/` : '/'
        return html
          .replaceAll('__OG_IMAGE__', ogImage)
          .replaceAll('__OG_URL__', ogUrl)
      },
    },
  ],
})
