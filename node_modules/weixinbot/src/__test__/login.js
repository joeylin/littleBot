/* eslint-disable prefer-template */
import { expect } from 'chai';
import nock from 'nock';

import login from '../login';

const { describe, before, it } = global;

describe('Login', () => {
  describe('uuid', () => {
    const replyUUID = 'wcmcPqpwrQ==';
    before(() => {
      nock('https://login.weixin.qq.com')
        .get('/jslogin?appid=wx782c26e4c19acffb&redirect_uri=' + encodeURIComponent('https://wx2.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage') + '&fun=new&lang=' + 'zh_CN')
        .reply(200, `window.QRLogin.code = 200; window.QRLogin.uuid = "${replyUUID}";`);
    });
    it('should return uuid', (done) => {
      login.getUUID().then(({ uuid }) => {
        expect(uuid).to.equal(replyUUID);
        done();
      });
    });
  });
});
