// スクロールしたらヘッダーを表示
window.addEventListener('scroll', function () {
  const elm = document.querySelector('.l-header')
  const scroll = window.pageYOffset
  if (scroll > 700) {
    elm.style.opacity = '1'
  } else {
    elm.style.opacity = '0'
  }
})


// インクルード
function includeHTML(url, targetId) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const html = xhr.responseText
      const target = document.querySelector(targetId)
      target.insertAdjacentHTML('afterbegin', html)
    }
  }
  xhr.send()
}

includeHTML('inc/header.html', '#header')
includeHTML('inc/footer.html', '#footer');

// bippa
window.addEventListener('load', function () {
  // テキストごとにspanタグを生成する
  var elements = document.querySelectorAll('.js-typing')
  elements.forEach(function (element) {
    var text = element.innerHTML
    var newText = ''
    text.split('').forEach(function (char) {
      if (char !== ' ') {
        newText += '<span style="display:none;">' + char + '</span>'
      } else {
        newText += ' '
      }
    })
    element.innerHTML = newText
  })

  // タイピングアニメーション
  elements.forEach(function (element) {
    var children = element.children
    Array.from(children).forEach(function (child, i) {
      var time = 150
      setTimeout(function () {
        child.style.display = 'inline'
      }, time * i)
    })
  })
});

// バナー
// document.addEventListener('DOMContentLoaded', function () {
//   var btn = document.querySelector('.c-fixed-bnr__btn')
//   btn.addEventListener('click', function () {
//     // クリックされたときに親要素に付与するクラス名を指定
//     var classNameToAdd = 'is-none'

//     // ボタンの親要素を取得
//     var parentElement = btn.parentNode

//     // 親要素に新しいクラス名を追加します
//     parentElement.classList.add(classNameToAdd)
//   })
// });

// DOMの読み込みが完了した際の処理を簡潔に記述
document.addEventListener('DOMContentLoaded', function () {
  // ボタン要素を変数に代入
  var btn = document.querySelector('.c-fixed-bnr__btn');

  // ボタンクリック時の処理を関数に切り出し
  function handleClick() {
    // クリックされたときに親要素に付与するクラス名を指定
    var classNameToAdd = 'is-none';

    // ボタンの親要素を直接取得
    var parentElement = btn.parentElement;

    // 親要素に新しいクラス名を追加
    parentElement.classList.add(classNameToAdd);
  }

  // ボタンクリック時の処理を登録
  btn.addEventListener('click', handleClick);
})
