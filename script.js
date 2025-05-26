// SlideMenu
// HTML読み込み完了後、スクリプト実行の為のイベント
document.addEventListener("DOMContentLoaded", function () {
  // 必要な要素をID取得
  const menuOpenButton = document.getElementById("menu-open");
  // Menuボタン
  const menuCloseButton = document.getElementById("menu-close");
  // Closeボタン
  const menuContainer = document.querySelector(".menu-container");
  // メニュー全体を囲むコンテナ

  // 要素を正しく取得できていた場合
  if (menuOpenButton && menuCloseButton && menuContainer) {
    // "Menu"ボタンがクリックされた時の処理
    menuOpenButton.addEventListener("click", function () {
      menuContainer.classList.add("is-open");
      // menu-containerにis-openclass追加
    });

    // "Close"ボタンがクリックされた際の処理
    menuCloseButton.addEventListener("click", function () {
      menuContainer.classList.remove("is-open");
      // menu-containerからis-openclass削除
    });
  } else {
    console.error(
      "メニュー関連の要素が不明。ID及びclass名を確認してください。"
    );
  }
});
