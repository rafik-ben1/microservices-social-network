
export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
    </div>
  )
}