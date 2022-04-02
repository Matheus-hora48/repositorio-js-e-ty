function max (x,y){
  if(x > y ){
    return x
  } else {
    return y
  }

}

const max2 = (x,y) => x > y ? x:y
console.log(max(5, 10))
console.log(max2(25, 40))