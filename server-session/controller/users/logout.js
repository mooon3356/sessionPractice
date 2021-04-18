module.exports = {
  post: (req, res) => {

    // TODO: 세션 아이디를 통해 고유한 세션 객체에 접근할 수 있습니다.
    // 앞서 로그인시 세션 객체에 저장했던 값이 존재할 경우, 이미 로그인한 상태로 판단할 수 있습니다.
    // 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    console.log("로그아웃 세션 지우기전 ",req.session)
    if (!req.session.email) {
      // your code here
      res.status(400).send({message : 'no authorized'})
    } else {
      // your code here
      // TODO: 로그아웃 요청은 세션을 삭제하는 과정을 포함해야 합니다.
      req.session.destroy(()=>{
      res.status(200).clearCookie('connect.sid').send({data: null, message: 'ok'})
      })
      
      // console.log("로그아웃 세션 지운 후 ",req.session)
    }
  },
};
