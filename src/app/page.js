import Link from 'next/link';
import Card from './src/components/Card';
import Counter from './src/components/Counter';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
    </main>
  );
}


export default function AboutPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>O nas</h1>
      <Card title="Nasza misja">
        <p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
      </Card>
    </main>
  );
}
