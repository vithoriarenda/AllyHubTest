function cadastraCurso(){
    var nome = document.getElementById("nome");
    var datainicio = document.getElementById("datainicio");
    var datafim = document.getElementById("datafim");
    var semanas = document.getElementById("semanas");
    var description = document.getElementById("description");

    var dados = JSON.parse(localStorage.getItem("dadosCadastro"));

    if(dados == null){
	      localStorage.setItem("dadosCadastro", "[]");
	      dados = [];
}

	  var auxRegistro = {
		    nome: nome.value(),
		    datainicio: datainicio.value(),
		    datafim: datafim.value(),
		    semanas: semanas.value(),
		    description: description.value()
}

	  dados.push(auxRegistro);

	  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
    alert("Você está cadastrado(a)!");

    nome.value == " ";
		datainicio.value == " ";
		datafim.value == " ";
		semanas.value == " ";
		description.value == " ";
}