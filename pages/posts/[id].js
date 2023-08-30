import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  // getPostDataでawaitとasyncを使っているので、getPostDataを呼び出す際にawaitを使う必要がある
  const postData = await getPostData(params.id);
  // ブログ投稿のデータを取得して、propsとして返す
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // pathsはgetAllPostIds()によって返されるオブジェクトの配列で、paramsキーを持つ
  // pathsは以下のような形式のオブジェクトの配列
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return {
    paths,
    fallback: false,
  };
}

// 各投稿のページにアクセスしたら、下記に基づくページが表示される
// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        {/* ページのタイトルをつける */}
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

// dynamic routesの基本的な使い方は下記の通り
// 1. pages/posts/[id].jsを作成する
// 2. pages/posts/[id].jsをレンダーするため、このページにreactコンポーネントを追加する
// 3. idに指定できる値の配列を返すgetStaticPaths関数を、pages/posts/[id].jsに追加する
// 4. idに基づいてページのデータを返すgetStaticProps関数を、pages/posts/[id].jsに追加する
