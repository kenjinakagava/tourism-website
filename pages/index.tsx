import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brazil Tourism</title>
        <meta
          name="description"
          content="Explore the beauty and culture of our city with our award-winning tours. From historic landmarks to hidden gems, we have something for everyone. Book your adventure today and experience the best of our destination."
        />
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
      <Header isHero={true} />
    </div>
  );
}
