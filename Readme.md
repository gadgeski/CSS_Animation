使用技術： JavaScript/CSS/HTML

<h1>【HTML】</h1>
このHTMLファイルは、ウェブページの基本的な構造を定義しています。
<h3><head>タグ:</h3>
   * charset="UTF-8": 文字エンコーディングをUTF-8に設定し、様々な言語の文字を正しく表示できるようにします。
   
   * http-equiv="X-UA-Compatible" content="IE=edge": Internet Explorerの最新のレンダリングモードを使用するように指示します。
   
   * name="viewport" content="width=device-width, initial-scale=1": レスポンシブデザインのための設定で、デバイスの幅に合わせてビューポートの幅を調整し、初期ズームレベルを1に設定します。
   
   * <title>-Mouse Hover Animation-</title>: ブラウザのタブやウィンドウに表示されるページのタイトルです。
   
   * <link rel="stylesheet" href="style.css" />: style.cssという外部CSSファイルを読み込み、ページのスタイルを適用します。
   
   * <script src="script.js" defer></script>: script.jsという外部JavaScriptファイルを読み込みます。defer属性により、HTMLの解析が完了した後にスクリプトが実行されるため、ページの読み込みがブロックされません。
 
<h3><body>タグ:</h3>
   * <header id="header">：ページのヘッダー部分です。
     
     * <button id="menu-open" class="btn-menu">Menu</button>: メニューを開くためのボタンです。ID menu-open とクラス btn-menu が付与されています。
     
     * <div class="menu-container">: メニューのコンテンツを保持するコンテナです。初期状態では非表示になっています。

       * <button id="menu-close" class="btn-menu">Close</button>: メニューを閉じるためのボタンです。ID menu-close とクラス btn-menu が付与されています。

       * <ul class="menu">: メニュー項目をリスト形式で表示します。
         * <li><a href="#">PRODUCTS</a></li>
         * <li><a href="#">INFORMATION</a></li>
         * <li><a href="#">CONTACT</a></li>
           各リスト項目はリンクになっており、クリックしてもページは遷移しません（href="#"のため）。

- <div class="box">Border Animation</div>: 「Border Animation」というテキストが表示される、CSSでアニメーションが適用される要素です。

<h1>【CSS】</h1>
このCSSファイルは、HTML要素の見た目を定義し、アニメーション効果を追加します。
 
<h3>body:</h3>
   * width: 100%; height: 100vh;: ボディ要素をビューポートの幅いっぱいに広げ、高さもビューポートの高さに合わせます。
   
   * background: url(img/IMG_042441.png) no-repeat;: img/IMG_042441.pngという画像を背景に設定し、繰り返さないようにします。
   
   * background-size: cover;: 背景画像を要素全体を覆うように拡大・縮小します。
 
 <h3>.box:</h3>
   * width: 720px; height: 480px;: ボックスの固定サイズを設定します。
   
   * margin: 13% auto 0;: 上部に13%のマージンを取り、左右は自動で中央に配置します。
   
   * display: flex; align-items: center; justify-content: center;: フレックスボックスを使い、子要素（「Border Animation」テキスト）を垂直方向・水平方向に中央揃えにします。
   
   * color: #fff; font-size: 32px; font-weight: bold;: テキストの色、サイズ、太さを設定します。
   
   * position: relative;: 疑似要素（::beforeと::after）を配置するための基準点を設定します。
   
   * transition: 0.4s;: box要素自体のプロパティ（例: background）が変更された際に、0.4秒かけて滑らかに変化するように設定します。

- .box::before、.box::after:

  - これらは box 要素の疑似要素です。HTML には存在しませんが、CSS で生成され、要素の前（::before）または後（::after）に表示されます。ここでは、ボックスの角に表示されるアニメーション用のボーダー（枠線）を作成するために使用されています。

  - content: "";: 疑似要素を表示するために必須です。空文字列を設定します。

  - width: 50px; height: 50px;: 疑似要素の初期サイズです。

  - border-top: 2px solid rgba(255, 255, 255, 0.5); / border-left: 2px solid rgba(255, 255, 255, 0.5);: 上辺と左辺（::before）または下辺と右辺（::after）に半透明の白い枠線を作成します。

  - position: absolute;: 親要素である box に対して相対的に配置します。

  - top: -1px; left: -1px; / bottom: -1px; right: -1px;: 親要素の角から少しだけ外側（-1px）に配置します。

  - transition: 0.4s; transition-delay: 0.5s;: 疑似要素のプロパティが変更された際に、0.4 秒かけて滑らかに変化するように設定します。transition-delay: 0.5s;は、ホバー解除時にアニメーションが 0.5 秒遅れて開始するように設定されています（ホバー時には transition-delay: 0s で上書きされます）。

- .box:hover:before, .box:hover::after:
- box 要素にマウスがホバーしたときに、::before と::after 疑似要素のスタイルを変化させます。
  - width: 100%; height: 100%;: 疑似要素のサイズを親要素（.box）の幅と高さ全体に広げます。これにより、角のボーダーがボックス全体を囲むように見えます。
  - border-color: rgba(255, 255, 255, 0.3);: ボーダーの色を少し透明度が高い白に変更します。
  - transition-delay: 0s;: ホバー時はアニメーションの遅延をなくします。

<h3>.box:hover:</h3>
  - box 要素にマウスがホバーしたときに、box 要素自体のスタイルを変化させます。
  - background: rgba(255, 255, 255, 0.1);: 背景色を半透明の白にします。
  - backdrop-filter: blur(15px);: ホバー時に背景にぼかし効果を適用します。
  - transition-delay: 0.3s;: ホバー時の box 要素自体の背景アニメーションが 0.3 秒遅れて開始するように設定します。

<h1>JavaScript (script.js)</h1>
このJavaScriptファイルは、ナビゲーションメニューの開閉機能を提供します。
 * document.addEventListener("DOMContentLoaded", function () { ... });:
   
   * HTMLドキュメントが完全に読み込まれて解析された後に、指定された関数を実行します。これにより、スクリプトがHTML要素にアクセスできるようになる前に実行されるのを防ぎます。
 
<h3>要素の取得:</h3>
   * const menuOpenButton = document.getElementById("menu-open");: IDがmenu-openの要素（「Menu」ボタン）を取得します。
   
   * const menuCloseButton = document.getElementById("menu-close");: IDがmenu-closeの要素（「Close」ボタン）を取得します。
   
   * const menuContainer = document.querySelector(".menu-container");: クラスがmenu-containerの最初の要素（メニューコンテナ）を取得します。
 
 <h3>要素の存在チェック:</h3>
   * if (menuOpenButton && menuCloseButton && menuContainer): 取得した要素がすべて存在するかどうかを確認します。これにより、要素が見つからなかった場合にエラーが発生するのを防ぎます。
 
<h3>イベントリスナーの設定:</h3>
   * menuOpenButton.addEventListener("click", function () { ... });: 「Menu」ボタンがクリックされたときに実行される関数を設定します。
     
     * menuContainer.classList.add("is-open");: menu-container要素にis-openというクラスを追加します。このクラスがCSSによってメニューを表示する役割を果たします。
   
   * menuCloseButton.addEventListener("click", function () { ... });: 「Close」ボタンがクリックされたときに実行される関数を設定します。
     * menuContainer.classList.remove("is-open");: menu-container要素からis-openクラスを削除します。これにより、メニューが非表示になります。
 
<h3>エラーハンドリング:</h3>
   * else { console.error("メニュー関連の要素が不明。ID及びclass名を確認してください。"); }: 上記の要素のいずれかが取得できなかった場合に、コンソールにエラーメッセージを出力します。これはデバッグに役立ちます。

<h1>【まとめ】</h1>
このコードは、シンプルなホバーアニメーションを持つボックスと、JavaScriptで開閉するナビゲーションメニューを持つウェブページを作成します。

CSS の疑似要素とトランジションを巧みに利用して、視覚的に魅力的なホバーエフェクトを実現しています。

また、JavaScript を使用して、クリックイベントに基づいてメニューの表示/非表示を切り替えています。
