# init-rem

## Install

```
$ npm install --save init-rem
```

## Usage

```js
import initRem from 'init-rem'

initRem()

or

initRem({
    clientWidth : document.documentElement.clientWidth,
    designWidth : 375, // 定义设计图尺寸宽度
    maxWidth : 500,    // 定义最大屏幕尺寸, 为了解决平板字体太大问题
    bodyFontSize: 14,  // 定义文档默认字体大小
    baseFontSize: 100  // 定义基准字号
                       // 设置100便于计算, 设计图是2倍图, 元素尺寸100px, 那么就是(100 / 2 / 10)rem
                       // 也不要小于12px, 虽然用10px也不错, 但是开发环境由于是Chrome,
                       // 小于12像素会有问题, 但是真实设备上是没问题的, 所以根据自己的开发环境决定
})
```
