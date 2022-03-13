document.getElementById("enviar").addEventListener("click",
validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" 
  && document.getElementById("email").value != ""
  && document.getElementById("telefone").value != "")
  { alert("Parabéns! Você receberá novo conteúdo regularmente!")
  }else{
  alert("Preencha os campos nome, e-mail e telefone corretamente.")
   }
}


