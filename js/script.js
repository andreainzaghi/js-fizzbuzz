for ( var i = 1 ; i <= 100 ; i++ ){
  if ((i % 3 == 0) && (i % 5 == 0)){
    document.write("<div class=\"red\">3 e 5</div>" + "<br>");
  } else if (i % 3 == 0){
    document.write("<div class=\"red1\">3</div>" + "<br>");
  } else if (i % 5 == 0){
    document.write("<div class=\"red2\">5</div>" + "<br>");
  }  else {
    document.write(i+ "<br>");
  }
}
