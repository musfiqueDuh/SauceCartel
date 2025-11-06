import "./globals.css";

export const metadata = {
  title: "Glowspace",
  description: "A cinematic lava lamp mobile menu by WreefX Sys.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">{children}</body>
    </html>
  );
}
