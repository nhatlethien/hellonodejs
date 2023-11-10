
import db from '../models/index'; //phải import vào để có thể render dữ liệu 

let getHomeController = async (req, res) =>{ //async , await xử lý bất đồng bộ
    try {
        let data = await db.User.findAll();
        return res.render('home.ejs',{
            data : JSON.stringify(data)
        });  
    } catch (e) {
        console.log(e);
    }
    
}

// Object :{
//     key : '',
//     value :''
// }
module.exports = {
    getHomeController : getHomeController,
}   