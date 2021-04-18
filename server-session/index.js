const express = require('express');
const cors = require('cors');
const session = require('express-session');
const logger = require('morgan');
const fs = require('fs');
const https = require('https');
const usersRouter = require('./routes/user');

const app = express();

const FILL_ME_IN = 'FILL_ME_IN';

const PORT = process.env.PORT || 4000;

// TODO: express-session 라이브러리를 이용해 쿠키 설정을 해줄 수 있습니다.
app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'localhost', // 서버에 접속할 수 있는 이름
      path: '/', // 경로 안의 사이트들에 쿠키 전송 가능
      maxAge: 24 * 6 * 60 * 10000, // 쿠키의 유효기간 설정
      sameSite: 'None', // lax , Strict, none (none 사용시 secure 필수)// 서버에서 클라이언트로 쿠키를 보낼때 헤더에 Set-cookie 라는 프로퍼티에 담아서 보내 준다. 클라에서 서버로 보낼땐 헤더에 cookie라는 프로퍼티에 담아서 보내 준다. 궁금 
      HttpOnly: true,//javascript에서 접근할수 있다 없다를 설정하는 부분. document.cookie로 확인할 수 있다. 
      secure: true, // sameSite를 None으로 설정을 하고 싶다면, 항상 secure을 true로 설정을 해야 한다.
    },
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: CORS 설정이 필요합니다. 클라이언트가 어떤 origin인지에 따라 달리 설정할 수 있습니다.
// 메서드는 GET, POST, OPTIONS를 허용합니다.
app.use(cors({
  origin: 'https://localhost:3000',
  methods: ['GET', 'POST', 'OPTION'],
  credentials: true,
}));
/**
 * /users 요청에 대해서 라우터를 이용하기 때문에,
 * 반드시 아래와 같은 주소와 메서드로 요청을 보내야 합니다.
 *
 * POST https://localhost:4000/users/login,
 * POST https://localhost:4000/users/logout,
 * GET https://localhost:4000/users/userinfo
 */
app.use('/users', usersRouter);

let server;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT)
}
module.exports = server;
