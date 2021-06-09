function solucao(ano) {
	aux=ano-2018;
  if(aux%4===0){
    console.log("COPA");
  }
  else if(aux%4===2){
    console.log("JOGOS");
  }
  else{
    console.log("MEH");
  }
}