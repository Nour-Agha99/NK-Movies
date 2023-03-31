const express = require("express");
const router =express.Router();
const { indexPage,getAPI,err404,err500 } = require("../controller/index")

router.get("/",indexPage);
router.get('/movie/:value',getAPI);
router.use(err404);
router.use(err500);
module.exports = router