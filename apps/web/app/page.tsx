import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">GlennTube</h1>
        <Badge>Now Streaming</Badge>
      </header>
      <Card>
        <h2 className="mb-2 text-xl font-semibold">Discover creator videos</h2>
        <p className="mb-4 text-brand-muted">Daily content curated for your watchlist.</p>
        <Button>Start Watching</Button>
      </Card>
    </main>
  );
}
