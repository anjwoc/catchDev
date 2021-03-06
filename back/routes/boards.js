const { isLoggedIn, isNotLoggedIn, upload } = require('./middlewares');
const express = require('express');
const boards = require('../controllers/boards');


const router = express.Router();

/* 검색 기능 */
router.get('/search/:word', boards.searchBoards);

/* 메인 페이지, 인기 페이지 라우터 */
router.get('/', boards.allPosts);
router.get('/trendingBoards', boards.loadTrendingBoards);

router.get('/allTags', boards.loadAllHashtags);

/* 프로필 페이지 관련 라우터 */
// 프로필 페이지에서 전체 게시글 리스트
router.get('/:id/allBoards', boards.loadAllBoardsList);
// 모집중인 스터디 게시글 리스트
router.get('/:id/allRecruitingBoards', boards.loadAllRecruitingBoardsList);
// 모집이 완료된 스터디 게시글 리스트
router.get('/:id/allClosedBoards', boards.loadAllClosedBoardsList);


/* 카테고리 관련 라우터 */
router.get('/categoryPosts', boards.loadCategoryPosts);

/* 해시태그 게시물 라우터 */
router.get('/tags/:name', boards.loadHashtagsPosts);



module.exports = router