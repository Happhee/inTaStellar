function typeofDecision(typeGaurd: string | number) {
  if(typeof typeGaurd === 'string'){
  	typeGaurd.substr(0);
  }else{
  	Math.floor(typeGaurd);
  }
}