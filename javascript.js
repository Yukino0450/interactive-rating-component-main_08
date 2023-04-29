let lastNumber = 0; //which nember have we clicked(今は0)

function changedColor(clickedNumber) {
  //made function called changedColor
  if (lastNumber > 0) {
    // if we have clicked on something before
    const lastClicked = document.getElementById("number" + lastNumber); //find lastnumber we clicked
    lastClicked.classList.remove("clicked");//前回クリックされた要素を特定し、その要素から "clicked" クラスを削除することで、前回の色をリセットするコード。
  }
  const Element = document.getElementById("number" + clickedNumber); //find which number we clicked
  Element.classList.add("clicked"); //add clicked class to the Element
  lastNumber = clickedNumber; //remenber what we clicked
}

function submit() {
  const firstPage = document.getElementById("first-page");
  firstPage.classList.add("hidden");

  const secondPage = document.getElementById("second-page");
  secondPage.classList.remove("hidden");

  const selectedRate = document.getElementById("selectedRate");
  selectedRate.innerHTML = `You selected ${lastNumber} out of 5`;
}

// ・three ways of making function
// function NameofFunction(parameters){
//  //code goes here
// }

// const NameofFunction = function (parameters){
//      //code goes here
// }

// const FunctionName = () => {
//     //code goes here
// }

// //wheen you need some variable into your string
// let string = "sentence" + variable + "sentence";
// let otherString = `This sentence has a ${variable} in it`;
