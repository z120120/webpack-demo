/*
* @Author: Administrator
* @Date:   2017-08-21 12:10:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 15:58:39
*/
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide=require('page/common/nav-side/index.js');
var _mm=require('util/mm.js');
navSide.init({
	name:'pass-update'
});
// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success:function(res){
// 		console.log(res);
// 	},
// 	error:function(errMsg){
// 		console.log(errMsg);
// 	},
// })


// console.log(_mm.getUrlParam('test'));


// var html='<div>{{data}}</div>';
// var data={
// 	data:'test'
// };
// console.log(_mm.renderHtml(html,data));




