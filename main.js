var dog=0;
var cat=0;
var goat=0;
var lion=0;
function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TtQW0LWTW/model.json',modelready);
    
}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error,results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        random_Number_r=Math.floor(Math.random()*255)+1;
        random_Number_g=Math.floor(Math.random()*255)+1;
        random_Number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("detected").innerHTML="Detected dog-"+dog+"Detected cat-"+cat+"Detected lion-"+lion+"Detected goat-"+goat;
        document.getElementById("animalvoices").innerHTML="Detected voice is of-"+results[0].label;
        document.getElementById("detected").style.color="rgb("+random_Number_r+","+random_Number_g+","+random_Number_b+")";
        document.getElementById("animalvoices").style.color="rgb("+random_Number_r+","+random_Number_g+","+random_Number_b+")";
        img=document.getElementById("ear");
        

        if(results[0].label=="barking"){
            img.src="dog.png";
            dog=dog+1;

        }
        else if(results[0].label=="meowing"){
            img.src="cat.png";
            cat=cat+1;

        }
        else if(results[0].label=="roar"){
            img.src="lion.png";
            lion=lion+1;

        }
        else{
            img.src="goat.png";
            goat=goat+1;
        }
            

        }
            

        
    }

