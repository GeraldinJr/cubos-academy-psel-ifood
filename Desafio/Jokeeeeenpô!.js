function solucao(joao, andre) {
    if(joao===andre){
    console.log("EMPATE");
  }
  else{
    if(joao==="PEDRA" && andre==="TESOURA" ||joao==="PAPEL" && andre==="PEDRA" || joao==="TESOURA" && andre==="PAPEL"){
      console.log("JOAO");
    }
    else{
     console.log("ANDRE");
    }
  }
}