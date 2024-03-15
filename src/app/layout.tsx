import type { Metadata } from "next";
import "@/assets/bootstrap.min.css";
import "@/assets/main.scss";
import { MAIN_URL_APP } from "@/constants/app";

export const metadata: Metadata = {
  title: 'Trang chủ của chúng tôi',
  description: 'Đây là trang chủ của chúng tôi. Bạn có thể tìm thấy thông tin về sản phẩm, dịch vụ của chúng tôi tại đây.',
  applicationName: 'Home',
  keywords: ['Trang chủ', 'Home', 'Sản phẩm', 'Dịch vụ'],
  generator: 'NextJS',
  robots: 'index, follow',
  openGraph: {
    title: 'Trang chủ của chúng tôi',
    description: 'Đây là trang chủ của chúng tôi. Bạn có thể tìm thấy thông tin về sản phẩm, dịch vụ của chúng tôi tại đây.',
    images: ["https://avatars.githubusercontent.com/u/77420469?v=4"],
    type: 'website',
    url: MAIN_URL_APP,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root-app">{children}</body>
    </html>
  );
}
