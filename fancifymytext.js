const fancyRadio = document.getElementById("fancyshmancy");
const boringRadio = document.getElementById("boringbetty");
const textBox = document.getElementById("textBox");




function fancy(){
    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
    if(boringRadio.checked){
        boringRadio.checked = false;
    }
}

function boring(){
    textBox.style.fontWeight = null
    textBox.style.color = null;
    textBox.style.textDecoration = null;
    textBox.style.textTransform = null;
    textBox.value = textBox.value.replace("-Moo.", ".");
    textBox.value = textBox.value.replace("-Moo!", "!");
    if(fancyRadio.checked){
        fancyRadio.checked = false;
    }
}

function biggerText(){
    textBox.style.fontSize = "24pt";
}

function moo(){
    textBox.value = textBox.value.replace(".", "-Moo.");
    textBox.value = textBox.value.replace("!", "-Moo!");
    textBox.style.textTransform = "uppercase";
}