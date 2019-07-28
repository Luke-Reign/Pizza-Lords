
  var timesOne=function(number1,number2){
    return number1*number2;
    };
var timesTwo=function(number1,number3){
        return number1*number3;
        };
var timesThree=function(number1,number4){
            return number1*number4;
            };


            $(document).ready(function() {
                $(".tablehead").click(function(){
                    $(this).next("div").slideToggle("slow");
                });
                
               $("form#total").submit(function(event){
                event.preventDefault();
                var number1=parseInt($("#timesNum").val());
                var number2=parseInt("650");
                var number3=parseInt("900");
                var number4=parseInt("1100");
            
