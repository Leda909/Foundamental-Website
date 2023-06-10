var qty, total, price = 0;
var model, colour = "";

function Mchange($a){

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