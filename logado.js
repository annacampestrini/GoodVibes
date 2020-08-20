window.onload(buscaProdutos());
function buscaProdutos(){

    var url = '/buscaProdutos'

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            var obj = JSON.parse(xhr.responseText);
            //console.log(obj);

            var tproduto = '';

            for(x=0; x<obj.length; x++){

                tproduto +=  '<div class="media text-muted pt-3" >' +
                '<img src="_img/banana.jpg" width="32" height="32" class="mr-2 rounded">' +
                '<div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">' +
                '<div class="d-flex justify-content-between align-items-center w-100 ">' +
                '<strong class="verde1" id="nomeProd">' + obj[x].nome + '</strong>' +
                '<strong class="verde1" id="precoProd">R$' + obj[x].preco + '</strong>' +          
                '<a onclick="update(' + obj[x].id + ')"><i class=" btn far fa-edit" data-target="#cadProd" data-toggle="modal"  ria-hidden="true" role="dialog"></i></a>' +
                '</div>' +
                '<div class="d-flex justify-content-between align-items-center w-100">' +
                '<span class="d-block text-gray-dark">' + obj[x].descricao + '</span>' +
                '<a onclick="confirmaDelete(' + obj[x].id + ')"><i class="btn fas fa-times" data-target="#cadProd" data-toggle="modal"  ria-hidden="true" role="dialog"></i></a>' +
                '</div>' +
                '</div>' +
                '</div>'

            }

            document.getElementById('resultado').innerHTML = tproduto;
           
        }
    }
    xhr.send();
};

function update(x){
    var novoNome_img = prompt("Digite o novo nome da imagem: ");
    var novoNome = prompt("Digite o novo nome do produto: ");
    var novoPreco = prompt("Digite o novo preço do produto: ");
    var novaDescricao = prompt("Digite a nova descrição do produto: ");


    if(novoNome_img !==null && novoNome !==null && novoPreco !==null && novaDescricao !==null){
        window.location.href = '/update/' + x + '/' + novoNome_img + '/' + novoNome + '/' + novoPreco + '/' + novaDescricao;
    }
}

function confirmaDelete(x){
    if(confirm("Deseja apagar esse dado?")){
        window.location.href = '/delete/' + x;
    }
}

