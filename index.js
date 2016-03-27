'use strict';

// 载入基本模块
const Weixinbot = require('weixinbot');
const qrcode = require('qrcode-terminal');

// 创建winxinbot实例
const bot = new Weixinbot();

// 如果需要登录，触发qrcode事件
bot.on('qrcode', (qrcodeUrl) => {
  // 在控制台下显示二维码，手机直接扫描登录
  qrcode.generate(qrcodeUrl.replace('/qrcode/', '/l/'), console.log);
});

// bot.on('friend',(msg) => {
// 	console.log('friend...')
// 	console.log(msg);
// });

bot.on('group', (msg) => {
	console.log('group ....')
	console.log(msg);
});



// 初始化weixinbot
bot.run();
