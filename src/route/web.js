import express from "express";
import homeController from '../controllers/homeController'

	let router = express.Router();

	//tạo ra một router hoặc có thể gọi là một đường link

	let initWebRouter = (app) =>{
    		router.get('/', homeController.getHomeController);

			return app.use('/', router)
	}

	module.exports = initWebRouter;