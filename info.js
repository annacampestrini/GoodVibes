window.onload(buscaPessoa());
function buscaPessoa(){

    var url = '/buscaPessoa'

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);

            var tnome = '';
            var ttelefone = '';
            var temail = '';

            for(x=0; x<obj.length; x++){

                tnome +=
                '<h6 class="mb-0 text-white lh-100">' +  obj[x].tpessoa + ' ' + obj[x].sobrenome_tpessoa + '</h6>'
            }

            for(x=0; x<obj.length; x++){
                ttelefone +=
                '<h6 class="mb-0 text-white lh-100">' +  obj[x].telefone_tpessoa + '</h6>'
            }

            for(x=0; x<obj.length; x++){

                temail +=
                '<h6 class="mb-0 text-white lh-100">' + obj[x].email_tpessoa + '</h6>'
            }


            document.getElementById('tnome').innerHTML = tnome;
            document.getElementById('ttelefone').innerHTML = ttelefone;
            document.getElementById('temail').innerHTML = temail;

           
        }
    }
    xhr.send();
};