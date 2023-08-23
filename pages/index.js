import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        {/* Headタグはページのタイトルやメタデータを設定するためのもの */}
        {/* htmlの<head></head>タグの代わりに使う、React Componentが<Head></Head> */}
        {/* next/headモジュールからimportできる(L1参照) */}
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>駆け出しエンジニアです。猫が好きです。<a href="https://twitter.com/kono_meowmeow">Twitter</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/first-post">my first post</Link>
      </section>
    </Layout>
  );
}
