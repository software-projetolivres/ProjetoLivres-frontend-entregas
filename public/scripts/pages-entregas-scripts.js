/* função responsável pela checagem do formato inserido da data nas páginas: /entregas, /minhas-entregas, /entregas-invalidas */
function checkDate() {
    var dataEntrega = document.getElementById('data_entrega').value
    const regex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (dataEntrega.match(regex) === null) {
        document.getElementById('message').innerHTML = '<b><i>A data deve ser inserida no formato AAAA-MM-DD.</i></b>';
    }
  
    const date = new Date(dataEntrega);
    const timestamp = date.getTime();
  
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        document.getElementById('message').innerHTML = '<b><i>A data deve ser inserida no formato AAAA-MM-DD.</i></b>';
    } else{
        document.getElementById('message').innerHTML = '';
    }
}

/* função responsável por retornar verdadeiro se for uma data do passado e falso se for uma data >= hoje */
function isDataPassada() {
    var dataEntrega = document.getElementById('data_entrega').value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    if(dataEntrega < today){
        return true;
    } else{
        return false;
    }
}

/* função responsável por retornar os ids das checkboxes (= ids das entregas) que foram selecionadas nas páginas: /entregas, /minhas-entregas */
function getIdsSelecionados() {
    var idsSelecionados = []

    var inputs = document.querySelectorAll('.checkbox');   
    for (var i = 0; i < inputs.length; i++) {   
        if(inputs[i].checked == true){
            idsSelecionados.push(inputs[i].id)
        }
    }

    return idsSelecionados;
}

/* funçao responsável por realizar a chamada da api que atualiza os dados passados */
async function atualizarDados(putData, email) {
    var url = 'https://livres-entregas.herokuapp.com/api/entregas/atualizar/' + email;

    try {
        let res = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization":"Basic " + sessionStorage.getItem('authorization'),
                "Content-type":"application/json;charset=UTF-8"
            },
            body: putData
          });

          mostrarEntregas();
    } catch (error) {
        console.log(error);
    } 
}