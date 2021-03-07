
var hiddenNow = true;
function openModal() {

    if(hiddenNow){
        document.getElementById("mainPage").style.display = "none";
        // document.getElementById("exploreModal").style.transform= "rotateY(180deg)";
        document.getElementById("exploreModal").style.display = "block";
    }else{
        document.getElementById("mainPage").style.display = "block";
        // document.getElementById("exploreModal").style.transform= "rotateY(180deg)";

        document.getElementById("exploreModal").style.display = "none";

    }
        console.log("hi", hiddenNow);

    //  document.getElementById("exampleModal").modal('toggle')
    hiddenNow = !hiddenNow;

}
