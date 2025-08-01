import './globals.css';
import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import SessionProvider from '../components/SessionProvider';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
