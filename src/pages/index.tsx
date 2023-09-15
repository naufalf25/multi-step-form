import MobileScreen from '@/components/Mobile';
import { Ubuntu } from 'next/font/google';
import { useState } from 'react';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function Home() {
  const [page, setPage] = useState(1);

  const handlePageChange = (change: number) => {
    setPage(change);
  };

  return (
    <main className={ubuntu.className}>
      <MobileScreen page={page} setPage={handlePageChange} />
    </main>
  );
}
