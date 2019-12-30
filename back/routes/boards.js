const { isLoggedIn, isNotLoggedIn, upload } = require('./middlewares');
const express = require('express');
const boards = require('../controllers/boards');


const router = express.Router();

router.get('/', boards.loadAllBoards);

// 프로필 페이지에서 전체 게시글 리스트
router.get('/:id/allBoards', boards.loadAllBoardsList);
// 모집중인 스터디 게시글 리스트
router.get('/:id/allOngoingBoards', boards.loadAllOngoingBoardsList);
// 모집이 완료된 스터디 게시글 리스트
router.get('/:id/allClosedBoards', boards.loadAllClosedBoardsList);

module.exports = router