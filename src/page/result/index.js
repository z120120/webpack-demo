/*
* @Author: Administrator
* @Date:   2017-08-23 16:02:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 18:32:06
*/
require('./index.css');
var navSide=require('page/common/nav-simple/index.js');
var _mm=require('util/mm.js');

$(function(){
	var type=_mm.getUrlParam('type') || 'default',
	$element=$('.'+type+'-success');
	// 显示对应的提示元素
	$element.show();
})