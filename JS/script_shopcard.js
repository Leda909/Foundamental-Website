var qty, total, price = 0;
var model, colour = "";

function Mchange($a){

    document.getElementById("ModelType").innerHTML=$a;
    
    if($a=="iPhone 7 Plus"){
        document.getElementById('Pic').src="images/phones/iP7black.jpg";
        document.getElementById(`Up`).innerHTML="850";
    }
    else if($a=="iPhone 11"){
        document.getElementById('Pic').src="images/phones/iP11black.jpg";
        document.getElementById(`Up`).innerHTML="1000";
    }
    else if($a=="iPhone XR"){
        document.getElementById('Pic').src="images/phones/iPXRblack.jpg";
        document.getElementById(`Up`).innerHTML="700";
    }
    else {
      
        model = $a;
    }

    
}

function Cchange($a){

    if($a=="iPhone 7 Plus"){
        document.getElementById('Pic').src="images/phones/iP7black.jpg";
    }
    else if($a=="iPhone 11"){
        document.getElementById('Pic').src="images/phones/iP11black.jpg";
    }
    else if($a=="iPhone XR"){
        document.getElementById('Pic').src="images/phones/iPXRblack.jpg";
    }
    else {
        model = $a;
    }

    
}