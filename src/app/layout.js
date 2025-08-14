import { Poppins } from "next/font/google"
import './globals.css';
import Navbar from '@/components/Navbar';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Arena Wisata',
  description: 'Liburan Sat Set Anti Ribet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Cukup gunakan 'font-sans'. Tidak perlu lagi poppins.variable */}
      <body className={`${poppinsFont.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
