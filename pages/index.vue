<template>
  <div class="container">
    <div class="fix-chart">
      <Chart :chart-data="datacollection" :options="options" />
    </div>
    <div class="comment-block">
      <div class="comment-block-balloon balloon">
        <p>{{ comment }}</p>
      </div>
      <div class="comment-block-image">
        <img src="~/assets/gakucho.png">
      </div>
    </div>
    <div
      v-for="(questions, index) in power_questions"
      :key="index"
      class="questions">
      <h2 class="questions-title">{{ questions.title }}</h2>
      <ul class="questions-list">
        <li
          v-for="(question, index) in questions.questions"
          :key="index"
          class="questions-list-item">
          <Toggle
            v-bind:id="questions.name + '-' + index"
            v-bind:name="questions.name"
            v-bind:title="question"/>
        </li>
      </ul>
    </div>
    <h2 class="power-title">リベ大の５つの力</h2>
    <Chart :chart-data="datacollection" :options="options" />
    <div class="comment-block comment-block-second">
      <div class="comment-block-balloon balloon">
        <p>{{ comment }}</p>
      </div>
      <div class="comment-block-image">
        <img src="~/assets/gakucho.png">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      data: null,
      datacollection: null,
      options: null,
      comment: '当てはまったらチェックしてな！',
      power_questions: [
        {
          title: '貯める',
          name: 'power-store',
          questions: [
            '格安SIMなどを使い携帯端末の通信費を5000円以上払っていない。',
            '電力会社を楽天電気等に見直しを行った。',
            '高額療養費制度を正しく知っている。',
            '傷病手当金について理解している。',
            '雇用保険の失業給付について理解している。',
            '保険を理解して、保険の支払いは一か月５０００円未満',
            '夢のマイホームは負債になりやすいことを理解している',
            '賃貸契約を正しく理解し、契約時、退去時に余計な出費を出さない。',
            '車を所有していない。もしくは中古車で購入した。',
            'ふるさと納税をおこなっている。',
            '医療費控除を理解している。',
            '昨年度、確定申告をおこなった',
            '家計簿等を付け支出を把握している',
            '楽天経済圏を活用している。',
          ],
        },
        {
          title: '守る',
          name: 'power-protect',
          questions: [
            '全世界株式投資の平均利回りは年5％～7％。相場を知り適切な投資商品を選んで運用している。',
            '連帯保証や根保証の危険性を理解している。',
            '簿記・FP資格を勉強している。',
            '4大ローン「住宅」「車」「奨学金」「リボ払い」を理解し、使用していない。',
            '銀行に預金することのデメリットとして超低金利、インフレに弱い等のリスクを理解している。',
            '自身の年金額や介護費用等にかかる金額を考え、正しく老後に備えている',
            'ワンルームマンション投資を行っていない',
            '高額の情報商材を購入していない。',
            '外貨預金はインフレ等のリスクから行っていない。',
            '世の中サギ詐欺ワールド。ポンジスキームや高利回りで勧誘するような手口に対する知識がある。',
            '自然災害で資産を失うかもしれないリスクに備えている。',
            '電子管理されている資産のパスワード等が盗まれないように管理している。',
            '副業を始め、経費計上、青色申告特別控除を活用している。',
            '生活防衛資金が確保されている',
          ],
        },
        {
          title: '稼ぐ',
          name: 'power-earn',
          questions: [
            '事業所得がある。',
            '不動産所得がある。',
            '配当＆利子所得がある。',
            '時間単価の考え方を理解し、物を購入している。',
            '副業を始め、1円でも稼ぐことが出来た。',
            '仕事が早くなるコツ「目的の明確化」「優先度」「完璧を目指さない」が意識している。',
            '情報の良し悪しを自身で判断して、行動につなげている。',
            '自分の時間を失う、自己犠牲的なサービス残業をしていない。',
            'ネットなど時代にあったツールを駆使して副業をしている',
            'フロー型、ストック型の収入について理解している',
            '転職エージェントの活用等で自分の市場価値を理解している。',
            '不動産投資の「表面利回り」と「実質利回り」を理解している。',
            'フリマアプリを使い、不用品の売却を行ったことがある。',
            'SNSを使い情報発信を行っている。',
          ],
        },
        {
          title: '使う',
          name: 'power-use',
          questions: [
            'プレゼント用の口座を持ち、他の人に実際にプレゼントをしている。',
            '世の中が良くなるために活動している所に寄付や支援をしている。',
            '自分が本当に好きなことにお金を使い、心を豊かにしている。',
            '自己投資は最高の投資。自分の価値を上げることにお金を使っている。',
            '乾燥機能付き洗濯機、食器洗い機、ロボット掃除機等、時間短縮家電で時間を削減している。',
            '自身の健康や筋肉の為に、お金を適切に使っている。',
            '仕事効率が上がるような道具にはお金を適切にかけている。',
            '宝くじやギャンブルにお金を使っていない。',
            '友達、コミュニティのためにお金を使い、自身の居心地の良い場所を複数確保している。',
            '自身が経験したことの無いことにお金を使い、見聞を広めるようにしている。',
            '価格と価値の違いを理解し、無駄な浪費をしていない。',
            'マインドマップを使い、人生の羅針盤を手に入れている。',
            'GIVEについて理解し、行動することができている。',
            '原因自分論を理解し、円滑な人間関係に活かしている。',
          ],
        },
        {
          title: '増やす',
          name: 'power-increase',
          questions:[
            '投資する目的が明確に決められている。',
            '投資とギャンブルの違いが理解している。',
            '手数料等を考えて、ネット証券会社の口座を開設して、株式投資を行っている。',
            '福利の力を理解している。',
            '積み立てNISAで「ｓ＆P500」等のインデックス投資を毎月行っている。',
            'インデックス投資とアクティブ投資の違いを理解し、インデックス投資を行っている。',
            'iDeCoを理解し、活用するかしないかの判断が自身で出来る。',
            'アセット・アロケーション(資産配分)を考え、実践している。',
            '不動産を購入して賃貸収入を得ている',
            '不動産投資仲間が居て、相談することができる。',
            '昨年と比較して、金融資産が増やせた。',
            '高配当株投資の特徴を理解し、投資を行っている',
            'ドルコスト平均法の考え方を理解している。',
            '自身のリスク許容度の範囲内で投資を行っている。',
          ],
        }
      ]
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.data = [
        this.$store.state.power_store,
        this.$store.state.power_protect,
        this.$store.state.power_earn,
        this.$store.state.power_use,
        this.$store.state.power_increase,
      ]
      this.datacollection = {
        labels: ['貯める', '守る', '稼ぐ', '使う', '増やす'],
        datasets: [
          {
            label: 'リベ大生の５つの力',
            data: this.data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 0,
            spanGaps: false,
          },
        ]
      }
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scale:{
          ticks:{
            suggestedMin: 0,
            suggestedMax: 14,
            stepSize: 2,
            // callback: function(value, index, values){
            //   return  value +  '点'
            // }
          }
        }
      }
    },
    getComment(val) {
      console.log(val)
      const sum = val.reduce(function(a, x){return a + x;});
      console.log(sum)
      if (sum === 0) {
        this.comment = '当てはまったらチェックしてな！'
        return
      }
      if (sum >= 1 && sum < 30) {
        this.comment = 'まだまだやな((+_+))騙されんように知識マッチョになろな'
        return
      }
      if (sum >= 30 && sum < 60) {
        this.comment = 'もうちょっとや(*´Д｀)経済的自由までもう一歩や'
        return
      }
      if (sum >= 60) {
        this.comment = 'バッチリやな(*´ω`*)ワシが居なくても大丈夫そうや'
        return
      }
    }
  },
  computed: {
    power() {
      return this.$store.getters.power
    }
  },
  watch: {
    power(val, old) {
      this.fillData()
      this.getComment(val)
      // console.log('watch', val, old)
    }
  }
}

</script>

<style lang="scss">

.fix-chart {
  canvas {
    height: 200px !important;
    width: 200px !important;
  }
  display: inline-block;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.comment-block {
  text-align: center;
}

.comment-block-second {
  margin-top: 48px;
}

.questions {
  &:not(:first-of-type) {
    margin-top: 48px;
  }

  .questions-title {
    margin: 1em 0;
  }

  .questions-list {
    list-style-type: none;
    padding-left: 0;
  }
}

.balloon {
  position: relative;
  display: inline-block;
  margin: 1.5em 0;
  padding: 1em 2em;
  min-width: 120px;
  max-width: 100%;
  color: #484848;
  font-size: 16px;
  background: #FFF;
  border: solid 3px #484848;
  box-sizing: border-box;
  border-radius: 1em;
  &::before {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid #FFF;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid #484848;
    z-index: 1;
  }
  p {
    margin: 0;
    padding: 0;
  }
}

.power-title {
  margin-top: 48px;
  text-align: center;
  margin-bottom: 32px;
  font-family: 'Bad Script', sans-serif;
  font-weight: 400;
  font-size: 40px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 900px;
  padding: 96px 48px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
}

</style>
