var display = document.querySelector(".display")
var result = document.querySelector(".result")
var input_value = document.querySelector(".input-value")
var buttons = document.querySelectorAll(".width .div")
var reset_btn = document.getElementById("reset-btn")
var digit_remover = document.getElementById("digit-remover")
// for taking input from the user
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (value) {
        input_value.innerHTML += btn.textContent;
    })
})
// caluculation -----------
document.getElementById("execution-btn").addEventListener('click', function (params) {

    result.textContent = eval(input_value.innerHTML);
    console.log(result.textContent)
})
//-----clearing input window-------

reset_btn.addEventListener('click', function () {
    input_value.innerHTML = "";
    result.innerHTML = '';
    display.value = '';
})
// ---removing the current digit pressed
digit_remover.addEventListener('click', function () {
    var new_value = input_value.textContent;
    var g = new_value.slice(0, -1);
    input_value.innerHTML = g;
})
// setting color modes---------
var mode_btn = document.querySelectorAll(".icons i");

    mode_btn.forEach(function (btn) {
        btn.addEventListener('click',function(){
           
            if (btn == mode_btn[0]) {
                
                document.getElementById("calc").style.backgroundColor = "#F7F8FB"
                document.getElementById("res").style.color = "#424242"
                document.querySelectorAll(".width div").forEach(function(a){
                    a.style.backgroundColor = "#FFFFFF"
                    a.style.color = ""
                    a.style.border = "";
                })
                document.querySelectorAll(".width .div").forEach(function(ab){
                    ab.style.fontWeight = "800";
                })
                document.querySelectorAll(".slight").forEach(function(abc){
                    abc.style.backgroundColor = "#ADE2FF"
                })
                document.querySelectorAll(".unique").forEach(function(abc){
                    abc.style.backgroundColor = "#19ACFF"
                })
               document.querySelector(".ball").style.display= "none"
            }else if(btn == mode_btn[1]){
               document.getElementById("res").style.color = "#FFFFFF"
                document.getElementById("calc").style.backgroundColor = "#17181A"
                
                document.querySelectorAll(".width div").forEach(function(a){
                    a.style.backgroundColor = "#303136"
                    a.style.color = ""
                    a.style.border = "";
                })
                document.querySelectorAll(".width .div").forEach(function(ab){
                    ab.style.fontWeight = "800";
                })
                document.querySelectorAll(".slight").forEach(function(abc){
                    abc.style.backgroundColor = "#005DB2"
                })
                document.querySelectorAll(".unique").forEach(function(abc){
                    abc.style.backgroundColor = "#1991FF"
                })
document.querySelector(".ball").style.display= "none"
            }else{
                 document.querySelector(".ball").style.display= "block"
              document.getElementById("calc").style.backgroundColor = "#f7f8fb85";
              document.getElementById("calc").style.backdropFilter = "blur(50px)";
              document.querySelectorAll(".width div").forEach(function(a){
                a.style.backgroundColor = "#ffffff5d"
                a.style.color = "#fff"
                a.style.border = ".1px solid #ffffff5d";
            })
            document.querySelectorAll(".slight").forEach(function(abc){
                abc.style.backgroundColor = "#27a2f569"
                abc.style.color = "#29A8FF"
            })
            document.querySelectorAll(".unique").forEach(function(abc){
                abc.style.backgroundColor = "#27a3f5da"
            })
            }
             document.getElementById("res").style.color = "#17181A"
            
        })
      
    })


