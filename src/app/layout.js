import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Confidence Emonena | Dev-Clinton</title>
          <link rel="icon" href="/logomain.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-title"
            content="Best freelance web developer in lagos, best freelance web developer in Nigeria"
          />

          <meta
            key="metaname"
            itemProp="name"
            name="title"
            content="Confidence Emonena | Dev-Clinton"
          />
          <meta
            key="metadescription"
            itemProp="description"
            name="description"
            content="Best freelance web developer in lagos, best freelance web developer in Nigeria"
          />
          <meta
            name="keywords"
            content="Developer, Web developer, mobile app developer, graphics designer, UI/UX designer, freelance"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
