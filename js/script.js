for ( var i = 1 ; i <= 100 ; i++ ){
  if ((i % 3 == 0) && (i % 5 == 0)){
    document.write("FizzBuzz" + "<br>");
  } else if (i % 3 == 0){
    document.write("Fizz" + "<br>");
  } else if (i % 5 == 0){
    document.write("Buzz" + "<br>");
  }  else {
    document.write(i+ "<br>");
  }
}

//
// for (var i = 1; i <= 100; i++) {
//   if ( i % 3 == 0 ) {
//     console.log("Fizz" + "<br>");
//   }
//   else if ( i % 5 == 0 ) {
//     console.log("Buzz" + "<br>");
//   }
//   else if ( i % 3 == 0 && i % 5 == 0 ) {
//     console.log("FizzBuzz" + "<br>");
//   }
//   else {
//     console.log(i);
//   }
// }
