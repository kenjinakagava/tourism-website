import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isHero?: boolean;
  banner?: React.ReactNode;
  backgroundCoolor?: string;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
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
      <Header isHero={props.isHero} banner={props.banner} />
      <Main backgroundColor={props.backgroundCoolor}>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
