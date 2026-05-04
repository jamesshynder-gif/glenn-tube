import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';

const videos = [
  { id: 1, title: 'Designing Better Thumbnails', views: '12K' },
  { id: 2, title: 'Editing Setup Tour', views: '8.9K' },
];

export default function VideosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Videos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((video) => (
          <Card key={video.id} className="space-y-3">
            <div className="aspect-video rounded-md bg-zinc-900" />
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{video.title}</h2>
              <Badge>{video.views} views</Badge>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
