class PocketMoneyBook {
  constructor() {
    // 各メソッドのthisをバインドする
    
    
    
  }
  
  init() {
    // Windowの読み込みが完了したときの動作の登録
    window.addEventListener('load', this.handleOnLoad);
  }
  
  handleOnLoad(event) {
    // Windowが読み込まれた時に動作するメソッド
    
    
    
  }
  
  async getInitialData() {
    // 初期データを表示するためのメソッド
    // URLからデータを取得して表示する
    // URLにリクエストして、データを取得
    
    
    
  }
  
  showData(data) {
    // データを表示するメソッド
    
    
    
  }
  
  showRow({item, payment, amount}) {
    // 1行分のデータを表示
    
    
    
  }
  
  handleClick(event) {
    // クリックしたときのイベント用メソッド
    
    
    
  }
  
  resetForm() {
    // 各フォームのリセット
    
    
    
  }
}

const app = new PocketMoneyBook();
app.init();
