import Card from './src/components/Card';
import Counter from './src/components/Counter';


export default function AboutPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>O nas</h1>
      <Card title="Nasza misja">
        <p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
        <Counter />
      </Card>
    </main>
  );
}

