// reqはHTTPリクエストのオブジェクト、resはHTTPレスポンスのオブジェクト
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}

// このAPIルートは、http://localhost:3000/api/hello にアクセスすると確認できる
// reqはhttp.IncomingMessageのインスタンスで、HTTPリクエストに関する情報を含む
// resはhttp.ServerResponseのインスタンスで、HTTPレスポンスに関する情報を含む

// APIルートを、getStaticPropsやgetStaticPathsから呼び出すべきではない
// 代わりに、サーバー側のコードに直接書くべき
// なぜなら、getStaticPropsやgetStaticPathsは、サーバーサイドのみで実行されてクライアントサイドでは実行されないから
