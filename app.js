const express = require('express'); 
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }));

const sql = mysql.createConnection({
    host: 'teste3.ca3ngk4kflen.us-east-1.rds.amazonaws.com',
    user: 'admin',
    database: 'teste',
    password: 'teste12345',
    port: 3306
});

sql.query("use teste")

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html'); 
});

app.get('/cadastro', (req, res)=>{
    res.sendFile(__dirname + '/cadastro.html'); 
});

app.get('/cadastroProdutos', (req, res)=>{
    res.sendFile(__dirname + '/cadastroProdutos.html'); 
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/login.html'); 
});

app.get('/logado', (req, res)=>{
    res.sendFile(__dirname + '/logado.html'); 
});

// Busca dados do BD
app.get('/buscaProdutos', (req, res)=>{
    sql.query("select * from tproduto_teste",(err, results, filds)=>{
        res.json(results);
    }); 
});

// Rota que recebe a requisição com parâmetros e atualiza os dados do BD ()
app.get('/update/:id/:nome_img/:nome/:preco/:descricao', (req,res)=>{
    sql.query("update tproduto_teste set nome_img = ?, nome = ?, preco = ?, descricao = ? where id = ?",[req.params.nome_img, req.params.nome, req.params.preco, req.params.descricao, req.params.id],(err, results, filds)=>{
        res.redirect('/logado');
    });
});

// Rota que recebe a requisição com parâmetro e apaga os dados do BD
app.get('/delete/:id',(req,res)=>{
    sql.query("delete from tproduto_teste where id = ?",[req.params.id],(err,results,filds)=>{
    res.redirect('/logado');
    });
});


app.post('/cadastroProduto', (req, res)=>{
    //console.log(req.body.nome_img);
    //console.log(req.body.nome);
    //console.log(req.body.preco);
    //console.log(req.body.descricao);
    sql.query("insert into tproduto_teste values (?,?,?,?,?)",[, req.body.nome_img, req.body.nome, req.body.preco, req.body.descricao, req.body.id],(err, results, filds)=>{
        res.redirect('/logado');
  });
});

// Busca dados do BD
app.get('/buscaPessoa', (req, res)=>{
    sql.query("select * from tpessoa",(err, results, filds)=>{
        res.json(results);
    }); 
});

app.post('/cadastroPessoa', (req, res)=>{
    console.log(req.body.nomeUsuario);
    console.log(req.body.sobrenomeUsuario);
    console.log(req.body.cpfjUsuario);
    console.log(req.body.EndRuaUsuario);
    console.log(req.body.EndBairroUsuario);
    console.log(req.body.EndNumUsuario);
    console.log(req.body.telefoneUsuario);
    console.log(req.body.emailUsuario);
    console.log(req.body.senhaUsuario);
  
      
      sql.query("insert into tpessoa values (?,?,?,?,?,?,?,?,?,?)",
       [null, req.body.nomeUsuario,
           req.body.sobrenomeUsuario, req.body.telefoneUsuario, req.body.cpfjUsuario,
           req.body.emailUsuario, req.body.EndNumUsuario, 
           req.body.EndRuaUsuario, req.body.EndBairroUsuario,
           req.body.EndCidadeUsuario]);
      res.redirect('/logado');
  });

app.get('/sacolaCompra', (req, res)=>{
    res.sendFile(__dirname + '/sacolaCompra.html'); 
});

app.get('/produtos', (req, res)=>{
    res.sendFile(__dirname + '/produtos.html'); 
});

app.use(express.static(__dirname + '/'));


app.listen(8081, function(){
    console.log('Servidor Ok');
});