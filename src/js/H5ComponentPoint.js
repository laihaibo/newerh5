/* 散点图表组件对象 */
var H5ComponentBase = require('./H5ComponentBase.js');
var H5ComponentPoint = function (name, cfg) {
  var component = new H5ComponentBase(name, cfg);
  var base = cfg.data[0][1];

  $.each(cfg.data, function (idx, item) {
    var point = $('<div class="point point_"' + idx + '>');
    var name = $('<div class="point_name">' + item[0] + '</div>');
    var rate = $('<span class="point_rate">' + (item[1] * 100) + '%</span>')
    // point.text(item[0]+'-'+item[1]);
    name.append(rate);
    point.append(name);
    var per = (item[1] / base * 100) + '%';
    point.width(per).height(per);
    if (item[2]) {
      point.css('backgroundColor', item[2])
    }
    if (item[3] !== undefined && item[4] !== undefined) {
      point.css('left', item[3]).css('top', item[4]);
    }
    component.append(point);
  });
  return component;
}
module.exports = H5ComponentPoint;