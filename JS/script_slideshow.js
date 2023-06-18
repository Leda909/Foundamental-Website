texts = ["<h3>The Self Love mandala</h3><p>The division of the circle by six, and the green and pink colours is the simbol of the heart chacra. This chackra means love, affirmation, acceptance. The golden orange adds an extra solemn, cheerful mood to the mandala.</p>",
"<h3>The Spiritual Blossoming mandala</h3><p>In the middle, the six-times repeated flowers and green leafes come into a bouquet, which just shining out from the dark spiritual purple. This dark colour combination gives a mistic feeling to the mandala.</p>",
"<h3>The Affection Pain mandala</h3><p>It is a six-pionted mandala, with the mixture of smaragd, lihght-purpule and lazac colours. From the centrum, the roundish forms transforms into sharp egges. Those egges simbolizing the pain, and the rest of other are the affirmation.</p>",
"<h3>The Svadhisthana Meditation mandala</h3><p>Svadhisthana is the third eye's chacra. Their colour is the indigo, purple and blue.</p>",
"<h3>The Chirping Chit-Chat mandala</h3><p>Twelve happy-yellow birds are chirping on the light-blue area. Actualy, blue is a colour of communication.</p>",
"<h3>The Self-Esteem mandala</h3><p>Being loved and harmonic with themself, says this mandala, by their roundish forms, smaragdish colours and four-pointed stracture.</p>"];

titles = ["Self-love mandala","Spiritual blossoming mandala","The affectionate pain mandala","Svadhisthana meditation mandala","Chirping chit-chat mandala","Self-esteem mandala"];

// JavaScript Document
	//  global variable to hold the current image number
	var current = 1;
	// global variable to hold the setInterval timer
	var timer;
	
	var  mainImage, arrowLeft, arrowRight;

    // by ADDing onload=init(); to body --- Incializate the site ===> so html would first load every elements (images) before any further function happens
    // This function will adjust the image height according to window size.
    function init(){
        mainImage = document.getElementById("mainimg")
        arrowLeft = document.getElementById("left-arrow");
        arrowRight = document.getElementById("right-arrow");
    
        // generate a thumbs class === smaller images
        // document.getElementsByClassName("thumbs")[0].style.opacity ="1";
        document.getElementById(1).style.opacity = "1";
        document.getElementById(2).style.opacity = "0.5";
        document.getElementById(3).style.opacity = "0.5";
        document.getElementById(4).style.opacity = "0.5";
        document.getElementById(5).style.opacity = "0.5";
        document.getElementById(6).style.opacity = "0.5";
    }

    //----- MAIN IMAGE SLIDE SHOW -----//

    // Function ----> step for next image ----//
    function newPic(){
        // if the current image is not the last one (ie 5), then move it to the next one
        if (current<6)	{
            current = current + 1;  
        } else {
            current = 1;
        }
        // the image src is then changed to the current value
        document.getElementById("mainimg").src = "images/mandalas/" + current + ".jpg";    
        changeThumbsForward();  
    }

    //While pressing arrow, change opacity of thumbs images
    function changeThumbsForward(){
    
        //document.getElementById(current).style.border = "2px solid red";
        document.getElementById(current).style.opacity = "1" ;
        
        if(current==1){
            //document.getElementById(5).style.border = "2px solid white";
            document.getElementById(5).style.opacity = "0.5" ;
        }
        else {
            //document.getElementById(current-1).style.border = "2px solid white";
            document.getElementById(current-1).style.opacity = "0.5" ;
        }
    }

    //While pressing arrow, change opacity of thumbs images
    function changeThumbsBackward(){

        //document.getElementById(current).style.border = "2px solid red";
        document.getElementById(current).style.opacity = "1" ;
        
        if(current==6){
        //	document.getElementById(1).style.border = "2px solid white";
            document.getElementById(1).style.opacity = "0.5" ;}
                
            else {
        //	document.getElementById(current+1).style.border = "2px solid white";
            document.getElementById(current+1).style.opacity = "0.5" ;
        }
    }

    //------ Right-arrow function -------//
    function nextPic(){
        if(current!=6){
            newPic();
            changeTitle();
        }
    }

    //------ Left-arrow function -------//
    function prevPic(){    
        if(current!=1){
            current = current - 1;
            changeThumbsBackward()	
            changeTitle();	
        }
    document.getElementById("mainimg").src = "images/mandalas/" + current + ".jpg";
    }

    // ---- Title + text Changes via current ----//
    function changeTitle(){
        // when pressing ARROWS change titles
        // depending of which string had been passed to the function (and placed in the picture variable),
        // the current variable is set to a certain number corresponding to the image number (ie 1.jpg)

        if (current == 1){
                
            document.getElementById('title').innerHTML = titles[0];	
            document.getElementById('text').innerHTML = texts[0];
            
            //console.log(titles[0]);
        } else if (current == 2){
        
            document.getElementById('title').innerHTML = titles[1];	
            document.getElementById('text').innerHTML = texts[1];
        } else if (current == 3){
                
            document.getElementById('title').innerHTML = titles[2];	
            document.getElementById('text').innerHTML = texts[2];
        } else if (current == 4){
                
            document.getElementById('title').innerHTML = titles[3];	
            document.getElementById('text').innerHTML = texts[3];
        } else if (current == 5){
                    
            document.getElementById('title').innerHTML = titles[4];
            document.getElementById('text').innerHTML = texts[4];	
        } else if (current == 6){
                
            document.getElementById('title').innerHTML = titles[5];	
            document.getElementById('text').innerHTML = texts[5];
            
        }
    }

    // ---- Thumbs navigation --> hoverover + onclick ---- //
    function changeImage(currentImg){



        
    }



