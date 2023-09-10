import Head from "next/head";
function PageHead({ headTitle }) {
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "Heart Of The Nile - A Sudanese Restaurant"}
        </title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}
export default PageHead;
