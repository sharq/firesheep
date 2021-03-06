register({
        name: 'SchuelerVZ',
        url: 'http://www.schuelervz.net/Home',
        domains: ['schuelervz.net'],
        sessionCookieNames: ['s_sess', 's_pers'],
        processPacket: function () {
            var s_sess = this.firstPacket.cookies['s_sess'];
            this.sessionId = s_sess;
        },
        identifyUser: function() {
            var resp = this.httpGet("http://www.schuelervz.net/Home");
            var t = resp.body.querySelector('#comment-user-data');
            this.userName = t.getElementsByTagName('input')[0].value;
            this.userAvatar = t.getElementsByTagName('input')[3].value;        
        }       
});
