// スクロールしたらヘッダーを表示
window.addEventListener('scroll', function () {
  const elm = document.querySelector('.l-header')
  const scroll = window.pageYOffset
  if (scroll > 700) {
    elm.style.opacity = '1'
  } else {
    elm.style.opacity = '0'
  }
});

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
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.c-fixed-bnr__btn')
  btn.addEventListener('click', function () {
    // クリックされたときに親要素に付与するクラス名を指定します
    var classNameToAdd = 'is-none'

    // ボタンの親要素を取得します
    var parentElement = btn.parentNode

    // 親要素に新しいクラス名を追加します
    parentElement.classList.add(classNameToAdd)
  })
});
