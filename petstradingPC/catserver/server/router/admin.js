var express = require('express');
var mysql = require('mysql');
const bodyparser = require('body-parser');
var sqlConnect = require('../sqltool/mysqltool')

const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');    //有关文件时使用

var adminRouter = express.Router();

let host = 'http://localhost:47/';

//************************************************************************************************************************ */
console.log(__dirname);
//图片上传存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '-' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({ storage: storage });

// 数据库连接
const mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cats',
    port: 3306
});
mydb.connect();


//跨域
adminRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})
       




// 启用cookie
let secret = 'app.h5190304.com';
adminRouter.use(cookieParser(secret));
// 启用session
adminRouter.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))

//管理员登陆
adminRouter.post('/adminlogin', (req, res) => {
    console.log(req.body);
    let sql = `select * from admin where aname=? limit 1`;
    mydb.query(sql, [req.body.aname], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        //检查账号是否存在
        if (result.length == 0) {
            res.json({
                msg1: '用户名不存在'
            })
            return;
        }
        if (req.body.apsw != result[0].apsw) {
            res.json({
                msg1: "密码错误"
            })
            return;
        }
        //记录cookie和session
        req.session.aid = result[0].aid;
        req.session.aname = result[0].aname;
        res.send({ msg1: 'ok' })
    })
})

//提供session信息的路由
adminRouter.get('/check', (req, res) => {
    console.log(req.session);
    res.json({ aid: req.session.aid, aname: req.session.aname });
});

//管理员信息展示
adminRouter.post('/admininfo', (req, res) => {
    let sql = `select * from admin where aid=${req.session.aid} limit 1`;
    mydb.query(sql, (err, result) => {
        res.send(result)
    })

})

//管理员信息修改
adminRouter.post('/adminupdata', (req, res) => {
    console.log(req.body)
    let sql =
        `UPDATE admin SET aname="${req.body.aname}",asex="${req.body.asex}",aphone="${req.body.aphone}",amytitle="${req.body.amytitle}" WHERE aid = ${req.session.aid}`;
    mydb.query(sql, (err, result) => {
        res.json({
            msg1: 'updata-ok'
        })
    })
})

//管理员修改自己的密码
adminRouter.post('/adminupdatakey', (req, res) => {
    console.log(req.body)
    let sql =
        `UPDATE admin SET apsw="${req.body.psw1}" WHERE aid = ${req.session.aid}`;
    mydb.query(sql, (err, result) => {
        res.json({ msg1: 'upkey-ok' })
    })
})



// 接受上传的图片
adminRouter.post('/uploads', upload.single('images'), function (req, res, next) {
    // console.log(req.file);
    res.json({ imgsrc: host + 'uploads/' + req.file.filename });
});


//编辑器上传图片接口
adminRouter.post('/uploadimgs', upload.array('myimgs'), function (req, res, next) {
    let r = {
        "errno": 0,
        "data": []
    };
    console.log(req.files);
    for (let ind = 0; ind < req.files.length; ind++) {
        const e = host + 'uploads/' + req.files[ind].filename;
        r.data.push(e);
    }
    res.json(r);
});


// 添加选猫知识
adminRouter.post('/addcatkw', (req, res) => {
    let d = req.body;
    let sql = 'INSERT INTO knowledge(title,addid,addname,imgsrc,info,addtimes) VALUES(?,?,?,?,?,NOW())';
    let data = [d.title, req.session.aid, req.session.aname, d.imgsrc, d.info];
    mydb.query(sql, data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        console.log(result);
        res.json({ r: 'ok' });

    });
});




//选猫知识列表
adminRouter.get('/catknowlelist', (req, res) => {
    // console.log(req.query.keyw1)
    var sql = "select * from knowledge where state=1";
    if(req.query.id){
        sql+=` and id=${req.query.id}`
    }
    mydb.query(sql, (err, result) => {
        res.send(result);
    })

})

//删除选猫知识列表中的一条信息
adminRouter.post('/deleteknowledge', (req, res) => {
    let sql = `UPDATE knowledge SET state=0 WHERE id = ${req.body.id}`
    mydb.query(sql, (err, result) => {
        res.json({ msg: 'delet-ok' })
    })
})

adminRouter.post('/alluserinfo', (req, res) => {
    sql7 = `select * from user`;
    sqlConnect(sql7, function (data) {
        res.send(data);
    })
})


//用户搜索
adminRouter.get('/usersearch', (req, res) => {
    console.log(req.query.keyw1)
    var sql9 = "select * from user where 1";
    if (req.query.keyw1 == '通过') {
        sql9 += ` and state=1`;
    }
    else if (req.query.keyw1 == '禁止') {
        sql9 += ` and state=0`;
    }
    else if (req.query.keyw1) {
        sql9 += " and shop like '%" + req.query.keyw1 + "%' or sex like '%" + req.query.keyw1 + "%' or username like '%" + req.query.keyw1 + "%' or id like '%" + req.query.keyw1 + "%' or cx like '%" + req.query.keyw1 + "%'";
    }
    sqlConnect(sql9, function (data) {
        // console.log(data);
        res.send(data);
    })

})



//管理员修改状态
adminRouter.post('/updatastate', (req, res) => {
    if (req.body.state == '通过') {
        // console.log(req.body);
        req.body.state = 0;
    }
    else if (req.body.state == '禁止') {
        req.body.state = 1;
    }
    var sql8 =
        `UPDATE user SET state=${req.body.state} WHERE id = ${req.body.id}`;
    sqlConnect(sql8, function (data) {

        res.send({ id: req.body.id, state: req.body.state });
        // res.redirect('/adminhome?id=1#usermanagement')
    })
})



//商品管理查询
adminRouter.get('/goodssearch', (req, res) => {
    // console.log(req.query.keyw1)
    var sql = "select * from goods where 1";
    if (req.query.keyw1) {
        sql += " and class1 like '%" + req.query.keyw1 + "%' or shop like '%" + req.query.keyw1 + "%' or sexs like '%" + req.query.keyw1 + "%' or username like '%" + req.query.keyw1 + "%' or id like '%" + req.query.keyw1 + "%' or price like '%" + req.query.keyw1 + "%'";
    }
    sqlConnect(sql, function (data) {
        // console.log(data);
        res.send(data);
    })

})




//添加猫咪种类
adminRouter.post('/addctaclass', (req, res) => {
    console.log(req.body);
    var sql5 = `INSERT INTO catclass (class1,pic,price1,price2) VALUES ("${req.body.class1}","${req.body.pic}","${req.body.price1}","${req.body.price2}");`
    sqlConnect(sql5, function (data) {
        console.log(data);
        res.json({ msg5: '添加成功' })
    })

})



// 修改联系我们关于我们
adminRouter.post('/updatecontactus', (req, res) => {
    console.log(req.body)
    var sql =
        `UPDATE contactus SET title="${req.body.title}",title1="${req.body.title1}",address="${req.body.address}",tel="${req.body.tel}",email="${req.body.email}",email="${req.body.title2}" WHERE id = ${req.body.id}`;
    sqlConnect(sql, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({ msg3: '修改成功', myid: req.body.id })
    })
})


//管理员退出登录
//退出登录
adminRouter.get('/aloginout', (req, res) => {
    console.log(req.session);
    req.session.aid = null;
    req.session.aname = null;
    res.json({
        msg:'以清除'
    })
});




// 对图片进行静态资源托管
adminRouter.use('../../uploads', express.static('uploads'));
module.exports = adminRouter;