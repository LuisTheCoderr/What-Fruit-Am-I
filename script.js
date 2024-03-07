let tasteButton = document.querySelector(".taste-button");
let button = document.querySelector("button");
let ageNumber = document.querySelector("age");
let result = document.querySelector(".result");
let title = document.querySelector(".title");
let counterdiv = document.querySelector(".counter");
//
 let counter = 0;
button.onclick = function() {
    let taste = document.querySelector(".taste").value;
    let number = document.querySelector(".age").value;
counter = counter + 1;    
    if (number < 50 && taste === "sweet") {
 result.innerHTML = "<img src=https://static.toiimg.com/photo/84642323.cms> <br><em>You are a mango!</em>";
    } else if (number > 50 && taste === "sweet") {
        result.innerHTML = "<img src=https://foodal.com/wp-content/uploads/2015/03/Make-Strawberry-Season-Last-All-Year.jpg> <br> <em> You are a Strawberry!</em>"; 
    } else if (number < 50 && taste === "sour") {
        result.innerHTML = "<img src=https://boydhampers.com/cdn/shop/articles/whole-and-sliced-lemons.jpg?v=1694357456&width=1100 <br> <em> You are a Lemon! </em>";
    } else if (number > 50 && taste === "sour") { 
        result.innerHTML = "<img src=https://assets.idahopreferred.com/uploads/2023/08/23130201/Cherries-scaled-1.jpg <br> <em> You are a Cherry </em>";
    }
     alert("Ready for your results?");
    counterdiv.innerHTML = ("This quiz has been taken " + counter + " times ");
};
//
