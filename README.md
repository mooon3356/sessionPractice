# auth-session

의문점
1. 서버에서 클라이언트에 쿠키를 전달할 때, sessionId는 어디에 저장이 되는 건가?
2. config.json을 js로 항상 수기로 바꿔줘야 되는가?
3. 로그아웃 버튼 클릭 시, req.session.destroy()를 사용하게 되는데 이 과정에서 


목표: 세션을 이용한 로그인, 로그아웃 구현

//서버
1. 인증서 발급 (done)
2. 환경변수 설정하여 유저 정보 은닉 (env 파일) (done)
3. 세션 쿠키 옵션 설정 (done)
4. 시퀄라이즈를 사용하여 데이터베이스 안에 모델 생성 및 데이터 넣어주기 (done)

시퀄라이즈 커맨드 순서
1. npx sequelize-cli init
 - seeders, migration, models, config 생성됨 
config.json을 js로 변경 ---- 환경변수 설정을 하기 위해서 js로 변경.

2. npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
 - 설정한 대로 모델이 생성되는 커맨드

3. npx sequelize-cli seed:generate --name demo-user
- 시더 생성하는 커맨드

4. npx sequelize-cli db:migrate
- 마이그레이트 해주는 커맨드

5. npx sequelize-cli db:seed:all
- 설정해준 시드들을 전부 데이터베이스 테이블에 넣어주는 커맨드

* seeders에 createAt, updatedAt 자동으로 테이블에 추가되니까 seeders데이터에 추가해 놓아야한다. 



5. MVC 디자인 패턴에 맞게 controller 구현

//클라이언트
- 필요한 요청을 헤더에 담아서 서버에 AJAX 요청 구현

1. Login component
 1-1. 로그인 버튼을 누른다.
 1-2. input 값들을 서버에 보낸다.
 1-3. 서버는 클라이언트에서 요청해온 정보들을 이용하여 DB 안의 정보들과 비교를 한다.
 1-4. 로그인이 성공
 
2. Mypage component
 - 로그아웃 버튼을 눌렀을 때, logout AJAX 요청을 보낸다.


// TODO: express-session 라이브러리를 이용해 쿠키 설정을 해줄 수 있습니다.
app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: FILL_ME_IN,
      path: FILL_ME_IN,
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: FILL_ME_IN,
      httpOnly: FILL_ME_IN,
      secure: FILL_ME_IN,
      session_id: 
    },
    session_id: 
  })
);

1. 로그인이 되어있는 사용자만 메인 페이지로 접속 할 수 있어야 합니다.
2. 로그인이 되어 있지 않은 사용자는 로그인 페이지로 보냅니다.

3. 로그인 요청을 서버에 보낼 수 있어야 합니다.
- 로그인 요청을 보낼 때에, 이메일과 비밀번호를 입력하지 않을 경우 에러 처리가 필요합니다.
4. 로그인을 한 사용자만 마이페이지에서 개인 정보를 열람할 수 있어야 합니다.
5. 회원가입 페이지에서는 회원 가입 요청을 서버에 보낼 수 있어야 합니다.
- 모든 항목을 입력하지 않을 경우 에러 처리가 필요합니다.
6. 마이페이지에는 로그아웃 버튼이 존재하며, 클릭시 로그아웃 요청을 보내야 합니다.




---------------------------------------------------------------------------------------------------------------
//HA-final
## Getting Started

1. 서버와 클라이언트 모두 구현해야 합니다.

- 서버: ha-advanced-web-server
- 클라이언트: ha-advanced-web-client

2. npm install을 이용해 클라이언트 및 서버의 의존성 모듈(dependencies)를 설치할 수 있습니다.
3. npm test를 통해 클라이언트 및 서버의 테스트를 진행할 수 있습니다.
4. 서버와 클라이언트를 실행하기 위해서 두개의 터미널을 실행해야 합니다.

## 서버
- index.js 파일을 통해 서버를 실행시킬 수 있습니다.

### Requirements
주어진 모든 테스트를 통과하세요. 다음과 같은 REST API를 구현해야 합니다.

- https 프로토콜을 사용해야 합니다.
 인증서 발급은 mkcert 프로그램을 이용합니다.
 - 회원가입 되어있는 사용자만 로그인을 할 수 있어야 합니다.
 - 쿠키 및 세션 객체는 인증을 판단하는 근거가 됩니다.
  express-session을 이용합니다.
  - 사용자 정보 조회 api는 권한을 판단하는 근거가 됩니다.
  - 회원가입 시 사용자 정보는 데이터베이스에 기록되어야 합니다.
  - 사용자 정보 조회시 데이터베이스에서 정보를 읽어서 응답해야 합니다.
  
  <br></br>
  **데이터베이스는 다음과 같은 조건을 충족 하여야 합니다.** 
  모델을 생성하지 않으면, 테스트를 실행할 수 없음에 주의하세요.
  
  1. ha_advanced 라는 이름의 MySQL 데이터베이스를 생성해야 합니다.
  2. 유저정보를 데이터베이스에 저장할 user 모델을 생성해야 합니다. (모델 생성은 공식 문서를 활용해서 직접 작성해도 좋고 sequelize CLI를 활용해도 좋습니다.
  3. user 모델에는 email, password, username, mobile 필드들이 포함되어야 합니다.
  
  *테스트시 .env.example을 .env로 이름을 바꿔 설정해야 합니다. config/config.js는 수정할 필요는 없습니다.
  
##   클라이언트

npm start로 리액트 개발 서버를 실행 합니다.
npm test로 테스트를 실행할 수 있습니다.

### Requirements
주어진 모든 테스트를 통과하세요.

1. 로그인이 되어있는 사용자만 메인 페이지로 접속 할 수 있어야 합니다.
2. 로그인이 되어 있지 않은 사용자는 로그인 페이지로 보냅니다.
3. 로그인 요청을 서버에 보낼 수 있어야 합니다.
- 로그인 요청을 보낼 때에, 이메일과 비밀번호를 입력하지 않을 경우 에러 처리가 필요합니다.
4. 로그인을 한 사용자만 마이페이지에서 개인 정보를 열람할 수 있어야 합니다.
5. 회원가입 페이지에서는 회원 가입 요청을 서버에 보낼 수 있어야 합니다.
- 모든 항목을 입력하지 않을 경우 에러 처리가 필요합니다.
6. 마이페이지에는 로그아웃 버튼이 존재하며, 클릭시 로그아웃 요청을 보내야 합니다.

