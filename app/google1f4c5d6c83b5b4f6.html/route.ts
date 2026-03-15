export const dynamic = 'force-static'

export function GET() {
  return new Response('google-site-verification: google1f4c5d6c83b5b4f6.html', {
    headers: { 'Content-Type': 'text/html' },
  })
}
