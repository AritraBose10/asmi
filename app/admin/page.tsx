import type { Metadata } from 'next';
import { isAdmin } from '@/lib/auth';
import AdminApp from './AdminApp';
import './admin.css';

export const metadata: Metadata = {
  title: 'Media admin',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  return <AdminApp signedIn={await isAdmin()} />;
}
