module.exports = function solveEquation(equation) {
  // your implementation
  let arr = equation.split(' ');
  let a = +arr[0];
  let b = +arr[4];
  let c = +arr[8];
  let D;
  let x1;
  let x2;
  let x3;
  let symbol1 = arr[3]; //перед B
  let symbol2 = arr[7]; //перед C
  if(symbol2 =='-'){
    D =   ( b*b )  + ( 4*a*c);
    }
  else{
    D =   ( b*b )  - ( 4*a*c);
    }
    if(symbol1 =='-'){
      x1 = ( ( ( b ) + (Math.sqrt(D))) / (2*(a)) );
      x2 = ( ( ( b ) - (Math.sqrt(D))) / (2*(a)) );
      }
    else{
      x1 = ( ( ( (-b) ) + (Math.sqrt(D))) / (2*(a)) );
      x2 = ( ( ( (-b) ) - (Math.sqrt(D))) / (2*(a)) );
      }
  /*let D =   ( (b)*(b) )  - ( 4*a*(c) );*/
  /*let x1 = ( ( ( (-b) ) + (Math.sqrt(D))) / (2*(a)) );
  let x2 = ( ( ( (-b) ) - (Math.sqrt(D))) / (2*(a)) );*/
  /*let D = ((((b)*(b))) - (4*a*(c)));
  let x1 = ((((-(b))) + (Math.sqrt(D))) / (2*a));
  let x2 = ((((-(b))) - (Math.sqrt(D))) / (2*a));*/
  let mass = [];
  mass.push(Math.round(x1));
  mass.push(Math.round(x2));
    if(x1<x2){
    return mass;
  }
  else{
    return mass.reverse();
  }
  /*mass.push(Math.round(x1));
  mass.push(Math.round(x2));
  if(mass[0]>mass[1]){
    mass.reverse();
  }*/
  //return mass;
}
