var express = require('express');
var mysql = require('mysql');
const bodyparser = require('body-parser');
var sqlConnect = require('../sqltool/mysqltool')

const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');    //有关文件时使用

var userRouter = express.Router();

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
userRouter.use((req, res, next) => {
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
userRouter.use(cookieParser(secret));
// 启用session
userRouter.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))











// 接受上传的图片
userRouter.post('/uploads', upload.single('images'), function (req, res, next) {
    // console.log(req.file);
    res.json({ imgsrc: host + 'uploads/' + req.file.filename });
});


//编辑器上传图片接口
userRouter.post('/uploadimgs', upload.array('myimgs'), function (req, res, next) {
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




//用户注册
userRouter.post('/regs', (req, res) => {
    console.log(req.body);
    var sql = "select * from user where 1";
    if (req.body.username) {
        sql += " and username='" + req.body.username + "'";
    }
    sqlConnect(sql, function (data) {
        console.log(data)
        if (data.length > 0) {
            res.json({
                msg: 'username_is_already'
            })
        }
        else {
            let newsql = `insert into user(username,psw,sex,tel,email,birth,cx,shop,title,pic) values("${req.body.username}","${req.body.psw1}","${req.body.sex}","${req.body.tel}","${req.body.email}","${req.body.birth}","${req.body.cx}","${req.body.shop}","${req.body.title}","${req.body.imgsrc}")`;
            sqlConnect(newsql, function (data) {
                res.json({
                    msg: 'reg_success'
                })
            })
        }
    })

})


//用户登录
userRouter.post('/logins', (req, res) => {
    console.log(req.body);
    var sql1 = `select * from user where username="${req.body.username}" and state=1`;
    sqlConnect(sql1, function (data) {
        console.log(data)
        if (data == '') {
            res.json({
                msg1: '该用户不存在'
            })
        }
        else {
            sql1 += ` and psw="${req.body.psw1}"`
            sqlConnect(sql1, function (data) {
                if (data == '') {
                    res.json({ msg1: '密码错误' })
                } else {
                    //记录cookie和session必须放在在数据返回之前
                    req.session.uid = data[0].id;
                    req.session.uname = data[0].username;
                    req.session.upic = data[0].pic;
                    res.json(
                        {
                            msg1: '登陆成功',
                            myid: data[0].id
                        })

                }
            })
        }

    })

})

//提供session信息的路由
userRouter.get('/checku', (req, res) => {
    console.log(req.session);
    res.json({ id: req.session.uid, uname: req.session.uname, upic: req.session.upic});
});



//个人信息展示
userRouter.post('/userinfo',(req,res)=>{
    sql2=`select * from user where id="${req.session.uid}"`;
    sqlConnect(sql2,function(data){
        console.log(data)
        res.send(data[0]);
    })
}) 




// 修改信息
userRouter.post('/updata',(req,res)=>{
     let p = req.body;
    var sql3 =
    `UPDATE user SET username=?,pic=?,sex=?,tel=?,email=?,birth=?,cx=?,shop=?,title=? WHERE id =?`;
  let pdata = [p.username, p.pic,p.sex,p.tel,p.email,p.birth,p.cx,p.shop,p.title,req.session.uid];
    sqlConnect(sql3, (data) => {
        console.log("数据库的操作结果######" + data);
        //修改头像
         req.session.upic = p.pic;
        res.json({msg3:'修改成功',myid:req.body.id})
    },pdata)
     sql31=`UPDATE goods SET username="${req.body.username}",tel="${req.body.tel}",shop="${req.body.shop}" WHERE userid = ${req.session.uid}`;
     sqlConnect(sql31, (data) => {
        // console.log("数据库的操作结果====" + data);
        // res.json({msg3:'修改成功',myid:req.body.id})
        console.log('goods表也修改成功')
    })
})


//修改密码
userRouter.post('/updatakey',(req,res)=>{
    // console.log(req.body)
    var sql4 =
    `UPDATE user SET psw="${req.body.psw1}" WHERE id = ${req.session.uid}`;
    sqlConnect(sql4, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({msg4:'修改成功',myid:req.body.id}) 
    })
})



//添加商品
userRouter.post('/addgoods', (req, res) => {
    console.log(req.body);  
    let p = req.body;
    var sql5 = `INSERT INTO goods (class1,pic,sexs,age,price,num,title1,username,tel,shop,info,userid) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);`
    console.log('============================') 
    console.log(sql5)
    let pdata = [p.class1, p.pic,p.sexs,p.age,p.price,p.num,p.title1,p.username,p.tel,p.shop,p.info,req.session.uid];
    sqlConnect(sql5, function (data) {   
        console.log(data);
        res.json({msg5:'添加成功'})
    }, pdata)

})
         



//卖家商品管理
userRouter.get('/usergoodsselect',(req,res)=>{
    var sql6=`select * from goods where userid="${req.session.uid}"`;
    sqlConnect(sql6,function(data){
        console.log(req.query.userid)
        res.send(data);
    })
})


//卖家商品修改
userRouter.post('/usergoodsupdata',(req,res)=>{
    console.log(req.body)
     let  p= req.body;
    sql=`UPDATE goods SET class1=?,pic=?,sexs=?,age=?,price=?,num=?,tel=?,title1=?,info=? WHERE id = ?`;
    let pdata = [p.class1, p.pic,p.sexs,p.age,p.price,p.num,p.title1,p.tel,p.info,p.id];
    sqlConnect(sql,function(data){
        // console.log(data)   
        // res.send(data);
        res.json({ msg5: '修改成功' })
    },pdata)
})


// 管理员/卖家商品管理删除
userRouter.post('/deletegoogd', (req, res) => {
    console.log(req.body);
    
    var sql = `DELETE FROM goods WHERE id=${req.body.id}`;
    sqlConnect(sql, function (data) {
        res.send('删除啦')
    })
})


//退出登录
userRouter.get('/uloginout', (req, res) => {
    console.log(req.session);
    req.session.uid = null;
    req.session.uname =null;
    req.session.upic = null;
    res.json({ id: req.session.uid, uname: req.session.uname, upic: req.session.upic});
});
 





// 对图片进行静态资源托管
userRouter.use('../../uploads', express.static('uploads'));
module.exports = userRouter;