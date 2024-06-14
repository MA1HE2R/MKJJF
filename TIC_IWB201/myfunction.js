fetch('Launch.json')
.then(res=>res.json())   
.then(data=>{

    handeldata(data);
})
function handeldata(Apartments)
{
const Apartment = document.getElementById("Apartments");
Apartments.forEach(TheApartment => {
    let Apartment1=creatcolumn(TheApartment)
    let ApartmentDetails=AddDetails(TheApartment);
    Apartment.appendChild(Apartment1)
    Apartment.appendChild(ApartmentDetails)

});



}
var div = document.getElementById('main');
var display = 1;
function hideshow() {
if(display == 1){
    div.style.display = 'block';
    display = 1;
}
else{
    div.style.display = 'none';
    display = 1;
}
}

function creatcolumn(TheApartment)
{
const column=document.createElement("tr")
for (let k = 0; k < 5; k++) {
    const box=document.createElement("td")
    column.appendChild(box)
}


column.children[0].textContent =` ${TheApartment.City}`;



column.children[1].textContent =` ${TheApartment.Details}`;



column.children[2].textContent =` ${TheApartment.MonthlyRent}`;

const check=document.createElement("input");
check.setAttribute("type","checkbox")
check.onclick=function(){
    check.parentElement.parentElement.nextElementSibling.classList.toggle("hid");

}
column.children[3].appendChild(check);


const radio=document.createElement("input");
radio.setAttribute("type","radio")
column.children[4].appendChild(radio);




return column


}
//-------------------------------------------------
function AddDetails(TheApartment){

    const column = document.createElement("tr");

    column.classList.add("hid")

    column.innerHTML=`
    <td colspan="5">
        <div class="B">
            <ul class="C">
                <li> المنطقة: ${TheApartment.Area} </li>
                <li> متوفر كراج : ${TheApartment.Garage}</li>
                <li> الطابق : ${TheApartment.Floor}</li>
                <li> الملكية: ${TheApartment.Property}</li>
                <li> مساحة بلكون : ${TheApartment.BalconySquare} </li>
                <li> مفروشة : ${TheApartment.Furnished} </li>

            </ul>
            <div class="D">
                <img src="${TheApartment.Picture1}" alt="">
                <img src="${TheApartment.Picture2}" alt="">
                <img src="${TheApartment.Picture3}" alt="">
            </div>

        </div>
        
    </td>`
return column;

}
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");


let captchaText = null;


const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaText = changeString.join("   ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
};

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = "";
  captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
  
  submitButton.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) message.classList.remove("active");
};


const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
  message.classList.add("active");
  
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered captcha is correct";
    message.style.color = "#826afb";
  } else {
    message.innerText = "Entered captcha is not correct";
    message.style.color = "#FF2525";
  }
};


refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);


generateCaptcha();