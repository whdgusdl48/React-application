const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname + "/views"));
app.set('view engine','ejs');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'infor'
})
connection.connect();

app.get('/',function(req,res){//초기화면 구현
    res.writeHead(202,{'Content-Type' : "text/html ; charset=utf-8"});
    fs.createReadStream('./Sign/test.html').pipe(res);
})

app.post('/name',function(req,res){
    var id = req.body.name1;
    var password = req.body.pass;
    var sql3 = 'select * from infor';
    connection.query(sql3,function(err,row,field){
        if(err) throw err;
        var checked = 0;
        for(var i = 0; i<row.length;i++){
            if(id == row[i].id && password == row[i].passward){
                checked = 1;
                break;
            }
        }
        if(checked == 1){
            res.render('d',{
                name : id,
            })
        }
        else{
            res.send(`<script>alert('아이디가 틀렸습니다.');
            history.back();</script>`)
        }
    })
})

app.post('/make',function(req,res){//회원가입 html 구현
    res.writeHead(202,{'Content-Type' : "text/html ; charset=utf-8"});
    fs.createReadStream('./Sign/makeAccount.html').pipe(res);
});
app.post('/find',function(req,res){
    res.writeHead(202,{'Content-Type' : "text/html ; charset=utf-8"});
    fs.createReadStream('./Sign/find.html').pipe(res);
})
app.post('/success',function(req,res){
    var name = req.body.name1;
    var id = req.body.id;
    var pass = req.body.pass;
    var sql = 'select * from infor';
    connection.query(sql,function(err,row,field){
        if(err) throw err;
        var checked = 0;
        for(var i = 0 ; i<row.length;i++){
            if(id == row[i].id){
                checked = 1;
            }
        }
        if(checked == 0){
        var sql2 = `insert into infor (name,id,passward) values('${name}','${id}','${pass}')`;
        connection.query(sql2,function(err,row,field){
            console.log('입력성공!');
        })
        var sql8 = `create table ${id}(
            day varchar(256) NOT NULL,
            todo varchar(256) NOT NULL)`;
        connection.query(sql8,function(err,row,field){
            if(err) throw err;

        })
        res.send(`<script>alert('회원가입되었습니다.');
            history.go(-2)</script>`);
        }
        else if(checked == 1){
            res.send(`<script>alert('아이디가 중복되었습니다.');
            history.back();</script>`)
        }
    })
});

app.post('/find/findId',function(req,res){
    res.send(`<form method="post" action="/find/findId/success">
      이름을 입력하세요 : <input type="text" name="name1"/> <br />
      <button>찾기 </button>
     </form>`)
})
app.post('/find/findPass',function(req,res){
    res.send(`<form method="post" action="/find/findPass/success">
      아이디을 입력하세요 : <input type="text" name="id"/> <br />
      <button>찾기 </button>
     </form>`)
})
app.post('/name/addList',function(req,res){
    var day = req.body.day;
    var id = req.body.id;
    var todo = req.body.todo;
    var sql9 = `insert into ${id} (day,todo) values('${day}','${todo}')`;
    connection.query(sql9,function(err,row,field){
        if(err) throw err;
        console.log('추가성공');
    })
})

app.post('/name/deleteList',function(req,res){
    var day = req.body.day;
    var todo = req.body.todo;
    var id = req.body.id;
   
    
    switch (day) {
        case 'Mon':
            day = '월';
            break;
        case 'Tue':
             day = '화';
             break;
        case 'Wen':
             day = '수';
             break;
        case 'Tur':
             day = '목';
             break;
        case 'Fri':
             day = '금';
             break;
        case 'Sat':
             day = '토';
             break;
        case 'Sun':
             day = '일';
            break;
        default:
            break;
    }
    console.log(day,todo,id);

    var sql11 = `delete from ${id} where day='${day}' and todo='${todo}'`;
    connection.query(sql11,function(err,row,field){
        if(err) throw err;
        console.log('제거성공');   
    })
    
})
app.post('/find/findPass/success',function(req,res){
    var id = req.body.id;
    var pass;
    var sql5 = 'select * from infor';
    connection.query(sql5,function(err,row,field){
        if(err) throw err;
        var checked = 0;
        for(var i = 0 ; i<row.length; i++){
            if(id == row[i].id){
                checked = 1;
                pass = row[i].passward;
                break;
            }
        }

        if(checked == 1){
            res.send(`<script>alert('비밀번호는 ${pass} 입니다.');
            history.go(-3);</script>`)
        }
        else{
            res.send(`<script>alert('아이디가 틀리거나 없습니다.');
            history.go(-1);</script>`);
        }
    })
})

app.post('/find/findId/success',function(req,res){
    var name = req.body.name1;
    var sql4 = 'select * from infor';
    connection.query(sql4,function(err,row,field){
        if(err) throw err;
        var checked = 0;
        var id;
        for(var i = 0 ; i <row.length; i++){
            if(row[i].name == name){
                checked = 1;
                id = row[i].id;
                break;
            }
        }

        if(checked == 1){
            res.send(`<script>alert('아이디는 ${id} 입니다.');
            history.go(-3);</script>`)
        }
        else{
            res.send(`<script>alert('가입된 아이디가 없습니다..');
            history.go(-1);</script>`);
        }
    })
})

app.post('/name/delete',function(req,res){
    res.send(`<script>confirm('정말 삭제하실건가요?')</script>`);
    var name = req.body.name1;
    var sql6 = 'select * from infor';
    connection.query(sql6,function(err,row,field){
        if(err) throw err;
        var checked = 0;
        for(var i = 0 ; i<row.length;i++){
            if(name == row[i].id){
                checked = 1;
                break;
            }
        }

        if(checked == 1){
            var sql7 = `delete from infor where id= '${name}'`;
            connection.query(sql7,function(err,row,field){
                if(err) throw err;
                console.log('삭제');
                
            })
            res.send(`<script>alert('삭제되었습니다.');
            history.go(-2);</script>`);
        }
    })
})
app.post('/name/List',function(req,res){
    var id = req.body.name1;
    var sql10 = `select * from ${id}`;
    connection.query(sql10,function(err,row,field){
        if(err) throw err;
        var mon = [];
        var tue = [];
        var wen = [];
        var tur = [];
        var fri = [];
        var sat = [];
        var sun = [];
        for(var i = 0 ; i<row.length;i++){
            switch (row[i].day) {
                case '월':
                    mon.push(row[i].todo);
                    break;
                case '화':
                    tue.push(row[i].todo);
                    break;
                case '수':
                    wen.push(row[i].todo);
                    break;
                case '목':
                    tur.push(row[i].todo);
                    break;
                case '금':
                    fri.push(row[i].todo);
                    break;
                case '토':
                    sat.push(row[i].todo);
                    break;
                case '일':
                    sun.push(row[i].todo);
                    break;
                default:
                    break;
            }
        }
        res.render('e',{
            name : id,
            Monday : mon,
            Tuesday : tue,
            Wendsday : wen,
            Thuray : tur,
            Friay : fri,
            Saturday : sat,
            Sunday : sun,
        })
    })
  
    
})
app.listen(7000,function(){
    console.log('hello');
})
