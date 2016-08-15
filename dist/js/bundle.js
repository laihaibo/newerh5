/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: laihaibo
	 * @Date:   2016-08-14 12:52:13
	 * @Last Modified by:   laihaibo
	 * @Last Modified time: 2016-08-15 22:29:01
	 */

	'use strict';
	var H5 = __webpack_require__(1);
	var H5_loading = __webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(25);
	__webpack_require__(27);
	__webpack_require__(29);
	__webpack_require__(31);
	__webpack_require__(33);

	$(function() {

	    var h5 = new H5();
	    //增加翻页动画
	    h5.whenAddPage = function() {
	        this.addComponent('slide_up', {
	            bg: '/src/imgs/next.png',
	            center: true,
	            css: {
	                opacity: 0,
	                left: 0,
	                bottom: 0,
	                width: 25,
	                height: 25,
	                zIndex: 999
	            },
	            animateIn: {
	                opacity: 1,
	                bottom: '10px'
	            },
	            animateOut: {
	                opacity: 0,
	                bottom: '0px'
	            },
	            delay: 2000
	        });
	    }
	    //增加页和组件
	    h5
	        .addPage('face')
	            .addComponent('logo', {
	                center: true,
	                width: 255,
	                height: 355,
	                bg: '/src/imgs/logo.png',
	                css: {
	                    opacity: 0
	                },
	                animateIn: {
	                    top: 100,
	                    opacity: 1
	                },
	                animateOut: {
	                    top: 0,
	                    opacity: 0
	                },
	            })
	            .addComponent('slogan', {
	                text: 'A NEW WORLD!',
	                center: true,
	                width: 365,
	                height: 99,
	                css: {
	                    opacity: 0,
	                    top: 280,
	                    textAlign: 'center',
	                    color: '#0484c5'
	                },
	                animateIn: {
	                    left: '50%',
	                    opacity: 1
	                },
	                animateOut: {
	                    left: '0%',
	                    opacity: 0
	                },
	                delay: 500
	            })
	            .addComponent('face_img_left', {
	                width: 383,
	                height: 568,
	                bg: '/src/imgs/jixiangwu.png',
	                css: {
	                    opacity: 0,
	                    left: -100,
	                    bottom: -100
	                },
	                animateIn: {
	                    opacity: 1,
	                    left: 10,
	                    bottom: 10
	                },
	                animateOut: {
	                    opacity: 0,
	                    left: -100,
	                    bottom: -100
	                },
	                delay: 1000
	            })
	            .addComponent('face_img_right', {
	                width: 477,
	                height: 389,
	                bg: '/src/imgs/jixiangwu2.png',
	                css: {
	                    opacity: 0,
	                    right: -100,
	                    bottom: -100
	                },
	                animateIn: {
	                    opacity: 1,
	                    right: -50,
	                    bottom: 10
	                },
	                animateOut: {
	                    opacity: 0,
	                    right: -100,
	                    bottom: -10
	                },
	                delay: 1000
	            })
	        .addPage()
	            .addComponent('caption', {
	                text: 'Introduction'
	            })
	            .addComponent('logo', {
	                width: 282,
	                height: 112,
	                center: true,
	                bg: '/src/imgs/rio.png',
	                css: {
	                    opacity: 0,
	                    textAlign: 'center',
	                    color: 'red',
	                    fontSize: '26px'
	                },
	                animateIn: {
	                    opacity: 1,
	                    top: 120
	                },
	                animateOut: {
	                    opacity: 0,
	                    top: 240
	                },
	            })
	            .addComponent('description', {
	                center: true,
	                width: 600,
	                height: 295,
	                css: {
	                    opacity: 0,
	                    color: '#222',
	                    fontSize: '15px',
	                    lineHeight: '18px',
	                    textAlign: 'justify',
	                    textIndent: '2em',
	                    wordWrap: 'break-word',
	                    top: 240,
	                    left: '50%',
	                    marginLeft: '-300px',
	                },
	                text: 'The 2016 Summer Olympics (Portuguese: Jogos Olímpicos de Verão de 2016), officially known as the Games of the XXXI Olympiad and commonly known as Rio 2016, is a major international multi-sport event being held in Rio de Janeiro, Brazil, from 5 August to 21 August 2016.',
	                animateIn: {
	                    opacity: 1,
	                    top: 190
	                },
	                animateOut: {
	                    opacity: 0,
	                    top: 240
	                },
	                delay: 1000
	            })
	            .addComponent('playground', {
	                center: true,
	                width: 600,
	                height: 399,
	                bg: '/src/imgs/playground.jpg',
	                css: {
	                    opacity: 0,
	                    bottom: 0,
	                },
	                animateIn: {
	                    opacity: 1,
	                    bottom: 20
	                },
	                animateOut: {
	                    opacity: 0,
	                    bottom: 0
	                },
	                delay: 500
	            })
	        .addPage() //（bar_v）
	            .addComponent('caption', {
	                text: '奥运会奖牌榜'
	            })
	            .addComponent('bar', {
	                type: 'bar_v',
	                width: 530,
	                height: 400,
	                data: [
	                    ['美国', 26, '#62bc4a'],
	                    ['英国', 15, '#0484c5'],
	                    ['中国', 15, '#0484c5'],
	                    ['俄罗斯', 9, '#0484c5'],
	                    ['德国', 8, '#0484c5']
	                ],
	                css: {
	                    bottom: 3000,
	                    opacity: 0
	                },
	                animateIn: {
	                    opacity: 1,
	                    bottom: 200,
	                },
	                animateOut: {
	                    opacity: 0,
	                    bottom: 300,
	                },
	                center: true
	            })
	            .addComponent('msg', {
	                text: '截至2016/08/15,美国队获得26枚金牌，名列榜首',
	                css: {
	                    opacity: 0,
	                    bottom: 100,
	                    left: '50%',
	                    marginLeft: '-40%',
	                    textAlign: 'center',
	                    width: '80%',
	                    color: '#62bc4a'
	                },
	                animateIn: {
	                    opacity: 1
	                },
	                animateOut: {
	                    opacity: 0
	                }
	            })
	        .addPage()
	            .addComponent('caption', {
	                text: '中国队各项奖牌数'
	            }) //pie
	            .addComponent('pie', {
	                type: 'pie',
	                data: [
	                    ['金牌', 15, 45, 'gold'],
	                    ['银牌', 13, 45, 'silver'],
	                    ['铜牌', 17, 45, 'goldenrod'],
	                ],
	                css: {
	                    bottom: 200
	                },
	                width: 300,
	                height: 300,
	                center: true
	            })
	            .addComponent('msg', {
	                text: '截至2016/08/15,获得金牌15枚，银牌13枚，铜牌17枚',
	                center: true,
	                css: {
	                    opacity: 0,
	                    bottom: 100,
	                    textAlign: 'center',
	                    width: '80%',
	                    color: '#62bc4a',
	                    marginLeft: '-40%'
	                },
	                animateIn: {
	                    opacity: 1
	                },
	                animateOut: {
	                    opacity: 0
	                }
	            })
	        .addPage()
	            .addComponent('caption', {
	                text: '中国队累计奖牌数'
	            }) //point
	            .addComponent('point', {
	                type: 'point',
	                width: 220,
	                height: 220,
	                data: [
	                    ['金牌', 212, 500, 'gold'],
	                    ['银牌', 152, 500, 'silver', '-30%', '-70%'],
	                    ['铜牌', 140, 500, 'goldenrod', '40%', '-110%']
	                ],
	                css: {
	                    bottom: 200
	                },
	                center: true,
	            })
	            .addComponent('msg', {
	                text: '截至2016/08/15,中国队在夏季奥运会累计获得奖牌500枚',
	                css: {
	                    opacity: 0,
	                    bottom: 100,
	                    left: '50%',
	                    marginLeft: '-40%',
	                    textAlign: 'center',
	                    width: '80%',
	                    color: '#62bc4a'
	                },
	                animateIn: {
	                    opacity: 1
	                },
	                animateOut: {
	                    opacity: 0
	                }
	            })
	        .addPage()
	            .addComponent('caption', {
	                text: '中国队实力分析'
	            }) //radar
	            .addComponent('radar', {
	                    type: 'radar',
	                    width: 400,
	                    height: 400,
	                    data: [
	                        ['田径', .5, '#0484c5'],
	                        ['游泳', .7, '#0484c5'],
	                        ['乒乓球', .9, '#0484c5'],
	                        ['体操', .8, '#0484c5'],
	                        ['射击', .8, '#0484c5']
	                    ],
	                    css: {
	                        bottom: 400,
	                        opacity: 0
	                    },
	                    animateIn: {
	                        opacity: 1,
	                        bottom: 200,
	                    },
	                    animateOut: {
	                        opacity: 0,
	                        bottom: 400,
	                    },
	                    center: true,
	                })
	        .addPage('tail')
	            .addComponent('logo', {
	                center: true,
	                width: 255,
	                height: 355,
	                bg: '/src/imgs/logo.png',
	                css: {
	                    top: 240,
	                    opacity: 0
	                },
	                animateIn: {
	                    opacity: 1,
	                    top: 100
	                },
	                animateOut: {
	                    opacity: 0,
	                    top: 240
	                },
	            })
	            .addComponent('slogan', {
	                text: 'Bye',
	                css: {
	                    opacity: 0,
	                    bottom: 150,
	                    textAlign: 'center',
	                    width: '100%',
	                    color: '#ff7676',
	                    fontSize: '3rem'
	                },
	                animateIn: {
	                    opacity: 1
	                },
	                animateOut: {
	                    opacity: 0
	                }
	            })
	            .addComponent('share', {
	                width: 128,
	                height: 120,
	                bg: '/src/imgs/tail_share.png',
	                css: {
	                    opacity: 0,
	                    top: 110,
	                    right: 110
	                },
	                animateIn: {
	                    opacity: 1,
	                    top: 10,
	                    right: 10
	                },
	                animateOut: {
	                    opacity: 0,
	                    top: 110,
	                    right: 110
	                },
	                delay: 1000
	            })
	            .addComponent('back', {
	                width: 102,
	                height: 100,
	                bg: '/src/imgs/tail_back.png',
	                center: true,
	                onclick: function() {
	                    $.fn.fullpage.moveTo(1)
	                }
	            })
	    .loader();

	    // music
	    $('#music').click(function() {
	        if ($('#maudio')[0].paused) {
	            $('#maudio')[0].play();
	            // $('#music').addClass('play');
	            $('#music').css('animationPlayState', 'running');
	        } else {
	            $('#maudio')[0].pause();
	            // $('#music').removeClass('play');
	            $('#music').css('animationPlayState', 'paused');
	        };
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* 内容管理对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentBar = __webpack_require__(3);
	var H5ComponentBar_v = __webpack_require__(4);
	var H5ComponentPie = __webpack_require__(5);
	var H5ComponentPoint = __webpack_require__(6);
	var H5ComponentPolyline = __webpack_require__(7);
	var H5ComponentRadar = __webpack_require__(8);
	var H5ComponentRing = __webpack_require__(9);
	var H5 = function() {
	    this.id = ('h5_' + Math.random()).replace('.', '_');
	    this.el = $('<div class="h5" id="' + this.id + '">').hide();
	    this.page = [];
	    $('body').append(this.el);

	    /**
	     * 新增一个页
	     * @param {string} name 组建的名称，会加入到ClassName中
	     * @param {string} text 页内的默认文本
	     * @return {H5} H5对象，可以重复使用H5对象支持的方法
	     */
	    this.addPage = function(name, text) {
	        var page = $('<div class="h5_page section">');

	        if (name != undefined) {
	            page.addClass('h5_page_' + name);
	        }
	        if (text != undefined) {
	            page.text(text);
	        }
	        this.el.append(page);
	        this.page.push(page);
	        if (typeof this.whenAddPage === 'function') {
	            this.whenAddPage();
	        }
	        return this;
	    }

	    /* 新增一个组件 */
	    this.addComponent = function(name, cfg) {
	            var cfg = cfg || {};
	            cfg = $.extend({
	                type: 'base'
	            }, cfg);

	            var component; //  定义一个变量，存储 组件元素
	            var page = this.page.slice(-1)[0];
	            switch (cfg.type) {
	                case 'base':
	                    component = new H5ComponentBase(name, cfg);
	                    break;

	                case 'polyline':
	                    component = new H5ComponentPolyline(name, cfg);
	                    break;

	                case 'pie':
	                    component = new H5ComponentPie(name, cfg);
	                    break;
	                case 'bar':
	                    component = new H5ComponentBar(name, cfg);
	                    break;
	                case 'bar_v':
	                    component = new H5ComponentBar_v(name, cfg);
	                    break;

	                case 'radar':
	                    component = new H5ComponentRadar(name, cfg);
	                    break;

	                case 'pie':
	                    component = new H5ComponentPie(name, cfg);
	                    break;
	                case 'ring':
	                    component = new H5ComponentRing(name, cfg);
	                    break;
	                case 'point':
	                    component = new H5ComponentPoint(name, cfg);
	                    break;
	                default:
	            }

	            page.append(component);
	            return this;
	        }
	        /* H5对象初始化呈现 */
	    this.loader = function(firstPage) {
	        this.el.fullpage({
	            onLeave: function(index, nextIndex, direction) {
	                $(this).find('.h5_component').trigger('onLeave');
	            },
	            afterLoad: function(anchorLink, index) {
	                $(this).find('.h5_component').trigger('onLoad');
	            }
	        });
	        this.page[0].find('.h5_component').trigger('onLoad');
	        this.el.show();
	        if (firstPage) {
	            $.fn.fullpage.moveTo(firstPage);
	        }
	    }
	    this.loader = typeof H5_loading == 'function' ? H5_loading : this.loader;
	    return this;
	}

	module.exports = H5;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* 基本图文组件对象 */
	var H5ComponentBase = function(name, cfg) {
	    var cfg = cfg || {};
	    var id = ('h5_c_' + Math.random()).replace('.', '_');

	    // 把当前的组建类型添加到样式中进行标记
	    var cls = ' h5_component_' + cfg.type;
	    var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name + '" id="' + id + '">');

	    cfg.text && component.text(cfg.text);
	    cfg.width && component.width(cfg.width / 2);
	    cfg.height && component.height(cfg.height / 2);

	    cfg.css && component.css(cfg.css);
	    cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

	    if (cfg.center === true) {
	        component.css({
	            marginLeft: (cfg.width / 4 * -1) + 'px',
	            left: '50%'
	        })
	    }
	    //  ... 很多自定义的参数
	    if (typeof cfg.onclick === 'function') {
	        component.on('click', cfg.onclick);
	    }

	    component.on('onLoad', function() {

	        setTimeout(function() {
	            component.addClass(cls + '_load').removeClass(cls + '_leave');
	            cfg.animateIn && component.animate(cfg.animateIn);
	        }, cfg.delay || 0)

	        return false;
	    })
	    component.on('onLeave', function() {

	        setTimeout(function() {
	            component.addClass(cls + '_leave').removeClass(cls + '_load');
	            cfg.animateOut && component.animate(cfg.animateOut);
	        }, cfg.delay || 0)
	        return false;
	    })


	    return component;
	}

	module.exports = H5ComponentBase;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* 柱图组件对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentBar = function(name, cfg) {
	  var component = new H5ComponentBase(name, cfg);

	  var base = cfg.data[0][1];
	  $.each(cfg.data, function(idx, item) {

	    var line = $('<div class="line">');
	    var name = $('<div class="name">');
	    var rate = $('<div class="rate">');
	    var per = $('<div class="per">');

	    var width = (item[1] / base * 100).toFixed(1) + '%';

	    var bgStyle = '';
	    if (item[2]) {
	      bgStyle = 'style="background-color:' + item[2] + '"';
	    }

	    rate.html('<div class="bg" ' + bgStyle + '></div>');

	    rate.css('width', width);

	    name.text(item[0]);

	    per.text(item[1]);

	    line.append(name).append(rate).append(per);

	    component.append(line);
	  });

	  return component;
	}
	module.exports = H5ComponentBar;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* 垂直柱图组件对象 */
	// var H5ComponentBase = require('./H5ComponentBase.js');
	var H5ComponentBar = __webpack_require__(3);
	var H5ComponentBar_v = function(name, cfg) {
	  var component = new H5ComponentBar(name, cfg);

	  var width = (100 / cfg.data.length) >> 0;
	  component.find('.line').width(width + '%');

	  $.each(component.find('.rate'), function() {
	    var w = $(this).css('width');
	    $(this).height(w).width('');

	  });

	  $.each(component.find('.per'), function() {
	    $(this).appendTo($(this).prev());
	  })

	  return component;
	}
	module.exports = H5ComponentBar_v;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* 饼图组件对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentPie = function(name, cfg) {
	  var component = new H5ComponentBase(name, cfg);

	  //  绘制网格线 - 背景层
	  var w = cfg.width;
	  var h = cfg.height;

	  //  加入一个画布（网格线背景）
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  $(cns).css('zIndex', 1);
	  component.append(cns);

	  var r = w / 2;

	  //  加入一个底图层
	  ctx.beginPath();
	  ctx.fillStyle = '#eee';
	  ctx.strokeStyle = '#eee';
	  ctx.lineWidth = 1;
	  ctx.arc(r, r, r, 0, 2 * Math.PI);
	  ctx.fill();
	  ctx.stroke();

	  //  绘制一个数据层
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  $(cns).css('zIndex', 2);
	  component.append(cns);

	  var colors = ['red', 'green', 'blue', '#a00', 'orange']; //  备用颜色
	  var sAngel = 1.5 * Math.PI; //  设置开始的角度在 12 点位置
	  var eAngel = 0; //  结束角度
	  var aAngel = Math.PI * 2; //  100%的圆结束的角度 2pi = 360


	  var step = cfg.data.length;
	  for (var i = 0; i < step; i++) {

	    var item = cfg.data[i];
	    var rate = (item[1] / item[2]).toFixed(1);
	    var color = item[3] || (item[3] = colors.pop());

	    eAngel = sAngel + aAngel * rate;

	    ctx.beginPath();
	    ctx.fillStyle = color;
	    ctx.strokeStyle = color;
	    ctx.lineWidth = .1;

	    ctx.moveTo(r, r);
	    ctx.arc(r, r, r, sAngel, eAngel);
	    ctx.fill();
	    ctx.stroke();
	    sAngel = eAngel;


	    //  加入所有的项目文本以及百分比

	    var text = $('<div class="text">');
	    text.text(cfg.data[i][0]);
	    var per = $('<div class="per">');
	    var perDate = (cfg.data[i][1] / cfg.data[i][2] * 100).toFixed(2);
	    per.text(perDate + '%');
	    text.append(per);

	    var x = r + Math.sin(.5 * Math.PI - sAngel) * r;
	    var y = r + Math.cos(.5 * Math.PI - sAngel) * r;

	    // text.css('left',x/2);
	    // text.css('top',y/2);

	    if (x > w / 2) {
	      text.css('left', x / 2);
	    } else {
	      text.css('right', (w - x) / 2);
	    }
	    if (y > h / 2) {
	      text.css('top', y / 2);
	    } else {
	      text.css('bottom', (h - y) / 2);
	    }
	    if (cfg.data[i][3]) {
	      text.css('color', '#0484c5');
	      // text.css('color','#fff');
	      // text.css('backgroundColor',cfg.data[i][2]);
	    }
	    text.css('opacity', 0);
	    component.append(text);

	  }

	  //  加入一个蒙板层
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  $(cns).css('zIndex', 3);
	  component.append(cns);


	  ctx.fillStyle = '#eee';
	  ctx.strokeStyle = '#eee';
	  ctx.lineWidth = 1;


	  //  生长动画

	  var draw = function(per) {

	    ctx.clearRect(0, 0, w, h);

	    ctx.beginPath();

	    ctx.moveTo(r, r);

	    if (per <= 0) {
	      ctx.arc(r, r, r, 0, 2 * Math.PI);
	      component.find('.text').css('opacity', 0)
	    } else {
	      ctx.arc(r, r, r, sAngel, sAngel + 2 * Math.PI * per, true);
	    }

	    ctx.fill();
	    ctx.stroke();

	    if (per >= 1) {
	      component.find('.text').css('transition', 'all 0s');
	      H5ComponentPie.reSort(component.find('.text'));
	      component.find('.text').css('transition', 'all 1s');
	      component.find('.text').css('opacity', 1);
	      ctx.clearRect(0, 0, w, h);
	    }
	  }
	  draw(0);

	  component.on('onLoad', function() {
	    //  饼图生长动画
	    var s = 0;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s += .01;
	        draw(s);
	      }, i * 10 + 500);
	    }
	  });
	  component.on('onLeave', function() {
	    //  饼图退场动画
	    var s = 1;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s -= .01;
	        draw(s);
	      }, i * 10);
	    }
	  });

	  return component;
	}

	//  重排项目文本元素
	H5ComponentPie.reSort = function(list) {

	  //  1. 检测相交
	  var compare = function(domA, domB) {

	    //  元素的位置，不用 left，因为有时候 left为 auto
	    var offsetA = $(domA).offset();
	    var offsetB = $(domB).offset();

	    //  domA 的投影
	    var shadowA_x = [offsetA.left, $(domA).width() + offsetA.left];
	    var shadowA_y = [offsetA.top, $(domA).height() + offsetA.top];

	    //  domB 的投影
	    var shadowB_x = [offsetB.left, $(domB).width() + offsetB.left];
	    var shadowB_y = [offsetB.top, $(domB).height() + offsetB.top];

	    //  检测 x
	    var intersect_x = (shadowA_x[0] > shadowB_x[0] && shadowA_x[0] < shadowB_x[1]) || (shadowA_x[1] > shadowB_x[0] && shadowA_x[1] < shadowB_x[1]);

	    //  检测 y 轴投影是否相交
	    var intersect_y = (shadowA_y[0] > shadowB_y[0] && shadowA_y[0] < shadowB_y[1]) || (shadowA_y[1] > shadowB_y[0] && shadowA_y[1] < shadowB_y[1]);
	    return intersect_x && intersect_y;
	  }


	  //  2. 错开重排
	  var reset = function(domA, domB) {

	    if ($(domA).css('top') != 'auto') {

	      $(domA).css('top', parseInt($(domA).css('top')) + $(domB).height());
	    }
	    if ($(domA).css('bottom') != 'auto') {

	      $(domA).css('bottom', parseInt($(domA).css('bottom')) + $(domB).height());
	    }

	  }

	  //  定义将要重排的元素
	  var willReset = [list[0]];

	  $.each(list, function(i, domTarget) {
	    if (compare(willReset[willReset.length - 1], domTarget)) {
	      willReset.push(domTarget); //  不会把自身加入到对比
	    }
	  });

	  if (willReset.length > 1) {
	    $.each(willReset, function(i, domA) {
	      if (willReset[i + 1]) {
	        reset(domA, willReset[i + 1]);
	      }
	    });
	    H5ComponentPie.reSort(willReset);
	  }

	}


	module.exports = H5ComponentPie;





/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* 散点图表组件对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentPoint = function(name, cfg) {
	  var component = new H5ComponentBase(name, cfg);

	  var base = cfg.data[0][1]; //  以第一个数据的 比例为大小的 100%

	  //   输出每个 Point
	  $.each(cfg.data, function(idx, item) {

	    var point = $('<div class="point point_' + idx + '" >');

	    var name = $('<div class="name">' + item[0] + '</div>');
	    var rate = $('<div class="per">' + item[1] + '</div>');

	    name.append(rate);
	    point.append(name);


	    var per = (item[1] / base * 100) + '%';

	    point.width(per).height(per);

	    if (item[3]) {
	      point.css('background-color', item[3]);
	    }
	    if (item[4] !== undefined && item[5] !== undefined) {
	      point.css('left', item[4]).css('top', item[5]);
	    }

	    point.css('transition', 'all 1s ' + idx * .5 + 's')
	    component.append(point);

	  });

	  component.find('.point').on('click', function() {

	    component.find('.point').removeClass('point_focus');
	    $(this).addClass('point_focus');

	    return false;
	  }).eq(0).addClass('point_focus')

	  return component;
	}
	module.exports = H5ComponentPoint;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* 柱图组件对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentPolyline = function(name, cfg) {
	  var component = new H5ComponentBase(name, cfg);

	  //  绘制网格线 - 背景层
	  var w = cfg.width;
	  var h = cfg.height;

	  //  加入一个画布（网格线背景）
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  component.append(cns);

	  //  水平网格线  100 份 -> 10份
	  var step = 10;
	  ctx.beginPath();
	  ctx.lineWidth = 1;
	  ctx.strokeStyle = "#AAAAAA";

	  window.ctx = ctx;

	  for (var i = 0; i < step + 1; i++) {
	    var y = (h / step) * i;
	    ctx.moveTo(0, y);
	    ctx.lineTo(w, y)
	  }

	  //  垂直网格线（根据项目的个数去分）
	  step = cfg.data.length + 1;

	  var text_w = w / step >> 0;

	  for (var i = 0; i < step + 1; i++) {
	    var x = (w / step) * i;
	    ctx.moveTo(x, 0);
	    ctx.lineTo(x, h);

	    if (cfg.data[i]) {
	      var text = $('<div class="text">');
	      text.text(cfg.data[i][0]);
	      text.css('width', text_w / 2)
	        .css('left', (x / 2 - text_w / 4) + text_w / 2);


	      component.append(text);
	    }
	  }

	  ctx.stroke();

	  //  加入画布 - 数据层
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  component.append(cns);

	  /**
	   * 绘制折现以及对应的数据和阴影
	   * @param  {floot} per 0到1之间的数据，会根据这个值绘制最终数据对应的中间状态
	   * @return {DOM}     Component元素
	   */
	  var draw = function(per) {

	    //  清空画布
	    ctx.clearRect(0, 0, w, h);

	    //  绘制折线数据
	    ctx.beginPath();
	    ctx.lineWidth = 3;
	    ctx.strokeStyle = "#ff8878";

	    var x = 0;
	    var y = 0;

	    var row_w = (w / (cfg.data.length + 1));
	    //  画点
	    for (i in cfg.data) {
	      var item = cfg.data[i];
	      x = row_w * i + row_w;
	      y = h - (item[1] * h * per);
	      ctx.moveTo(x, y);
	      ctx.arc(x, y, 5, 0, 2 * Math.PI);
	    }
	    //  连线
	    //  移动画笔到第一个数据的点位置
	    ctx.moveTo(row_w, h - (cfg.data[0][1] * h * per));
	    for (i in cfg.data) {
	      var item = cfg.data[i];
	      x = row_w * i + row_w;
	      y = h - (item[1] * h * per);
	      ctx.lineTo(x, y);
	    }
	    ctx.stroke();

	    ctx.lineWidth = 1;
	    ctx.strokeStyle = "rgba(255, 255, 255, 0)";

	    //  绘制阴影
	    ctx.lineTo(x, h);
	    ctx.lineTo(row_w, h);
	    ctx.fillStyle = 'rgba(255, 136, 120, 0.2)';
	    ctx.fill();

	    //  写数据
	    for (i in cfg.data) {
	      var item = cfg.data[i];
	      x = row_w * i + row_w;
	      y = h - (item[1] * h * per);

	      ctx.fillStyle = item[2] ? item[2] : '#595959';

	      ctx.fillText(((item[1] * 100) >> 0) + '%', x - 10, y - 10);
	    }
	    ctx.stroke();
	  }


	  component.on('onLoad', function() {
	    //  折现图生长动画
	    var s = 0;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s += .01;
	        draw(s);
	      }, i * 10 + 500);
	    }
	  });
	  component.on('onLeave', function() {
	    //  折现图退场动画
	    var s = 1;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s -= .01;
	        draw(s);
	      }, i * 10);
	    }
	  });


	  return component;
	}
	module.exports = H5ComponentPolyline;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* 雷达图组件对象 */
	var H5ComponentBase = __webpack_require__(2);
	var H5ComponentRadar = function(name, cfg) {
	  var component = new H5ComponentBase(name, cfg);

	  //  绘制网格线 - 背景层
	  var w = cfg.width;
	  var h = cfg.height;

	  //  加入一个画布（网格线背景）
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  component.append(cns);

	  var r = w / 2;
	  var step = cfg.data.length;


	  //  计算一个圆周上的坐标（计算多边形的顶点坐标）
	  //  已知：圆心坐标(a,b)、半径 r；角度deg。
	  //  rad = ( 2*Math.PI / 360 ) * ( 360 / step ) * i
	  //  x = a + Math.sin( rad ) * r;
	  //  y = b + Math.cos( rad ) * r;

	  //  绘制网格背景（分面绘制，分为10份）
	  var isBlue = false;
	  for (var s = 10; s > 0; s--) {

	    ctx.beginPath();
	    for (var i = 0; i < step; i++) {
	      var rad = (2 * Math.PI / 360) * (360 / step) * i;

	      var x = r + Math.sin(rad) * r * (s / 10);
	      var y = r + Math.cos(rad) * r * (s / 10);
	      ctx.lineTo(x, y);
	    }
	    ctx.closePath();
	    ctx.fillStyle = (isBlue = !isBlue) ? '#62bc4a' : '#f1f9ff';
	    ctx.fill();
	  }

	  //   绘制伞骨
	  for (var i = 0; i < step; i++) {
	    var rad = (2 * Math.PI / 360) * (360 / step) * i;

	    var x = r + Math.sin(rad) * r;
	    var y = r + Math.cos(rad) * r;
	    ctx.moveTo(r, r);
	    ctx.lineTo(x, y);
	    //  输出项目文字
	    var text = $('<div class="text">');
	    text.text(cfg.data[i][0]);
	    text.css('transition', 'all .5s ' + i * .1 + 's');

	    if (x > w / 2) {
	      text.css('left', x / 2 + 5);
	    } else {
	      text.css('right', (w - x) / 2 + 5);
	    }

	    if (y > h / 2) {
	      text.css('top', y / 2 + 5);
	    } else {
	      text.css('bottom', (h - y) / 2 + 5);
	    }
	    if (cfg.data[i][2]) {
	      text.css('color', cfg.data[i][2])
	    }
	    text.css('opacity', 0);

	    component.append(text);

	  }
	  ctx.strokeStyle = '#e0e0e0';
	  ctx.stroke();

	  //  数据层的开发
	  //  加入一个画布（数据层）
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height = h;
	  component.append(cns);

	  ctx.strokeStyle = '#f47b20';

	  var draw = function(per) {

	    if (per <= 1) {
	      component.find('.text').css('opacity', 0);
	    }
	    if (per >= 1) {
	      component.find('.text').css('opacity', 1);
	    }

	    ctx.clearRect(0, 0, w, h);

	    //  输出数据的折线
	    for (var i = 0; i < step; i++) {
	      var rad = (2 * Math.PI / 360) * (360 / step) * i;

	      var rate = cfg.data[i][1] * per;

	      var x = r + Math.sin(rad) * r * rate;
	      var y = r + Math.cos(rad) * r * rate;

	      ctx.lineTo(x, y);

	    }
	    ctx.closePath();
	    ctx.stroke();

	    //  输出数据的点
	    ctx.fillStyle = '#f47b20';
	    for (var i = 0; i < step; i++) {
	      var rad = (2 * Math.PI / 360) * (360 / step) * i;

	      var rate = cfg.data[i][1] * per;

	      var x = r + Math.sin(rad) * r * rate;
	      var y = r + Math.cos(rad) * r * rate;

	      ctx.beginPath();
	      ctx.arc(x, y, 5, 0, 2 * Math.PI);
	      ctx.fill();
	      ctx.closePath();
	    }


	  }

	  component.on('onLoad', function() {
	    //  雷达图生长动画
	    var s = 0;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s += .01;
	        draw(s);
	      }, i * 10 + 500);
	    }
	  });
	  component.on('onLeave', function() {
	    //  雷达图退场动画
	    var s = 1;
	    for (i = 0; i < 100; i++) {
	      setTimeout(function() {
	        s -= .01;
	        draw(s);
	      }, i * 10);
	    }
	  });


	  return component;
	}
	module.exports = H5ComponentRadar;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* 环图组件对象 */
	// var H5ComponentBase = require('./H5ComponentBase.js');
	var H5ComponentPie = __webpack_require__(5);
	var H5ComponentRing = function(name, cfg) {
	  cfg.type = 'pie';
	  if (cfg.data.length > 1) { //  环图应该只有一个数据
	    cfg.data = [cfg.data[0]];
	  }
	  var component = new H5ComponentPie(name, cfg);

	  var mask = $('<div class="mask">');
	  component.addClass('h5_component_ring');

	  component.append(mask);

	  var text = component.find('.text');

	  text.attr('style', '');
	  if (cfg.data[0][2]) {
	    text.css('color', cfg.data[0][2]);
	  }
	  mask.append(text);

	  return component;
	}
	module.exports = H5ComponentRing;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var H5_loading = function(images, firstPage) {

	    var id = this.id;

	    if (this._images === undefined) { //  第一次进入

	        this._images = (images || []).length;
	        this._loaded = 0;


	        window[id] = this; //   把当前对象存储在全局对象 window 中，用来进行某个图片加载完成之后的回调


	        for (s in images) {
	            var item = images[s];
	            var img = new Image;
	            img.onload = function() {
	                window[id].loader();
	            }
	            img.src = item;
	        }

	        $('#rate').text('0%');
	        return this;

	    } else {

	        this._loaded++;
	        $('#rate').text(((this._loaded / this._images * 100) >> 0) + '%');

	        if (this._loaded < this._images) {
	            return this;
	        }
	    }

	    window[id] = null;


	    this.el.fullpage({
	        onLeave: function(index, nextIndex, direction) {
	            $(this).find('.h5_component').trigger('onLeave');
	        },
	        afterLoad: function(anchorLink, index) {
	            $(this).find('.h5_component').trigger('onLoad');
	        }
	    });
	    this.page[0].find('.h5_component').trigger('onLoad');
	    this.el.show();
	    if (firstPage) {
	        $.fn.fullpage.moveTo(firstPage);
	    }
	}

	module.exports = H5_loading;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/*\n* @Author: laihaibo\n* @Date:   2016-08-14 12:55:00\n* @Last Modified by:   laihaibo\n* @Last Modified time: 2016-08-15 22:22:41\n*/\nbody {\n  margin: 0;\n  padding: 0;\n}\n.h5_page {\n  background-image: url(/src/imgs/bg.jpg);\n}\n.h5_page_face {\n  background-image: url(/src/imgs/god.png);\n}\n.h5_component_name_slogan {\n  -webkit-animation: rock 2s infinite 2s;\n}\n@-webkit-keyframes rock {\n  0% {\n    transform: rotate(0deg);\n  }\n  5% {\n    transform: rotate(3deg);\n  }\n  10% {\n    transform: rotate(-4deg);\n  }\n  15% {\n    transform: rotate(3deg);\n  }\n  20% {\n    transform: rotate(-2deg);\n  }\n  25% {\n    transform: rotate(1deg);\n  }\n  30% {\n    transform: rotate(-1deg);\n  }\n  70% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.h5_component_name_caption {\n  font-size: 20px;\n  line-height: 64px;\n  top: 40px;\n  width: 262px;\n  height: 64px;\n  text-align: center;\n  color: #fff;\n  background-image: url(/src/imgs/caption.png);\n}\n.h5_component_name_back {\n  top: 30px;\n  -webkit-animation: back 2s infinite 2s;\n}\n@-webkit-keyframes back {\n  50% {\n    top: 20px;\n  }\n}\n.h5_component_name_slide_up {\n  bottom: 10px;\n  margin-left: -12px;\n  -webkit-animation: slide 2s infinite 2s;\n}\n@-webkit-keyframes slide {\n  50% {\n    bottom: 30px;\n  }\n}\n.h5_page_tail .h5_component_name_slide_up {\n  display: none;\n}\n#music {\n  position: fixed;\n  z-index: 70;\n  bottom: 10px;\n  left: 10px;\n  width: 64px;\n  height: 64px;\n  background: url(/src/imgs/music.png) no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n.play {\n  animation: zhuanzhuanzhuan 1s linear infinite;\n}\n@keyframes zhuanzhuanzhuan {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* H5对象的全局样式 */\n.h5 {\n  height: 100%;\n}\n.h5_page {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5_loading.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5_loading.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/*loading动画样式*/\nbody {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n.loading {\n    position: relative;\n    top: 50%;\n    width: 60px;\n    height: 60px;\n    margin: -30px auto;\n}\n.loading #rate {\n    font-size: 9px;\n    line-height: 20px;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    height: 20px;\n    text-align: center;\n    color: #0062e0;\n}\n.double-bounce1, .double-bounce2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: .6;\n    border-radius: 50%;\n    background-color: #0062e0;\n}\n.double-bounce1 {\n    -webkit-animation: bounce 2s infinite ease-in-out 0s;\n}\n.double-bounce2 {\n    -webkit-animation: bounce2 2s infinite ease-in-out 0s;\n}\n@-webkit-keyframes bounce {\n    0%, 100% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1);\n    }\n}\n@-webkit-keyframes bounce2 {\n    0%, 100% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(0);\n    }\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentBar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentBar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 柱状组件样式 */\n.h5_component_bar .line {\n    font-size: 12px;\n    line-height: 15px;\n    height: 15px;\n    margin-bottom: 15px;\n}\n.h5_component_bar .name {\n    float: left;\n    width: 60px;\n    text-align: center;\n    color: #000;\n}\n.h5_component_bar .rate {\n    position: relative;\n    float: left;\n    height: 15px;\n    margin-left: 5px;\n}\n.h5_component_bar .rate .bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    border-radius: 3px;\n    background-color: #f47b20;\n}\n.h5_component_bar .per {\n    float: left;\n    width: 20px;\n    margin-left: 5px;\n    color: #f47b20;\n    -webkit-opacity: 0;\n}\n.h5_component_bar_load .rate .bg {\n    width: 100%;\n    -webkit-transition: all 1s .5s;\n}\n.h5_component_bar_leave .rate .bg {\n    width: 0;\n}\n.h5_component_bar_load .per {\n    -webkit-transition: all 1s 1.5s;\n    -webkit-opacity: 1;\n}\n.h5_component_bar_leave .per {\n    -webkit-opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentBar_v.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentBar_v.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 垂直柱状组件样式 */\n.h5_component_bar_v .line {\n    font-size: 12px;\n    position: relative;\n    float: left;\n    height: 100%;\n}\n.h5_component_bar_v .name {\n    line-height: 20px;\n    position: absolute;\n    bottom: -20px;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    text-align: center;\n}\n.h5_component_bar_v .rate {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    width: 15px;\n    height: 100%;\n    margin-left: -8px;\n}\n.h5_component_bar_v .rate .bg {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0;\n    border-radius: 3px;\n    background-color: #f47b20;\n}\n.h5_component_bar_v .per {\n    line-height: 20px;\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    text-align: center;\n    color: #f47b20;\n    -webkit-opacity: 0;\n}\n.h5_component_bar_v_load .rate .bg {\n    height: 100%;\n    -webkit-transition: all 1s .5s;\n}\n.h5_component_bar_v_leave .rate .bg {\n    height: 0;\n}\n.h5_component_bar_v_load .per {\n    -webkit-transition: all 1s 1.5s;\n    -webkit-opacity: 1;\n}\n.h5_component_bar_v_leave .per {\n    -webkit-opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentBase.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentBase.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 基本图文组件样式 */\n.h5_component {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentPie.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentPie.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 饼图组件样式 */\n.h5_component_pie canvas {\n    position: absolute;\n    top: 0; /* 用canvas做动画，会进行分层，要用到  z-index */\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.h5_component_pie .text {\n    font-size: 12px;\n    position: absolute;\n    z-index: 99;\n    height: 24px;\n    transition: all 10s;\n    text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentPoint.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentPoint.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 散点图组件样式 */\n.h5_component_point {\n    color: #fff;\n}\n.h5_component_point .point {\n    position: absolute;\n    display: block;\n    -webkit-transition: all 1s;\n    border-radius: 50%;\n    background-color: #ccc;\n    -webkit-opacity: 0;\n}\n.h5_component_point .name {\n    font-size: 22px;\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    height: 30px;\n    margin-top: -15px;\n    text-align: center;\n}\n.h5_component_point .per {\n    font-size: .5em;\n}\n.h5_component_point_load .point {\n    -webkit-transform: scale(1);\n    -webkit-opacity: 1;\n}\n.h5_component_point_leave .point {\n    -webkit-transform: scale(.1);\n    -webkit-opacity: 0;\n}\n.h5_component_point_load .point_focus {\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n}\n.h5_component_point_load .point_focus:after {\n    position: absolute;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    margin-top: -50%;\n    margin-left: -50%;\n    content: ' ';\n    -webkit-animation: breathe 3s infinite ease-in-out .5s;\n    text-indent: -999px;\n    border-radius: 50%;\n    background-color: inherit;\n    -webkit-opacity: .5;\n}\n@-webkit-keyframes breathe {\n    0% {\n        -webkit-transform: scale(.5);\n        -webkit-opacity: .9;\n    }\n    95% {\n        -webkit-transform: scale(1.5);\n        -webkit-opacity: 0;\n    }\n    100% {\n        -webkit-transform: scale(.9);\n        -webkit-opacity: 0;\n    }\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentPolyline.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentPolyline.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 折线图组件样式 */\n.h5_component_polyline canvas {\n    position: absolute;\n    top: 0; /* 用canvas做动画，会进行分层，要用到  z-index */\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.h5_component_polyline .text {\n    font-size: 12px;\n    line-height: 20px;\n    position: absolute;\n    bottom: -20px;\n    height: 20px;\n    -webkit-transition: all 1s 1.5s;\n    -webkit-transform: scale(.8);\n    text-align: center;\n    -webkit-opacity: 0;\n}\n.h5_component_polyline_load .text {\n    -webkit-opacity: 1;\n}\n.h5_component_polyline_leave .text {\n    -webkit-opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentRadar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentRadar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 雷达图组件样式 */\n.h5_component_radar canvas {\n  position: absolute;\n  top: 0; /* 用canvas做动画，会进行分层，要用到  z-index */\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.h5_component_radar .text {\n  font-size: 12px;\n  position: absolute;\n  transition: all 1s;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentRing.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentRing.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/* 环图组件样式 */\n.h5_component_ring .mask {\n    position: absolute;\n    z-index: 90;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transform: scale(.8);\n    border-radius: 50%;\n    background-color: #fff;\n}\n.h5_component_ring .text {\n    top: 40%;\n    width: 100%;\n    opacity: 0;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);