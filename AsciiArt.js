function AsciiArt(width, height, test, alphabet) {
  test = test.toUpperCase();
  var len = test.length;
  var charachers = test.split("");
  var res=new Array(height).fill("",0,height);
 
  for (let i = 0; i < len; i++) {
    var c = charachers[i].charCodeAt();
    for (let j = 0; j < height; j++) {
      var n = width * (c - 65);
      if(n>=0)//not contain "?" cause 63 code of "?" and 63 -65=-2
      res[j] += alphabet[j].substring(n, n + width);
    else{
      const x=26*width;
      res[j] += alphabet[j].substring(x);
    }}
    
  }

  return res.join("\n");
}
module.exports = AsciiArt;

// const res=new Array().fill("",0,height);
// const arr2=test.split('');
//  for (let i = 0; i < height; i++) {

//    for (let j = 0; j <arr2.length; j++) {

//   res[i]+=arr[(mapper[arr2[j]])[i]-1];
//    }
//    res[i]=res[i].substring(9);
//  }}
// return res.join("\n");

// }
// console.log(AsciiArt(4,5,"af?",))
//
// //the mapper obj display the indies of art which defined in const arr in up
// var mapper={
//   A :[2,8,11,8,8],B :[7,8,11,8,7],E :[11,1,7,1,11],M :[8,11,11,8,8],N :[11,8,8,8,8],H :[8,8,11,8,8]
//   ,T :[11,2,2,2,2],unknown:[11,3,7,16,2]
// };

//  [" #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ",
//   "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ",
//   "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ",
//   "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ",
//   "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  "];

// #   1
//  #  2
//   # 3
//    #4
//  ## 5
//   ##6
// ##  7
// # # 8
//  # #9
// #  #10
// ### 11
//  ###12
// # ##13
// ## #14
// ####15
//     16

// if(test.includes('?')){
//   for (let i = 0; i < height; i++) {
//     res[i]+=arr[(mapper[arr2[j]])[i]-1];

//   }
