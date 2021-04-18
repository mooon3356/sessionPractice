const { Users } = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요

    if (!req.session.email) {
      // your code here
      res.status(400).send({data: null, message: 'no authorized'})
    } else {
      // your code here
      // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
      const userInfo = await Users.findOne({where : {email: req.session.email}})
      console.log(userInfo)
      const newUserInfo = userInfo.dataValues
      delete newUserInfo['password']    //클라이언트에 정보를 보내줄 때 비밀번호를 지우고 보내주고 싶어서 삭제.
      console.log("유저 인포에서", req.session)
      res.status(200).send({data : newUserInfo , message : 'ok'})
    }
  },
};


//