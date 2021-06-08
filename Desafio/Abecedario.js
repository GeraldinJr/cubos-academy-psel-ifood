function solucao(letra, palavras) {
	let i=0;
  for(let aux of palavras){
    if(aux[0]!==letra){
      i++;
    }
  }
  console.log(i);
    
}