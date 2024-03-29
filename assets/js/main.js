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

includeHTML('inc/head.html', '#head')
includeHTML('inc/header.html', '#header')
includeHTML('inc/footer.html', '#footer')
