var timesOne = function(number1, number2) {
    return number1 * number2;
  };
  var timesTwo = function(number1, number3) {
    return number1 * number3;
  };
  var timesThree = function(number1, number4) {
    return number1 * number4;
  };
  
  
  $(document).ready(function() {
    $(".tablehead").click(function() {
      $(this).next("div").slideToggle("slow");
    });
  
    $("form#total").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#timesNum").val());
      var number2 = parseInt("650");
      var number3 = parseInt("900");
      var number4 = parseInt("1100");
  
      if (document.getElementById('small').checked) {
        var result1 = timesOne(number1, number2);
        $("#result").text("Your total amount is: Ksh." + result1 + ".");
  
      } else if (document.getElementById('medium').checked) {
        var result2 = timesTwo(number1, number3);
        $("#result").text("Your total amount is: Ksh." + result2 + ".");
      } else if (document.getElementById('large').checked) {
        var result3 = timesThree(number1, number4);
        $("#result").text("Your total amount is: Ksh." + result3 + ".");
      } else {
        alert('Error! Some fields are empty');
      }
    });
  
    $("form#delivery").submit(function(event) {
      event.preventDefault();
      alert("Your Order will be delivered to your location");
      alert("The delivery cost is Ksh.200")
    });
  
  });
  
  function invoice() {
    event.preventDefault();
    // Setting size and sizePrice based on selection
    var size = document.querySelector('input[name="size"]:checked').value;
    console.log("size=" + size);
    var sizePrice = 0;
    if (size === "Small") {
      sizePrice = 500;
    };
    if (size === "Medium") {
      sizePrice = 750;
    };
    if (size === "Large") {
      sizePrice = 950;
    };
    console.log("sizePrice=" + sizePrice);
  
    // Setting crust and crustPrice based on selection
    var crust = document.querySelector('input[name="crust"]:checked').value;
    console.log("crust=" + crust);
    var crustPrice = 0
    if (crust === "Thin-crust") {
      crustPrice = 50;
    };
    if (crust === "Crispy") {
      crustPrice = 50;
    };
    if (crust === "Stuffed") {
      crustPrice = 50;
    };
    if (crust === "Glutten-free") {
      crustPrice = 50;
    };
    console.log("crustPrice=" + crustPrice);
  
    // Setting toppingSelect array and toppingPrice based on multiple check boxes selected. Also setting up toppingDisplay to convert the array into a convenient string.
    var toppingPrice = 0
    var topping = document.getElementsByName("topping");
    var toppingSelect = [];
    var toppingDisplay = "";
    for (var i = 0; i < topping.length; i++) {
      if (topping[i].checked) {
        toppingSelect.push(topping[i].value);
      };
    };
    console.log("toppingSelect=" + toppingSelect);
    if (toppingSelect.length === 1) {
      toppingDisplay = toppingSelect[0];
    } else if (toppingSelect.length > 1) {
      for (i = 0; i < toppingSelect.length; i++) {
        toppingDisplay += toppingSelect[i];
        if (i < (toppingSelect.length - 1)) {
          toppingDisplay += ", ";
        };
      };
    };
    toppingPrice = toppingSelect.length * 100;
    console.log("toppingPrice=" + toppingPrice);
    if (toppingSelect.length === 0) {
      toppingDisplay = "No Toppings";
    }
    // Calculating totalPrice
    var totalPrice = (toppingPrice + crustPrice + sizePrice);
    console.log("totalPrice=" + totalPrice);
  
    // Enter values into the invoice table
    $("#size").html(size + " Pizza");
    $("#sizeprice").html("Ksh." + sizePrice + ".00");
    $("#crust").html(crust + " Crust");
    $("#crustprice").html("+" + crustPrice + ".00");
    $("#topping").html(toppingDisplay);
    $("#toppingprice").html("+" + toppingPrice + ".00");
    $("#totalprice").html("Ksh." + totalPrice + ".00");
  
  
  };
  