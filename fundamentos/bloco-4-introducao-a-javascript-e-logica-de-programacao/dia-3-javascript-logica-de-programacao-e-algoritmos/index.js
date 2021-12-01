// let n = 10
// let simbolo = "*"
// let imputLine = " "

// for (let index = 0; index < n; index+=1){
// imputLine = imputLine + simbolo;
// }
// for (let index = 0; index < n; index+=1) {
//     console.log (imputLine);
// }

//  let n = 5
//  let simbolo = "*"
//  let imputLine = " "

//  for (let index = 0; index < n; index+=1) {
//     console.log (imputLine);
//     imputLine = imputLine + simbolo;
//    }


   let n = 5
   let simbolo = "*"
   let imputLine = " "
   let posicao = n;
  
   for (let index = 0; index < n; index+=1) {
      for (let coluna = 0; coluna <= n; coluna++) {
         if(coluna < posicao){
            imputLine = imputLine + " ";
         }else{
            imputLine = imputLine + simbolo;
         }
      }
      console.log (imputLine);
      imputLine = " ";
      posicao -=1;
     }