
let getHomeController = (req, res) =>{
    return res.render('home.ejs')
}

// Object :{
//     key : '',
//     value :''
// }
module.exports = {
    getHomeController : getHomeController,
}   