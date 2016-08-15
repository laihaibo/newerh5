/*
 * @Author: laihaibo
 * @Date:   2016-08-14 12:52:13
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-08-15 22:29:01
 */

'use strict';
var H5 = require('./H5.js');
var H5_loading = require('./H5_loading.js');
require('../css/main.css');
require('../css/H5.css');
require('../css/H5_loading.css');
require('../css/H5ComponentBar.css');
require('../css/H5ComponentBar_v.css');
require('../css/H5ComponentBase.css');
require('../css/H5ComponentPie.css');
require('../css/H5ComponentPoint.css');
require('../css/H5ComponentPolyline.css');
require('../css/H5ComponentRadar.css');
require('../css/H5ComponentRing.css');

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
