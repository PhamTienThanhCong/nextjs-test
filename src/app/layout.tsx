import type { Metadata } from "next";
import "../assets/bootstrap.min.css";
import "../assets/main.scss";


export const metadata: Metadata = {
  title: "Trang chủ ",
  description: "Trang chủ chứa mọi thông tin cần thiết cho người dùng",
};

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
