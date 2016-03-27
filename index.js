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

bot.on('friend',(msg) => {
	console.log(msg.Member.NickName + ': ' + msg.Content)
  bot.sendText(msg.FromUserName, '睡觉中，请稍等...');
});

bot.on('group', (msg) => {
	const member = msg.GroupMember;
	const group = msg.Group;
	console.log('group: ', group.NickName, group._id);
	console.log('member: ',member.NickName, member.DisplayName, member._id);
});



// 初始化weixinbot
bot.run();
