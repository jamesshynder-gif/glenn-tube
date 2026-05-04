import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';

export default function AuthPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <Card className="w-full space-y-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <Input type="email" placeholder="Email" aria-label="Email" />
        <Input type="password" placeholder="Password" aria-label="Password" />
        <Button className="w-full">Continue</Button>
      </Card>
    </main>
  );
}
