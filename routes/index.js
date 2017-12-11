var express = require('express');
var router = express.Router();

//DB가져오기
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.board.findAll().then(result=>{
    res.render("main",{
      boards:result
    });
  });
});

router.get('/post', function(req, res, next) {
  res.render('post');
});

router.post('/boardCreate', function(req, res, next) {
  //DB board에 insert 되는 부분!
  const body = req.body;
  //req.body를 통해 submit 되었던 정보들을 받아올 수 있다
  //받아온 정보들은 body.input이름으로 사용가능해
  models.board.create({
    title : body.inputTitle,//글제목
    content : body.inputContent,//글내용
    writer : body.inputWriter
  }).then(result=>{
    console.log("insert 성공");
    res.redirect('/');
    //res.render('main');
  }).catch(err=>{
    console.log("insert 실패.... "+err);
  });
});

router.get('/delete/:id', function(req, res, next){
  const boardId = req.params.id;
  models.board.destroy({
    where : {id : boardId}
  }).then(result=>{
    console.log("delete 성공 : "+boardId);
    res.redirect('/');
  }).catch(err=>{
    console.log("delete 실패.... "+err);
  })
});

module.exports = router;

router.get('/update/:id', function(req, res, next) {
  const boardId = req.params.id;
  models.board.find({
    where:{ id : boardId}
  }).then(result=>{
    res.render("update",{
      board:result
    });
  }).catch(err=>{
    console.log("에러");
  });
});

router.post('/boardUpdate/:id', function(req, res, next){
  const boardId = req.params.id;
  const body = req.body;
  models.board.update({
    title: body.inputTitle,
    content: body.inputContent,
    writer: body.inputWriter
  },{
    where:{id: boardId}
  }).then(result=>{
    console.log("데이터 수정 완료");
    res.redirect('/');
  }).catch(err=>{
    console.log('error : '+err);
  })
})
