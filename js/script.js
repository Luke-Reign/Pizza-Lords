
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
            
                if (document.getElementById('small').checked){
                    var result1=timesOne(number1,number2);
                    $("#result").text("Your total amount is: Ksh."+result1+".");
                 
                }
                else if (document.getElementById('medium').checked){
                var result2=timesTwo(number1,number3);
                $("#result").text("Your total amount is: Ksh."+result2+".");
                   }
                else if(document.getElementById('large').checked){
                var result3=timesThree(number1,number4);
                $("#result").text("Your total amount is: Ksh."+result3+ ".");
                   }
                else{
                    alert('Error! Some fields are empty');
                   }
                });
                
                $("form#delivery").submit(function(event){
                    event.preventDefault();
                    alert("Your Order will be delivered to your location");
                    alert("The delivery cost is Ksh.200")
                });
                
                });