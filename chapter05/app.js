class PocketMoneyBook {
  constructor() {
    // 各メソッドのthisをバインドする
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  init() {
    // Windowの読み込みが完了したときの動作の登録
    window.addEventListener('load', this.handleOnLoad);
  }
  
  handleOnLoad(event) {
    // Windowが読み込まれた時に動作するメソッド
    // idがresultのタグを取得
    this.result = document.getElementById('result');

    // idがbtnのタグを取得
    this.btnTag = document.getElementById('btn');
    // btnタグをクリックしたときの処理の登録
    this.btnTag.addEventListener('click', this.handleClick);
    
    // 各入力フォームのタグを取得
    this.itemTag = document.getElementById('item');
    this.paymentTag = document.getElementById('payment');
    this.amountTag = document.getElementById('amount');
    
    // リクエスト先のURL
    this.url = 'https://cog-study.herokuapp.com/js_advance_level4/chapter05/api/';
    
    // 残高の変数初期化
    this.balance = 0;
    
    // 初期データの取得
    this.getInitialData();
  }
  
  async getInitialData() {
    // 初期データを表示するためのメソッド
    // URLからデータを取得して表示する
    // URLにリクエストして、データを取得
    const response = await fetch(this.url);
    // JSONデータを取得
    const data = await response.json();
    // データを表示する
    this.showData(data);
  }
  
  showData(data) {
    // データを表示するメソッド
    // JSONデータは配列なので繰り返し処理
    data.forEach((value) => {
      // 1行分のデータを表示
      this.showRow(value);
    });
  }
  
  showRow({item, payment, amount}) {
    // 1行分のデータを表示
    // tdタグで項目を作成
    const tdTagItem = document.createElement('td');
    tdTagItem.innerHTML = item;
    
    // tdタグで入金、出金を作成
    const tdTagPaymentIn = document.createElement('td');
    const tdTagPaymentOut = document.createElement('td');
    
    // 入出金の判定
    if(payment === 'in') {
      // 入金の場合
      tdTagPaymentIn.innerHTML = amount;
      // 残高を加算
      this.balance += amount;
    } else {
      // 出金の場合
      tdTagPaymentOut.innerHTML = amount;
      // 残高を減算
      this.balance -= amount;
    }
    
    // tdタグで残高を作成
    const tdTagBalance = document.createElement('td');
    tdTagBalance.innerHTML = this.balance;
    
    // trタグで1行を表示
    const trTag = document.createElement('tr');
    trTag.appendChild(tdTagItem);
    trTag.appendChild(tdTagPaymentIn);
    trTag.appendChild(tdTagPaymentOut);
    trTag.appendChild(tdTagBalance);
    this.result.appendChild(trTag);
  }
  
  handleClick(event) {
    // クリックしたときのイベント用メソッド
    // 項目の値を取得
    const item = this.itemTag.value;
    // 入出金の値を取得
    const payment = this.paymentTag.value;
    // 金額の値を取得
    const amount = parseInt(this.amountTag.value);
    
    // 入出金が選択されている場合
    if(payment !== '') {
      // 1行の表示
      this.showRow({item, payment, amount});
      // 各フォームのリセット
      this.resetForm();
    }
  }
  
  resetForm() {
    // 各フォームのリセット
    this.itemTag.value = '';
    this.paymentTag.selectedIndex = 0;
    this.amountTag.value = '';
  }
}

const app = new PocketMoneyBook();
app.init();
