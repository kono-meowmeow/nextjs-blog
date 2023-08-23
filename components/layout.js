// CSS fileをimportして、名前を与える
// ここでは、stylesという名前を与えている
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Kono-meowmeow';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* styles.containerは、layout.module.cssの.containerを指している */}
      {/* クラス名は、layout_container__FUycRというように、ランダムな文字列が付与される。 */}
      {/* これは、CSS Modulesという機能で、CSSのクラス名が他のファイルのクラス名と衝突しないようにするためのもの */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile2.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              {/* aタグの代わりにLinkを使う */}
              {/* Linkを使うと、ブラウザは全てのページをロードするわけではないから、aタグのときより速い */}
              {/* developerツールでbackground: yellow;にして遷移するとわかりやすい */}
              {/* pages配下にファイルを作り、Linkを使えばルーティングする必要はない */}
              {/* ただし、Next.js外のページに遷移するにはaタグを使わないといけない */}
              <Image
                priority
                src="/images/profile2.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
