// CSS fileをimportして、名前を与える
// ここでは、stylesという名前を与えている
import styles from "./layout.module.css";

export default function Layout({ children }) {
  // styles.containerは、layout.module.cssの.containerを指している
  // クラス名は、layout_container__FUycRというように、ランダムな文字列が付与される。
  // これは、CSS Modulesという機能で、CSSのクラス名が他のファイルのクラス名と衝突しないようにするためのもの
  return <div className={styles.container}>{children}</div>;
}
