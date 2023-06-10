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
    
    Cchange($b);
    var $b=" ";
    C.value=" ";
    document.getElementById("ColourType").innerHTML=" ";

    Qchange();

    model = $a;
   
}

function Cchange($b){

    document.getElementById("ColourType").innerHTML= $b;

    if(document.getElementById("ModelType").innerHTML=="iPhone 7 Plus"){
        switch ($b){
            case "Black": 
                document.getElementById("Pic").src="images/phones/iP7black.jpg";
                break;
            case "Gold": 
                document.getElementById("Pic").src="images/phones/iP7gold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iP7white.jpg";
                break;
        }
    }
    else if(document.getElementById("ModelType").innerHTML=="iPhone 11")
	{
        switch($b) {
            case "Black":
                document.getElementById("Pic").src="images/phones/iP11black.jpg";
                break;
            case "Gold":
                document.getElementById("Pic").src="images/phones/iP11gold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iP11white.jpg";
                break;				
        }
    }
    else if(document.getElementById("ModelType").innerHTML=="iPhone XR")
	{
        switch($b) {
            case "Black":
                document.getElementById("Pic").src="images/phones/iPXRblack.jpg";
                break;
            case "Gold":
                document.getElementById("Pic").src="images/phones/iPXRgold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iPXRwhite.jpg";
                break;				
        }
    }
    colour = $b; 
}

function Qchange (){
    // Link different product with different prices
    qty=document.getElementById('Q').value;
    // console.log(qty);
    //  if (qty<=0){ 
    //  } 
    document.getElementById("QuantityType").innerHTML=qty;

    // to get the total price, as it will number --> parseInt
    price=parseInt(document.getElementById(`Up`).innerText);
    total = qty*price;
    document.getElementById('Tp').innerHTML=total;
}

