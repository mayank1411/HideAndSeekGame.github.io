var address = ["A0","A1","A2","A3",
"B0","B1","B2","B3",
"C0","C1","C2","C3",
"D0","D1","D2","D3"];
let WON = false;
var rating;
var iDanger = Math.floor(Math.random()*address.length) // random index of danger
var addDanger = address[iDanger];
console.log(addDanger);
address.splice(iDanger,1); // remove the danger address
console.log(address);
var chances = 0;
var giftAddress = [];
var numGift = 3;


function checkGift(numGift){
    if(numGift == 0){
        WON = true;
        rating = Math.round((3/chances) * 5); // calculates rating (1-5)
     setTimeout(getResult,1000);
    }
 }



for(var i =0; i<3; i++){
    var iGift = Math.floor(Math.random()*address.length);
    giftAddress[i] = address[iGift];
    console.log(giftAddress);
    address.splice(iGift,1); // remove the gifts address
}
console.log(giftAddress);
console.log(address);



var getCard = () => {
    var guessCell = document.getElementById("idGuess");
    console.log(guessCell);
    if(guessCell.value == addDanger){
    var dangerCard = document
    .getElementById(addDanger)
      .querySelector('.DANGER')
     console.log(dangerCard);
    dangerCard.style.opacity = "0.99";
    guessCell.value = "";
    setTimeout(getResult,1000) ;
 }
 for(var i=0; i<3; i++){
    if(guessCell.value == giftAddress[i]){
        var giftCard = document.getElementById(giftAddress[i]).querySelector(".GIFT");
            // console.log(giftCard);
            giftCard.style.opacity = "0.99";
            guessCell.value = "";
            numGift--;
            chances++;
            checkGift(numGift);
            break;
    }
 }
 for(var i=0; i<12; i++){
    if(guessCell.value == address[i]){
        var missCard = document.getElementById(address[i]).querySelector(".MISS");
            // console.log(missCard);
            missCard.style.opacity = "0.99";
            guessCell.value = "";
            chances++;
            break;
 }
}
}
// MODAL RESULT
function getResult(){
    if(WON == false){
        document.getElementById("result").innerHTML = "YOU LOSE!!!!!!!"
    }
    else{
        document.getElementById("result").innerHTML = "YOU WON!!!!!!!";
        for(var z=1; z<=rating; z++){
            var s = document.getElementById(z).querySelector(".Star");
        s.style.opacity = "0.99";
        }
        
           
        
        
    }
     // Get the modal
document.getElementById("myModal").style.display = "block";

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
    location.reload();
}
    }





