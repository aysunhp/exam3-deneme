const router= require("express").Router()
const userController=require("./../controller/userControllers")

router.get("/api",userController.getData)
router.delete("/api/:id",userController.deleteData)
router.post("/api",userController.postData)

module.exports=router