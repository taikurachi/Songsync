import localFont from "next/font/local";
import "./globals.css";

const outfitBold = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-outfit-bold",
});

const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
});

const outfitSemiBold = localFont({
  src: "./fonts/Outfit-SemiBold.ttf",
  variable: "--font-outfit-semiBold",
});

export const metadata = {
  title: "Song & Ticketing App",
  description:
    "Generate your last played song and view the artist's next concerts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitRegular.variable}`}>{children}</body>
    </html>
  );
}
