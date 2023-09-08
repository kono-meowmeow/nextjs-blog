import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        {/* ページ名をFirst Postにする */}
        <title>First Post</title>
        {/* サードパーティのJSを追加。ここではfacebookのプラグイン */}
        {/* 通常は下記のようにscriptタグを使うが、ページの読み込みが遅くなるのでNext.jsでは採用しない */}
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        {/* Next.jsではScriptタグを使う */}
        {/* strategyはサードパーティのスクリプトを読み込むタイミングをコントロールする */}
        {/* lazyOnloadはブラウザのアイドル時間中に遅延して読み込むように指示する */}
        {/* onLoadはスクリプトの読み込みが終わったら即座にJSのコードを実行させるために使う */}
        {/* 以下の例だと、スクリプトの読み込みが終わったらconsole.logが実行される */}
        <Script
          src="https://connect.facebook.net/ja_JP/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Post</h1>
      <b>
        このページはチュートリアルだと削除するように指示がありますけどね、<br />
        何でもかんでもいうこと聞くと思うなよ
      </b>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
