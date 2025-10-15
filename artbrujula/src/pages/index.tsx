
// pages/index.tsx
import dynamic from 'next/dynamic';
import '../i18n';

// Importa App sin SSR
const App = dynamic(() => import('./App'), { ssr: false });

export default function IndexPage() {
  return <App />;
}
