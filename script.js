const dateOfBirth = document.querySelector("#date-of-birth")

const luckyNumber = document.querySelector("#lucky-number")

const checkNumber = document.querySelector("#check-number")

const outPutBox = document.querySelector("#output-box")



function comapreValues(sum, luckyNumber) {
  // console.log(sum,luckyNumber)
  if (sum % luckyNumber == 0) {
    outPutBox.innerText="your birthdate is lucky🤩"
  } else {
    outPutBox.innerText="its not lucky😶"
  }
}


function checkBirthDateIslucky() {
  const dob = dateOfBirth.value  //dob=date of birth ki value
  const sum = calculateSum(dob)   // then apn ne calculate sum kia hai we used a func and stored in sum varaible
  // console.log(sum)

  if(sum && dob){
    comapreValues(sum, luckyNumber.value)
  }
  else{
    outPutBox.innerText="Enter both the values🙄"
  }
  

}



function calculateSum(dob) {
  dob = dob.replaceAll("-", "")  //replaceAll function in which "2022-09-15" changed into 20220915 -----> replaceAll("2","Vatty boii")  so instead of 2 it will come Vatty boii
  let sum = 0;   //starting mein sum=0 kr diaa theek haii badiya hai
  for (let i = 0; i < dob.length; i++) {    //for loop use kia traverse krne ke liye number ko 20220915
    sum = sum + Number(dob.charAt(i))  //typecasting the string to number we used Number keyword
    //charAt ==>eg- charAt(1) -->dob ki 1st index pe value   ~ charAt(i)  ki dob mein i++ hoga then uski values ka sum  
  }
  return sum;
}

checkNumber.addEventListener("click", checkBirthDateIslucky)
