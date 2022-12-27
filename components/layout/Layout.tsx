import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isHero?: boolean;
}

const Layout = ({ children, title, description, isHero }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <link
          rel="icon"
          href="/FaviconDark.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/FaviconLight.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Header isHero={isHero} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
