import "../styles/globals.css";

export const metadata = {
  title: "Digivate <> Veganic",
  description: "A love letter website from Digivate to Veganic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
