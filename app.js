let button = document.getElementsByTagName('td');
let screen = document.getElementById('screen');
let operand1 = 0;
let operand2 = null;
let operate = null;
function Myeval(){
    let key = this.getAttribute("data-val");
    if(key == "="){
        operand2 = parseFloat(screen.innerText);
        let exp = `${operand1}  ${operate}  ${operand2}`;
        let result = eval(exp);
        screen.innerText = result;
        operand1 = result;
    }else if(key == "csign"){
        let text = parseFloat(screen.innerText);
        text = text *-1;
        screen.innerText = text;

    }else if(operate == "*" && key == "per"){
        operand2 = parseFloat(screen.innerText);
        let exp = `${operand1}  ${operate}  ${operand2}`;
        let result = eval(exp)/100;
        screen.innerText = result;

    }else if(operate != "*" && key == "per"){
        screen.innerText = "Error";
    }
    else if(key == "ac"){
        screen.innerText = '';
        operand1 = 0;
        operand2 = null;
        operate = null;
    }
    else if(key == "+"){
        operand1 = parseFloat(screen.innerText);
        screen.innerText = '';
        operate = "+";
    }else if(key == "*"){
        operand1 = parseFloat(screen.innerText);
        screen.innerText = '';
        operate = "*";
    }
    else if(key == "/"){
        operand1 = parseFloat(screen.innerText);
        screen.innerText = '';
        operate = "/";
    }
    else if(key == "-"){
        operand1 = parseFloat(screen.innerText);
        screen.innerText = '';
        operate = "-";
    }
    else{
        if(screen.innerText == "Error"){
            screen.innerText = "";
        }
        screen.innerText = screen.innerText + key;
    }
    
}

for(let i =0; i < button.length; i++){
    if(button[i] != undefined){
     button[i].addEventListener('click', Myeval);
    }
}