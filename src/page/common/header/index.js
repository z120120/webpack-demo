/*
* @Author: Administrator
* @Date:   2017-08-22 16:17:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 11:03:26
*/
require('./index.css');

var _mm=require('util/mm.js');
var header={
	init:function(){
		this.bindEvent();
	},
	onLoad:function(){
		var keyword=_mm.getUrlParam('keyword');
		// keyword存在，则回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		}
	},
	bindEvent:function(){
		var _this=this;
		$('#search-btn').click(function(){
			_this.searchSubmit();
		})
		$('#search-input').keyup(function(e){
			if(e.keyCode===13){
				_this.searchSubmit();
			}
		})
	},
	// 搜索提交
	searchSubmit:function(){
		var keyword=$.trim($('#search-input').val());
		// 如果提交时有keyword，正常跳转到list页
		if(keyword){
			window.location.href='./list.html?keyword='+keyword;
		}
		// 如果keyword为空，直接返回首页
		else{
			_mm.goHome();
		}
	}

};

header.init();