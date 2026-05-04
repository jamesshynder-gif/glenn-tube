'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';

export default function CommentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="mx-auto min-h-screen max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Comments</h1>
      <Card className="space-y-3">
        <Input placeholder="Add a comment" aria-label="Add a comment" />
        <div className="flex justify-end">
          <Button onClick={() => setOpen(true)}>Post Comment</Button>
        </div>
      </Card>

      <Card>
        <p className="text-sm text-zinc-200">Great pacing and clean transitions in this upload.</p>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Comment submitted">
        Your comment was posted successfully.
      </Modal>
    </main>
  );
}
