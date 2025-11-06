import "./globals.css";

export const metadata = {
  title: "Snack Delulu",
  description: "Homemade Snacks straight outta Delulu Kitchen!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">{children}</body>
    </html>
  );
}
