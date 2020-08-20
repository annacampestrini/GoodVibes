window.onload(buscaCadastro);

function buscaCadastro(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            var obj = JSON.parse(xhr.responseText);
            //console.log(obj);

            var nomeP = '';
            var precoP = '';

            for(x=0; x<obj.length; x++){
                nomeP += obj[x].nome; 
            }

            document.getElementById('nomeProd').innerHTML = nomeP;
            document.getElementById('precoProd').innerHTML = precoP;
        }
    }
    xhr.send();
};

function update(x){
    var novoNome = prompt("Digite o nome: ");
    var novaIdade = prompt("Digite o idade: ");


    if(novoNome !==null && novaIdade !==null){
        window.location.href = '/update/' + novoNome + '/' + novaIdade + '/' + x;
    }
}

function confirmaDelete(x){
    if(confirm("Deseja apagar esse dado?")){
        window.location.href = '/delete/' + novoNome + '/' + novaIdade + '/' + x;
    }
}

