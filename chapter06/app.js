class Todo {
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
    this.titleTag = document.getElementById('title');
    
    // リクエスト先のURL
    this.url = 'https://cog-study.herokuapp.com/js_advance_level4/chapter06/api/';
    
    // idの変数初期化
    this.id = 0;
    
    // 初期データの取得
    this.getInitialData();
  }
  
  async getInitialData() {
    // 初期データを表示するメソッド
    // URLにアクセスしてデータを取得する非同期メソッド
    // URLにリクエストして、データを取得
    const response = await fetch(this.url);
    // JSONデータを取得
    const data = await response.json();
    // データを表示する
    this.showData(data);
  }
  
  showData(data) {
    // データを表示する
    // JSONデータは配列なので繰り返し処理
    data.forEach((value) => {
      // 1行分のデータを表示
      this.showRow(value);
    });
  }
  
  showRow({title}) {
    // 1行分のデータを表示
    // id値を加算
    this.id++;
    // tdタグでidを作成
    const tdTagID = document.createElement('td');
    tdTagID.innerHTML = this.id;
    
    // tdタグでタイトルを作成
    const tdTagTitle = document.createElement('td');
    tdTagTitle.innerHTML = title;
    
    // trタグで1行を表示
    const trTag = document.createElement('tr');
    trTag.appendChild(tdTagID);
    trTag.appendChild(tdTagTitle);
    this.result.appendChild(trTag);
  }
  
  handleClick(event) {
    // クリックしたときのイベント用メソッド
    // 項目の値を取得
    const title = this.titleTag.value;
    
    // titleが空の場合表示しない
    if(title !== '') {
      // 1行の表示
      this.showRow({title});
      // 各フォームのリセット
      this.resetForm();
    }
  }
  
  resetForm() {
    // 各フォームのリセット
    this.titleTag.value = '';
  }
}

const app = new Todo();
app.init();
