import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();

let app = express();


//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRouters(app);

connectDB();

//để sử dụng được process.env.PORT thì phải khai báo require('dotenv').config();
let port = process.env.PORT || 6969; ////câu lệnh để port đến file .env.  || 6969 có nghĩa là nếu không dùng được cổng 8080 được khai báo trong .env thì nó sẽ tự động dùng port 6969

app.listen(port, ()=>{
    //callback
    console.log("Hiện tại bạn đang dùng cổng:" +port);
})

//khi hoàn thành đoạn code cuối cùng phải cấu hình lại file pakage.json 
//trong phần scrip thì viết thêm câu lệnh : "start":"babel-node src/server.js" để có thể chạy server
//lưu ý phải gõ chính xác
