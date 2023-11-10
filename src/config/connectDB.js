// Option 3: Passing parameters separately (other dialects)
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('hellonodejs', 'root', null, { //(database, username, password) mặc định username là root nếu không có mật khẩu là null
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

let connectDB = async ()=>{ //đây là một hàm bất đồng bộ
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDB;