/* 内容管理对象 */
var H5ComponentBase = require('./H5ComponentBase.js');
var H5ComponentBar = require('./H5ComponentBar.js');
var H5ComponentPoint = require('./H5ComponentPoint.js');
var H5 = function () {
  // this.id = ('h5_'+Math.random()).replace('.','_');
  this.id = ('h5_fullpage');
  this.el = $('<div class="h5" id="' + this.id + '">').hide();
  this.pages = [];
  $('body').append(this.el);
  this.addPage = function (name, text) {
    var page = $('<div class="h5_page section">');
    if (name != undefined) {
      page.addClass('h5_page_' + name);
    }
    if (text != undefined) {
      page.text(text);
    }
    this.el.append(page);
    this.pages.push(page);
    if (typeof this.whenAddPage === 'function') {
      this.whenAddPage();
    }
    return this;
  }
  this.addComponent = function (name, cfg) {
    var cfg = cfg || {};
    cfg = $.extend({
      type: 'base',
    }, cfg);
    var component;
    var page = this.pages.slice(-1)[0];
    switch (cfg.type) {
      case 'base':
        component = new H5ComponentBase(name, cfg);
        break;
      case 'point':
        component = new H5ComponentPoint(name, cfg);
        break;
      case 'bar':
        component = new H5ComponentBar(name, cfg);
        break;

      default:

    }
    page.append(component);
    return this;

  }

  this.loader = function (firstPage) {
    this.el.fullpage({
      onLeave: function (index, nextIndex, direction) {
        $(this).find('.h5_component').trigger('onLeave');
      },
      afterLoad: function (anchorLink, index) {
        $(this).find('.h5_component').trigger('onLoad');
      }
    });
    this.pages[0].find('.h5_component').trigger('onLoad');
    this.el.show();
    if (firstPage) {
      $.fn.fullpage.moveTo(firstPage);
    }
  }
  this.loader = typeof H5_loading == 'function' ? H5_loading : this.loader;
  return this;

}

module.exports = H5;
