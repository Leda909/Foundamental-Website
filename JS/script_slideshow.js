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
        //	document.getElementsByClassName("thumbs")[0].style.border ="2px solid red";
        document.getElementsByClassName("thumbs")[0].style.opacity ="1";
    }

