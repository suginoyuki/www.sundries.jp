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
