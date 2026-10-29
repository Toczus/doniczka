import Link from 'next/link';
import Counter from '@/components/Counter';
import TimerToggle from '@/components/TimerToggle';
import CounterWithLog from '@/components/CounterWithLog';
import ContextCounterDisplay from '@/components/ContextCounterDisplay';
import ContextCounterButton from '@/components/ContextCounterButton';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      {/* ...pozostała zawartość strony... */}

      <h2>Krok 6: Context (ContextCounterDisplay + ContextCounterButton)</h2>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Poniżej dwa <strong>osobne, niepowiązane propsami komponenty</strong> (dwa osobne pliki).
        Łączy je wyłącznie wspólny <code>CounterContext</code> z <code>layout.js</code>.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ border: '2px solid #2563eb', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
            Plik: ContextCounterDisplay.js
          </p>
          <ContextCounterDisplay />
        </div>
        <div style={{ border: '2px solid #16a34a', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#16a34a', margin: 0 }}>
            Plik: ContextCounterButton.js
          </p>
          <ContextCounterButton />
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#777' }}>
        Kliknij przycisk w zielonej ramce (ContextCounterButton) — wartość w niebieskiej ramce
        (ContextCounterDisplay) zmieni się automatycznie, mimo że to dwa różne komponenty.
      </p>
      <Counter />
      <TimerToggle />
      <CounterWithLog />
    </main>
  );
}

