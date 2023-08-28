import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// この関数は、ビルド時にサーバーサイドで実行される
// いわゆるSSG(Static Site Generation)と呼ばれるもの
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// 対して、getServerSidePropsは、リクエスト毎にサーバーサイドで実行される
// いわゆるSSR(Server Side Rendering)と呼ばれるもの
// このリポジトリで作るブログでは、リクエスト毎にデータを取得する必要がないので、getStaticPropsを使う
// 以下はgetServerSidePropsの例のコード
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
// 引数のcontextには、リクエストに関する情報が入っている


export default function Home({ allPostsData }) {
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

      {/* 以下は、getStaticProps関数で取得したblogの情報 */}
      {/* SSGなので、build時に情報が取得される */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
