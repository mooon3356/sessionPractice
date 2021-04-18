# auth-session

목표: 세션을 이용한 로그인, 로그아웃 구현

## 서버
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

## 클라이언트
- 필요한 요청을 헤더에 담아서 서버에 AJAX 요청 구현

1. Login component
 1-1. 로그인 버튼을 누른다.
 1-2. input 값들을 서버에 보낸다.
 1-3. 서버는 클라이언트에서 요청해온 정보들을 이용하여 DB 안의 정보들과 비교를 한다.
 1-4. 로그인이 성공
 
2. Mypage component
 - 로그아웃 버튼을 눌렀을 때, logout AJAX 요청을 보낸다.


 ### 진행하면서 생겼던 의문점들
1. 서버에서 클라이언트에 쿠키를 전달할 때, sessionId는 어디에 저장이 되는 건가?
2. config.json을 js로 항상 수기로 바꿔줘야 되는가?
3. 로그아웃 버튼 클릭 시, req.session.destroy()를 사용하게 되는데 이 과정에서 브라우저 상에서 쿠키를 지우는 방법은?
