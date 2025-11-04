import "./globals.css";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Imen’s Portfolio",
  description: "My personal portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        <Sidebar /> {/* ← Here you call your Sidebar component */}
        <main className="ml-64 flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}
