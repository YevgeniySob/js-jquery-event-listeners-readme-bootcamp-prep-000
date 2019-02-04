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
    if(key.which == 71){
      aleft("You pressed G")
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    aleft("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

});

