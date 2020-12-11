

let landArray = [];
let landString = {};

function Land(){
    this.name = name;
    this.flag = url;
    this.time = timezones;
}

// Prototype
// Date()
// Deklarera 
let url = '';
let timezones = '';
let section = document.querySelectorAll('section')
let img = document.querySelectorAll('img')
let h1 = document.querySelectorAll('h1')
let h3 = document.querySelectorAll('h3')

//fetch
fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;timezones')
.then(response => response.json())
.then(data => initialize(data))
.catch(error => console.log("Error:", error))

//Dela ut värden
function initialize(countriesData) {
for(i=0; i<3; i++){
    //Random
    const random = Math.floor(Math.random() * countriesData.length);
    data = countriesData[random];
    let div = new Land();
    let nameValue = data['name'];
    let flag = data['flag'];
    let timeValue = data['timezones'][0];

    div.name = nameValue;
    div.flag = flag;
    div.time = timeValue;


    Date(timeValue)
    const utcDate1 = new Date(Date.UTC(timeValue));
    let val = section[i];
    let valImg = img[i];
    let valh1 = h1[i];
    let valh3 = h3[i];

    valh1.innerHTML = nameValue;
    valImg.src = flag;
    valh3.innerHTML = timeValue;
    console.log(utcDate1);
}
}