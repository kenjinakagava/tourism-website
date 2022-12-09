import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brazil Tourism</title>
        <meta
          name="description"
          content="Explore the beauty and culture of our city with our award-winning tours. From historic landmarks to hidden gems, we have something for everyone. Book your adventure today and experience the best of our destination."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}
