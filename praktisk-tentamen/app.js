let timezones = '';
let newDate;
let landArray = [];
let landString = {};


function Land(){
    this.name = name;
    this.flag = url;
    this.time = timezones;
}

let url = '';
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

    let val = section[i];
    let valImg = img[i];
    let valh1 = h1[i];

    valh1.innerHTML = nameValue;
    valImg.src = flag;

    let newCountry = new Land(timeValue)
    newCountry.timeCal(timeValue, [i])
}
}

Land.prototype.timeCal = function(timeValue, [i]) {
    console.log(timeValue)
    console.log([i])
    let div = new Land();
    div.time = timeValue;
    let valh3 = h3[i];

    let time1 = timeValue
    let time2 = time1.substring(3)
    let time3 = parseFloat(time2);
    time3 = time3 || 0

    dateNow = new Date();
    localTime = dateNow.getTime();
    localOffset = dateNow.getTimezoneOffset() * 60000;
    utc = localTime + localOffset;
    offset = time3;
    timethere = utc + (3600000*offset);
    newDate = new Date(timethere);
    div.tid = newDate

    valh3.innerHTML = timeValue + '<br>' + '<br>' + 'Tiden här är: ' + newDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}