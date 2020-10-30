<template>
  <div>
    <header class="header">
      <h1 class="title">
        リベ大生のレーダーチャート
      </h1>
      <p class="header-production-text">
        ※本サイトはリベ大ゲーム開発チャット有志の制作であり、リベ大【非公式の製作物】です。
      </p>
    </header>
    <Nuxt />
    <footer class="footer">
      <div class="footer-production-block footer-block">
        <h2 class="footer-production-title footer-title">Production</h2>
        <div class="footer-production-creator">
          <p class="footer-production-text">
            本サイトはリベ大ゲーム開発チャット有志の制作であり、リベ大【非公式の製作物】です。
          </p>
          <h3>Creator</h3>
          <figure><img src="~/assets/thanks.png"></figure>
          <p class="footer-production-text">
            あひる隊長・つばさ(婿養子)・はなか・あさみん・ふーみん・masato
          </p>
        </div>

        <ul>
          <li><a href="https://www.chatwork.com/#!rid189713620-1328868569835937792メッセージリンク" target="_blank" rel="noopener">「リベ大生のレーダーチャート」あひる隊長発案でリベ大の５つの力をレーダーチャートに作ってみました。</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/1jsKLQSEWBXLvsuNv_PgZNo7Nvv-WZnDqyRn8TX5FPhc/edit#gid=1341967672" target="_blank" rel="noopener">もちみな/望月水奈さんがExcelでの対応ができない方のために、スプレッドシートで作ってくださいました！</a></li>
        </ul>
      </div>
      <div class="footer-others-block footer-block">
        <h2 class="footer-others-title footer-title">Others</h2>
        <ul>
          <li><a href="https://typing.twi1.me/game/109176" target="_blank" rel="noopener">リベ大タイピング 単語編 30秒で打ちやすい</a></li>
          <li><a href="https://typing.twi1.me/game/109175" target="_blank" rel="noopener">リベ大タイピング 言葉編 60秒で勉強になる言葉を集めました</a></li>
          <li><a href="https://www.google.com/maps/d/drive?state=%7B%22ids%22%3A%5B%22186AMn8q9WZg6F5gYR_PYCccwpJSSa03K%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22107992747941846329792%22%7D&usp=sharing" target="_blank" rel="noopener">リベ大生のおススメMAP(東京・関東)※千葉地域チャットで話が出ていた素敵な案を使わせて頂き作成しました。</a></li>
          <li><a href="https://www.chatwork.com/#!rid189713620-1327939777944637441メッセージリンク" target="_blank" rel="noopener">「お金の大学検定」あひる隊長作成</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/1ZewuggBg_uSjshqB6CNPj45oUeUxol9u5zw4QVLRP6E/edit?usp=sharing" target="_blank" rel="noopener">参考リンク集 出来ていない部分は以下参照で改善してね</a></li>
          <li><a href="https://mm.tt/1549717729?t=OPnAust8Wi" target="_blank" rel="noopener">あさみん・ふーみん作成、知識マッチョな○○さん(マインドマイスター)</a></li>
        </ul>
      </div>
      <div class="copyright">リベ大ゲーム開発チャット</div>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-family:
    'Noto Sans JP',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #434343;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img {
  max-width: 100%;
}

.title {
  text-align: center;
  margin-top: 96px;
  font-size: 48px;
}

.header-production-text {
  text-align: center;
}

.footer {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 48px;
}
.footer-block {
  margin-bottom: 192px;
}
.footer-production-block {
  text-align: center;
}
.footer-production-creator {
  .footer-production-text {
    padding-bottom: 48px;
  }
  h3 {
    padding-bottom: 24px;
  }
}

.footer-production-block, .footer-others-block {
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      &:first-of-type {
        border-top: solid 1px #ddd;
      }
      border-bottom: solid 1px #ddd;
      a {
        text-decoration: none;
        color: #434343;
        transition: .3s;
        display: inline-block;
        padding: 1em 0;
        font-weight: bold;
        &:hover {
          color: #33bad2;
        }
      }
    }
  }
}
.footer-title {
  text-align: center;
  margin-bottom: 32px;
  font-family: 'Bad Script', sans-serif;
  font-weight: 400;
  font-size: 48px;
}
.copyright {
  text-align: center;
  font-size: 12px;
  padding: 2em 0;
}
</style>
