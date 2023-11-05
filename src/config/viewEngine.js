import express from "express";

	let configViewEngine = (app) =>{
	app.use(express.static("./src/public")); //quy định nhưng hình ảnh chỉ có thể được trỏ đến public
	app.set("view engine" , "ejs");
	app.set("views", "./src/views"); //quy dịnh những file html sẻ chỉ viết trong file views
	}

	module.exports = configViewEngine;