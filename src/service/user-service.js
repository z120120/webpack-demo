/*
* @Author: Administrator
* @Date:   2017-08-22 15:48:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 10:27:51
*/
var _mm=require('util/mm.js');

var _user={
	// 检查登录状态
	checkLogin:function(resolve,reject){
		_mm.request({
			url:_mm.getServerUrl('/user/get_userinfo.do'),
			method:'POST',
			success:resolve,
			error:reject
		})
	},
	// 登出
	logout:function(resolve,reject){
		_mm.request({
			url:_mm.getServerUrl('/user/logout.do'),
			method:'POST',
			success:resolve,
			error:reject
		})
	},

}
module.exports=_user;