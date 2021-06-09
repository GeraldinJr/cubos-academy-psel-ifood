function solucao(precos) {
    let total=0, final=0, menor=0;
  if(precos.length>=5){
    menor=precos[0];
    for(i=1;i<precos.length;i++){
      if(precos[i]<menor){
        menor=precos[i];
      }
    }
  }
  for(i=0;i<precos.length;i++){
      total+=precos[i];
  }
  final=total-menor;
  console.log(final);
    
}