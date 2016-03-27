'use strict';

// 载入基本模块
const Weixinbot = require('weixinbot');
const qrcode = require('qrcode-terminal');
const tuling = require('./tuling');

// 创建winxinbot实例
const bot = new Weixinbot();

// 如果需要登录，触发qrcode事件
bot.on('qrcode', (qrcodeUrl) => {
  // 在控制台下显示二维码，手机直接扫描登录
  qrcode.generate(qrcodeUrl.replace('/qrcode/', '/l/'), console.log);
});

bot.on('friend',(msg) => {
	console.log(msg.Member.NickName + ': ' + msg.Content)
	console.log('id: ', msg.Member._id);
	// console.log('type: ', msg.MsgType);
	// console.log(msg);

	// if (msg.Member._id !== 'BGfytA8vpyrh8jsS') {
	// 	return;
	// }

	if (msg.MsgType == '34') {
		return bot.sendText(msg.FromUserName, '机器人听不懂语音哦...');
	}

	if (msg.MsgType == '1') {
		tuling.ask(msg.Content).then((result) => {
			if (result && result.code == '100000') {
				bot.sendText(msg.FromUserName, result.text);
			}
		});
	}

});

bot.on('group', (msg) => {
	
});



// 初始化weixinbot
bot.run();
