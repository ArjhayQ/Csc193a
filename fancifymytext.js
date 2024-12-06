function Alert(){
    alert("Hello, world!");
}

function Bigger(){
    document.getElementById("text").style.fontSize = "24px";
}

function FancySchmancy(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.textDecoration = "underline";
    document.getElementById("text").style.color = "blue";
}

function BoringBetty(){
    document.getElementById("text").removeAttribute("style");
}

function Moo(){
    document.getElementById("text").style.textTransform = "uppercase";

    var str = document.getElementById("text").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("text").value = str;
}