# 用组件方式开发一个H5数据展示页面

## version
1.0.0

## feature
* 组件化开发
* 模块化，遵循CommonJs规范
* webpack压缩打包
* CDN加速

## 技术开发方案设计

1. 页面DOM操作
    * 技术选型：jQuery
    * 特点：
        * 强大的选择器
        * 出色的DOM操作封装
        * 可靠的事件处理机制
2. 页面切换操作
    * 技术选型：fullPage.js
    * 特点：
        * API简单易用
        * 跨浏览器
3. 组织内容结构方案
    * Page
    * Component
      * 图文组件
      * 图表组件
