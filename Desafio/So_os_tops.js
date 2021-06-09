function solucao(produtos) {
	let fattops=0, fat=0;
  for(prod of produtos){
    const preco=prod.preco;
    if(preco>10000){
      fattops+=preco;
    }
    fat+=preco;
  }
  const relatorio = {
    totalTop: fattops,
    percentual: fattops/fat
  }
  console.log(relatorio);
    
}