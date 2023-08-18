// _app.js は全てのページで共通するコンポーネントを定義するファイル
// 例えば、全てのページで共通のCSSを読み込むなど
// 全てのページで共通するCSSについては、pages/_app.js以外にimportする方法はない

// pages/_app.js を追加した際、サーバーの再起動が必要

// styles/global.cssを読み込む
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
