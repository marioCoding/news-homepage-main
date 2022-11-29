let navBlock = document.getElementById("hiddenNavBlock");
let button1 = document.getElementById("hamMenuButton");
let button2 = document.getElementById("cancelButton");

let displayNavBlock = function() {
    if (navBlock.style.display == 'block')
        navBlock.style.display = 'none';
    else 
        navBlock.style.display = 'block';
        navBlock.style.width = "75%";
        navBlock.style.float = "right";
        navBlock.style.height = "100%";
        navBlock.style.zIndex = "5";
        navBlock.style.position = "absolute";
        navBlock.style.backgroundColor = "#fff";
        navBlock.style.left = "25%";
        navBlock.style.top = "0px";
        navBlock.style.boxShadow = "-400px -10px 20px 0 rgba(0,0,0,0.5)";
}

let hideNavBlock = function() {
    if(navBlock.style.display == 'block')
        navBlock.style.display = 'none';
}

button1.onclick = displayNavBlock;
button2.onclick = hideNavBlock;


