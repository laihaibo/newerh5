/*
* @Author: laihaibo
* @Date:   2016-08-10 12:10:03
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-08-10 14:14:02
*/

'use strict';
require("./css/H5.css");
require("./css/H5_loading.css");
require("./css/H5ComponentBase.css");
require("./css/H5ComponentBar.css");
require("./css/H5ComponentPoint.css");
// require("./css/index.css");
var H5ComponentBase = require('./js/H5ComponentBase.js');
var H5ComponentBar = require('./js/H5ComponentBar.js');
var H5ComponentPoint = require('./js/H5ComponentPoint.js');
var H5 = require('./js/H5.js');
var H5_loading = require('./js/H5_loading.js');
$(function () {
  var h5 = new H5();
  h5.whenAddPage = function () {
    this.addComponent('slide_up', {
      bg: 'imgs/next.png',
      center: true,
      css: {
        opacity: 0,
        left: 0, bottom: -20, width: 20, height: 25, zIndex: 999
      },
      animateIn: {
        opacity: 1, bottom: '-1px'
      },
      animateOut: {
        opacity: 0, bottom: '-20px'
      },
      delay: 2000
    })
  };

  h5
    .addPage('face')
    .addComponent('topic', {
      center: true,
      width: 395,
      height: 130,
      bg: 'imgs/face_logo.png',
      css: {
        top: 0,
        opacity: 0
      },
      animateIn: {
        top: 100,
        opacity: 1
      },
      animateOut: {
        top: 0,
        opacity: 0
      }
    })
    .addComponent('slogan', {
      center: true,
      width: 365,
      height: 99,
      bg: 'imgs/face_slogan.png',
      css: {
        top: 180,
        opacity: 0
      },
      animateIn: {
        left: '50%',
        opacity: 1
      },
      animateOut: {
        left: '0',
        opacity: 0
      },
      delay: 500
    })
    .addComponent('face_ad_left', {
      width: 370,
      height: 493,
      bg: 'imgs/face_img_left.png',
      css: {
        left: -50,
        bottom: -50,
        opacity: 0
      },
      animateIn: {
        left: 0,
        bottom: 0,
        opacity: 1
      },
      animateOut: {
        left: -50,
        bottom: -50,
        opacity: 0
      },
      delay: 800
    })
    .addComponent('face_ad_right', {
      width: 276,
      height: 449,
      bg: 'imgs/face_img_right.png',
      css: {
        right: -50,
        bottom: -50,
        opacity: 0
      },
      animateIn: {
        right: 0,
        bottom: 0,
        opacity: 1
      },
      animateOut: {
        right: -50,
        bottom: -50,
        opacity: 0
      },
      delay: 800
    })
    .addPage('desc')
    .addComponent('caption', {
      text: '核心理念'
    })
    .addComponent('text', {
      center: true,
      width: 500,
      height: 30,
      text: 'IT教育网=只学有用的',
      css: {
        top: 160,
        opacity: 0, textAlign: 'center', color: 'red', fontSize: '26px'
      },
      animateIn: {
        top: 160,
        opacity: 1
      },
      animateOut: {
        top: 240,
        opacity: 0
      },
      delay: 0
    })
    .addComponent('description', {
      center: true,
      width: 481,
      height: 295,
      bg: 'imgs/description_bg.gif',
      text: 'IT教育网=只学有用的',
      css: {
        top: 300,
        opacity: 0, boxSizing: 'border-box', padding: '8px 5px 10px', color: '#fff', fontSize: '15px', lineHeight: '18px', textAlign: 'justify'
      },
      text: '2013年，IT教育网的诞生引领中国IT职业教育进入新时代；高质量实战课程、全新教学模式、实时互动学习，以领先优势打造行业品牌；迄今为止，IT教育网已成为中国规模最大、互动性最高的IT技能学习平台。',
      animateIn: {
        top: 240,
        opacity: 1
      },
      animateOut: {
        top: 300,
        opacity: 0
      },
      delay: 1000
    })
    .addComponent('people', {
      center: true,
      width: 515,
      height: 305,
      bg: 'imgs/p1_people.png',
      css: {
        bottom: 0,
        opacity: 0
      },
      animateIn: {
        bottom: 40,
        opacity: 1
      },
      animateOut: {
        bottom: 0,
        opacity: 0
      },
      delay: 500
    })
    .addPage('qdkfkc')
    .addComponent('caption', { text: '前端开发课程' })//Bar
    .addComponent('bar', {
      type: 'bar',
      data: [
        ['HTML5', .5, 'green'],
        ['CSS3', .1, 'blue', 0, '110%'],
        ['JS', .1, 'red', 0, '-50%'],
      ],


      width: 530,
      height: 600,

      css: {
        top: 180,
        opacity: 0,
      },
      animateIn: { top: 300, opacity: 1, },
      animateOut: { top: 180, opacity: 0, },
      center: true
    })
    .addComponent('msg', {
      text: '前端开发课程JS占到50%',
      css: {
        opacity: 0, bottom: 120,
        textAlign: 'center', width: '100%', color: '#ff7676'
      },
      animateIn: { opacity: 1 },
      animateOut: { opacity: 0 }
    })
    .addPage('kcndfb')
    .addComponent('caption', { text: '课程难度分布' })//Point
    .addComponent('point', {
      type: 'point',
      data: [
        ['HTML5', .5, 'green', '20%', '0'],
        ['CSS3', .3, 'aqua', 0, '110%'],
        ['JS', .3, 'red', '-20%', '-50%'],
      ],


      width: 300,
      height: 300,

      css: {
        bottom: 0,
        opacity: 0,
      },
      animateIn: { bottom: '40%', opacity: 1, },
      animateOut: { bottom: 0, opacity: 0, },
      center: true,
    })
    .addComponent('msg', {
      text: '课程难度最高为50%',
      css: {
        opacity: 0, bottom: 120,
        textAlign: 'center', width: '100%', color: '#ff7676'
      },
      animateIn: { opacity: 1 },
      animateOut: { opacity: 0 }
    })
    .addPage('tails')
    .addComponent('logo', {
      center: true,
      width: 359,
      height: 129,
      bg: 'imgs/tail_logo.png',
      css: {
        top: 240,
        opacity: 0
      },
      animateIn: {
        opacity: 1,
        top: 210
      },
      animateOut: {
        opacity: 0,
        top: 240
      },
    })
    .addComponent('slogan', {
      center: true,
      width: 359,
      height: 129,
      bg: 'imgs/tail_slogan.png',
      css: {
        top: 280,
        opacity: 0
      },
      animateIn: {
        opacity: 1,
        left: '50%'
      },
      animateOut: {
        opacity: 0,
        left: '0%'
      },
      delay: 500,
    })
    .addComponent('share', {
      width: 128,
      height: 120,
      bg: 'imgs/tail_share.png',
      css: {
        top: 110,
        opacity: 0
      },
      animateIn: {
        opacity: 1,
        top: 10,
        right: 10,
        right: 10
      },
      animateOut: {
        opacity: 0,
        top: 110,
        right: 110
      },
      delay: 500,
    })
    .addComponent('back', {
      center: true,
      width: 52,
      height: 50,
      bg: 'imgs/tail_back.png',
      onclick: function () {
        $.fn.fullpage.moveTo(1);
      }
    })
    .loader(['imgs/tail_back.png', 'imgs/tail_share.png', 'imgs/tail_slogan.png', 'imgs/footer.png']);
});
// $(function(){
//             $('#h5_fullpage').fullpage({
//             anchors:['page1','page2','page3','page4','page5'],
//           });
//         });
