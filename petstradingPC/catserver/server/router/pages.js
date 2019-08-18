var express = require('express');
var mysql = require('mysql');
const bodyparser = require('body-parser');
var sqlConnect = require('../sqltool/mysqltool')
var pagesRouter = express.Router();

// pagesRouter.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type')
//     next();
// }) 



// 数据库连接
const mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cats',
    port: 3306,
    multipleStatements:true
});
mydb.connect();

   
//跨域
pagesRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})





//************************************ */前台页面操作************************************************
//首页---阴影滑动效果接口
pagesRouter.post('/classselect', (req, res) => {
    var sql6 = `select * from catclass`;
    sqlConnect(sql6, function (data) {
        res.send(data);
    })
})



//关于我们联系我们-前台接口
pagesRouter.get('/contactusall', (req, res) => {
    var sql = `select * from contactus`;
    sqlConnect(sql, function (data) {
        // console.log(data)
        res.send(data);
    })
})


//前台---推荐接口
pagesRouter.get('/goodszhanshi', (req, res) => {
    console.log(req.query.kw);
    var sql = `select * from goods`;
    if (req.query.kw == '推荐') {
        sql += ` limit 5`;
    }
    sqlConnect(sql, function (data) {
        console.log('=========================')
        // console.log(data)
        res.send(data);
    })
})



//前台---商品详情接口
pagesRouter.get('/xiangqing', (req, res) => {
    sql = `select * from goods where id="${req.query.kw1}";UPDATE goods SET nums = nums+1 where id=${req.query.kw1};`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            // console.log(data[0])
            res.send(data[0]);

        })
    }
})


//前台---品种详情
pagesRouter.get('/pzxiangqing', (req, res) => {
    sql = `select * from catclass where id="${req.query.kw1}"`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            // console.log(data)
            res.send(data[0]);

        })
    }
})



//前台关于我们联系我们接口
pagesRouter.get('/contatus', (req, res) => {
    var sql = `select * from contactus`;
    sqlConnect(sql, function (data) {
        res.send(data);
    })
})


//选猫知识-前台接口
// pagesRouter.post('/catknowledges', (req, res) => {
//     var sql11 = `select * from knowledge where state=1`;
//     sqlConnect(sql11, function (data) {
//         console.log('=========================')
//         // console.log(data)
//         res.send(data);
//     })
// })



//选猫知识详情-前台接口
pagesRouter.get('/catkwinfo', (req, res) => {
    var sql11 = `select * from knowledge where id=${req.query.id};UPDATE knowledge SET number = number+1 where id=${req.query.id}`;
    sqlConnect(sql11, function (data) {
        console.log('=========================')
        // console.log(data)
        res.send(data[0]);
    })
})



//  获取选猫知识列表信息
pagesRouter.get('/catknowledges', (req, res) => {
    // *最好写成具体的字段
    // 每页显示多少条信息
    let pagenum = 7;
    let page = req.query.page ? req.query.page : 1;
    // let keywords = req.query.keywords ? req.query.keywords : '';
    // let where = '';
    // if(keywords){
    //     where = ' AND bookname LIKE "%'+keywords+'%"';
    // }
    // let sql = 'SELECT COUNT(*) AS totalnum FROM knowledge WHERE state=1 '+where+';SELECT * FROM knowledge WHERE state = 1 '+where+' LIMIT ?, ?';
    let sql = `SELECT COUNT(*) AS totalnum FROM knowledge WHERE state=1;SELECT * FROM knowledge WHERE state = 1 LIMIT ?, ?`;
    console.log(sql);
    mydb.query(sql, [pagenum * (page - 1), pagenum], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        let totpage = Math.ceil(result[0][0].totalnum / pagenum);   //总页数
        // console.log(result)
        // 对数据进行处理
        res.json({ 
            catkwlist: result[1],               //每页返回的数据
            totalpage: totpage                  //总页数
        });
    });
});


pagesRouter.get('/showtype', (req, res) => {
    var sql2 = `select distinct(class1) from goods where 1 `;
    console.log(sql2);
    
    if (req.query.kw2=="类型"){
        console.log(22222)
        sqlConnect(sql2, function (data) {
            console.log(data)
            res.send(data);
        })
    }
})








module.exports = pagesRouter;