const express = require('express');
const app = express();
const port = 3000;

// 静的ファイルを提供する
app.use(express.static('public'));

// ルートへのリクエストに対するレスポンス
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
