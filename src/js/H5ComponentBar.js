/* 柱图组件对象 */
var H5ComponentBase = require('./H5ComponentBase.js');
var H5ComponentBar = function (name, cfg) {
  var component = new H5ComponentBase(name, cfg);
  $.each(cfg.data, function (idx, item) {
    console.log(item);
    var bar = $('<div class="bar">');
    var name = $('<div class="name">');
    var rate = $('<div class="rate">');
    var per = $('<div class="per">');

    var width = item[1] * 100 + '%';
    var bgStyle = '';
    if (item[2]) {
      bgStyle = 'style="background-color:' + item[2] + '"';
    }
    rate.html('<div class="bg"' + bgStyle + '></div>')
    rate.css('width', width);
    name.text(item[0]);
    per.text(width);
    bar.append(name).append(rate).append(per);;
    component.append(bar);
  });
  return component;
}
module.exports = H5ComponentBar;
