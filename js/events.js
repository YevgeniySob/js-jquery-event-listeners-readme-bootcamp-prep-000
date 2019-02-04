//define functions here


function getIt(){
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}


function pressIt(){
  $('input:first').on('keydown', function(key){
    if(key.which)
  })
}

function submitIt(){
  
}
$(document).ready(function(){

});

