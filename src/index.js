var assign = Object.assign || require('object.assign')
export default function initRem (options) {
  options = assign({
    clientWidth : document.documentElement.clientWidth,
    designWidth : 375, // 定义设计图尺寸宽度
    maxWidth    : 500, // 定义最大屏幕尺寸, 为了解决平板字体太大问题
    bodyFontSize: 14 , // 定义文档默认字体大小
    baseFontSize: 100  // 定义基准字号
                       // 设置100便于计算, 设计图是2倍图, 元素尺寸100px, 那么就是(100 / 2 / 10)rem
                       // 也不要小于12px, 虽然用10px也不错, 但是开发环境由于是Chrome,
                       // 小于12像素会有问题, 但是真实设备上是没问题的, 所以根据自己的开发环境决定
  }, options)


  _setBaseFontSize()
  _setBodyFontSize()
  _setReCalcRem()

  // 设置文档默认字体
  function _setBodyFontSize () {
    if (document.body) document.body.style.fontSize = options.bodyFontSize + 'px'
    else document.addEventListener('DOMContentLoaded', _setBodyFontSize, false)
  }

  // 设置REM基准字号 1rem = 设计图尺寸 / 屏幕dpr / 基准字号
  function _setBaseFontSize () {
    const rem = options.baseFontSize * (options.clientWidth > options.maxWidth ? options.maxWidth : options.clientWidth) / options.designWidth
    document.documentElement.style.fontSize = rem + 'px'
  }

  // 设置屏幕尺寸变化事件代理, 重新计算REM基准尺寸
  function _setReCalcRem () {
    document.addEventListener('DOMContentLoaded', _setBaseFontSize, false)
    window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', _setBaseFontSize, false)
  }
}