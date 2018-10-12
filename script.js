// ========js======
function Project(name, description, challenges, takeAways, imgLink) {
    this.name = name;
    this.description = description;
    this.challenges = challenges;
    this.takeAways = takeAways;
    this.imgLink = imgLink;

}
var cocktailPage = new Project(
    'cocktail app',
    'We all get tired of the same old basic mix and some of us arent to saavy to know what to mix. app helps you out by taking what you already have in your fridge and gives you ideas on new drinks you can make using what you already have at home!',
    '1.Communication was crucial, learning how to talk code. 2.Code would often break after we pushed and made a pull request. 3.researching how to go about functions I was in charge of and browsing through the hundreds of methods.',
    '1.You cannot build a beautiful website without any thought out prototypes. 2. pay close attention to code when reviewing pull request and make sure not to delete anything important. 3.Be clear on who\'s doing what within your team'



);


Project.prototype.header = function () {
    //name
    var navHeader = document.getElementById('header');
    navHeader.innerHTML = this.name;
    //description ( can only hav div1appendchchildh2 when its at the bottom but i want it to be the first child of div1 )
    var section = document.getElementById('body');
    var div1 = document.createElement('div');
    var h2Description = document.createElement('h2');
    var pDescription = document.createElement('p');
    section.appendChild(div1);
    div1.appendChild(h2Description);
    div1.appendChild(pDescription);
    h2Description.innerHTML = "DESCRIPTIONS";
    pDescription.innerHTML = this.description;

    // challenges 
    var div2 = document.createElement('div');
    var h2Challenges = document.createElement('h2');
    var pChallenges = document.createElement('p');
    section.appendChild(div2);
    div2.appendChild(h2Challenges);
    div2.appendChild(pChallenges);
    h2Challenges.innerHTML = "CHALLENGES";
    pChallenges.innerHTML = this.challenges;

    // takeaways
    var div3 = document.createElement('div');
    var h2Takeaways = document.createElement('h2');
    var pTakeaways = document.createElement('p');
    section.appendChild(div3);
    div2.appendChild(h2Takeaways);
    div2.appendChild(pTakeaways);
    h2Takeaways.innerHTML = "TAKEAWAYS";
    pTakeaways.innerHTML = this.takeAways;

    //img
    

};

cocktailPage.header()



// var cocktailsPage = {
//     name: 'cocktail app',
//     description: 'We all get tired of the same old basic mix and some of us arent to saavy to know what to mix. app helps you out by taking what you already have in your fridge and gives you ideas on new drinks you can make using what you already have at home!',
//     takeAways: '1: worked in a group with two other people. 2.learned how to incorporate new methods such as .sort() and match()',
//     header: function(){
//         var navHeader = document.getElementById('header');
//         navHeader.innerHTML= this.name;
//     },
//     //create a dive with class or id from the key 
//     descriptionDiv: function(){
//         var section = document.getElementById('body');
//         var div1 = document.createElement('div');
//         section.appendChild(div1);
//         div1.innerHTML= this.description;

//     }


// }

// ========need a prototype function for each  key/value =====

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// console.log(cocktailsPage.description);

// cocktailsPage.header();
// cocktailsPage.descriptionDiv();





// ========

// var pioneer ={
//     minCust: 17,
//     maxCust: 88,
//     avgSale: 5.2,
//     totalCookies: 0,
//     openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

//     header: function(table){
//       var row = document.createElement("tr");
//       var heading = document.createElement("th");
//       heading.setAttribute("colspan", "2");
//       heading.innerText= "Pioneer place";
//       row.appendChild(heading);
//       table.appendChild(row);

//     },
//     tableHours: function(table){
//       for( i = 0; i < pioneer.openHours.length; i++){
//         var row = document.createElement("tr");
//         var hour = document.createElement("td");
//         table.appendChild(row);
//         hour.innerText= pioneer.openHours[i];
//         row.appendChild(hour);
//         //cookies per hour
//         var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale);
//         pioneer.totalCookies += cookiesPerHour;
//         var totalCookies = document.createElement("td");
//         totalCookies.innerText = cookiesPerHour;
//         row.appendChild(totalCookies);
//       }
//     },

// =========constructor with prototype======
// function Person(first, last, age, gender, interests) {

//     // property and method definitions

//   }

//   var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

//   Person.prototype.farewell = function() {
//     alert(this.name.first + ' has left the building. Bye for now!');
//   };

//   person1.farewell();

