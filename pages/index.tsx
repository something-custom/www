import type { NextPage } from "next";
import Head from "next/head";
import css from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Something Custom</title>
      </Head>

      <div className={css.page}>
        <h1 className={css.title}>Something Custom</h1>

        <footer className={css.footer}>
          <a href="mailto:hello@somethingcustom.com" className={css.link}>
            hello@somethingcustom.com
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
