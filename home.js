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
            var tet = '';

            for(x=0; x<obj.length; x++){

                tproduto += 
                '<div class="row card-columns"> ' +
                    '<div class="col-4 col-sm-4 col-md-3 col-lg-2" data-target="#infoProd" data-toggle="modal">' +
                        '<div class="card h-90 btn-wrap" style="max-width: 100rem; max-height: 20rem;">' +
                        '<div class="media" style="float: left;">' +
                            '<img src="_img/banana.jpg" class="card-img-top imgCard">' +
                                '<div class="media-body">' +
                                    '<i class="fas fa-plus"></i>' +
                                '</div>' +
                            '</div>' +
                            '<div class="card-body ">' +
                                '<h5 class="card-title">' + obj[x].nome + '</h5>' +
                                '<h3 class="card-title">' + obj[x].preco + '</h3>' +
                            ' </div>' +
                        '</div>' +
                    '</div>' +
                '</div>' 
            }

            document.getElementById('resultado').innerHTML = tproduto;
           
        }
    }
    xhr.send();
};

