'use strict';
let allStands = [];
let times = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let container = document.getElementById('seattle_shop');
let tableEl = document.createElement('table');
container.appendChild(tableEl);


function randomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Stands(name, minCus, maxCus, Avg) {
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.Avg = Avg;
  this.randomCustomerNumbers = [];
  this.cookiesNumber = [];
  this.totalCookies=0;

  allStands.push(this);
}
Stands.prototype.getingRandomCustomer = function () {
  for (let i = 0; i < times.length; i++) {
    let value = randomCustomer(this.minCus, this.maxCus);
    this.randomCustomerNumbers.push(value);
    this.cookiesNumber.push(parseInt(this.randomCustomerNumbers[i] * this.Avg));
  }

};
Stands.prototype.render = function () {
  let trEl=document.createElement('tr');
  let tdEl=document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent=this.name;
  for (let i = 0; i < times.length; i++) {
    this.totalCookies+=this.cookiesNumber[i];
    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=this.cookiesNumber[i];
    tableEl.appendChild(trEl);
  }
  let tdEl1=document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent=this.totalCookies;

};

function createtableHeader() {
  let trEl=document.createElement('tr');
  let thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='shop';
  tableEl.appendChild(trEl);
  for (let i = 0; i < times.length; i++) {
    let thEl=document.createElement('th');
    thEl.textContent=times[i];
    trEl.appendChild(thEl);

  }
  let thEl1=document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent='Daily Location Total';
}

function createFooter(){
  let tfootEl = document.createElement('tfoot');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  tfootEl.appendChild(tdEl);
  tableEl.appendChild(tfootEl);
  let allTotal = 0;
  for (let h = 0; h < times.length; h++) {
    let tdEl = document.createElement('td');
    let sum = 0;

    for (let s = 0; s < allStands.length; s++) {

      sum = sum + allStands[s].cookiesNumber[h];
    }
    allTotal += sum;
    tdEl.textContent = sum;
    tfootEl.appendChild(tdEl);
  }
  let totalTdEl = document.createElement('td');
  totalTdEl.textContent = allTotal;
  tfootEl.appendChild(totalTdEl);
}




createtableHeader();


let seattle = new Stands('seattle', 23, 65, 6.3);
seattle.getingRandomCustomer();
seattle.render();

let tokyo = new Stands('tokyo', 3, 24, 1.2);
tokyo.getingRandomCustomer();
tokyo.render();

let Dubi = new Stands('Dubi', 11, 38, 3.7);
Dubi.getingRandomCustomer();
Dubi.render();

let Paris = new Stands('Paris', 20, 38, 2.3);
Paris.getingRandomCustomer();
Paris.render();

let Lima = new Stands('Lima', 2, 16, 4.6);
Lima.getingRandomCustomer();
Lima.render();
createFooter();

let myForm=document.getElementById('myForm');
myForm.addEventListener('submit', addBran);
function addBran(event){
  event.preventDefault();
  console.log('hello');
  let name=event.target.branchname.value;
  let minCus=event.target.numberofminimumCus.value;
  let maxi=event.target.numberofmaximumCus.value;
  let Avg=event.target.numberofAverage.value;
  let newbranchh= new Stands(name,minCus,maxi,Avg);
  console.log(newbranchh);
  newbranchh.getingRandomCustomer();
  newbranchh.render();

}









// let seattle = {

//   name: 'seattle',
//   times: ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   minCus: 23,
//   maxCus: 65,
//   Avg: 6.3,
//   randomCustomerNumbers: [],
//   cookiesNumber: [],

//   getingRandomCustomer: function () {
//     for (let i = 0; i < this.times.length; i++) {
//       let value = randomCustomer(this.minCus, this.maxCus);
//       this.randomCustomerNumbers.push(value);
//       this.cookiesNumber.push(value * this.Avg);
//     }
//   },
//   render: function () {
//     let divEl = document.getElementById('seattle shop');
//     let artcleEl = document.createElement('article');
//     divEl.appendChild(artcleEl);

//     let h1El = document.createElement('h1');
//     artcleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     let ulEl = document.createElement('ul');
//     let totalCookies = 0;
//     for (let i = 0; i < this.cookiesNumber.length; i++) {
//       totalCookies += parseInt(this.cookiesNumber[i]);
//       let liEl = document.createElement('li');
//       liEl.textContent = `${this.times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = `Total:${totalCookies} cookies`;
//     ulEl.appendChild(liEl);
//     artcleEl.appendChild(ulEl);
//   }
// };
// seattle.getingRandomCustomer();
// seattle.render();

// function randomCustomer(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// let tokyo = {

//   name: 'tokyo',
//   times: ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   minCus: 3,
//   maxCus: 24,
//   Avg: 1.2,
//   randomCustomerNumbers: [],
//   cookiesNumber: [],

//   getingRandomCustomer: function () {
//     for (let i = 0; i < this.times.length; i++) {
//       let value = randomCustomer(this.minCus, this.maxCus);
//       this.randomCustomerNumbers.push(value);
//       this.cookiesNumber.push(value * this.Avg);
//     }
//   },
//   render: function () {
//     let divEl = document.getElementById('seattle shop');
//     let artcleEl = document.createElement('article');
//     divEl.appendChild(artcleEl);

//     let h1El = document.createElement('h1');
//     artcleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     let ulEl = document.createElement('ul');
//     let totalCookies = 0;
//     for (let i = 0; i < this.cookiesNumber.length; i++) {
//       totalCookies += parseInt(this.cookiesNumber[i]);
//       let liEl = document.createElement('li');
//       liEl.textContent = `${this.times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = `Total:${totalCookies} cookies`;
//     ulEl.appendChild(liEl);
//     artcleEl.appendChild(ulEl);
//   }
// };
// tokyo.getingRandomCustomer();
// tokyo.render();

// let Dubi = {

//   name: 'Dubi',
//   times: ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   minCus: 11,
//   maxCus: 38,
//   Avg: 3.7,
//   randomCustomerNumbers: [],
//   cookiesNumber: [],

//   getingRandomCustomer: function () {
//     for (let i = 0; i < this.times.length; i++) {
//       let value = randomCustomer(this.minCus, this.maxCus);
//       this.randomCustomerNumbers.push(value);
//       this.cookiesNumber.push(value * this.Avg);
//     }
//   },
//   render: function () {
//     let divEl = document.getElementById('seattle shop');
//     let artcleEl = document.createElement('article');
//     divEl.appendChild(artcleEl);

//     let h1El = document.createElement('h1');
//     artcleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     let ulEl = document.createElement('ul');
//     let totalCookies = 0;
//     for (let i = 0; i < this.cookiesNumber.length; i++) {
//       totalCookies += parseInt(this.cookiesNumber[i]);
//       let liEl = document.createElement('li');
//       liEl.textContent = `${this.times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = `Total:${totalCookies} cookies`;
//     ulEl.appendChild(liEl);
//     artcleEl.appendChild(ulEl);
//   }
// };
// Dubi.getingRandomCustomer();
// Dubi.render();

// let paris = {

//   name: 'paris',
//   times: ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   minCus: 20,
//   maxCus: 38,
//   Avg: 2.3,
//   randomCustomerNumbers: [],
//   cookiesNumber: [],

//   getingRandomCustomer: function () {
//     for (let i = 0; i < this.times.length; i++) {
//       let value = randomCustomer(this.minCus, this.maxCus);
//       this.randomCustomerNumbers.push(value);
//       this.cookiesNumber.push(value * this.Avg);
//     }
//   },
//   render: function () {
//     let divEl = document.getElementById('seattle shop');
//     let artcleEl = document.createElement('article');
//     divEl.appendChild(artcleEl);

//     let h1El = document.createElement('h1');
//     artcleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     let ulEl = document.createElement('ul');
//     let totalCookies = 0;
//     for (let i = 0; i < this.cookiesNumber.length; i++) {
//       totalCookies += parseInt(this.cookiesNumber[i]);
//       let liEl = document.createElement('li');
//       liEl.textContent = `${this.times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = `Total:${totalCookies} cookies`;
//     ulEl.appendChild(liEl);
//     artcleEl.appendChild(ulEl);
//   }
// };
// paris.getingRandomCustomer();
// paris.render();

// let Lima = {

//   name: 'lima',
//   times: ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   minCus: 2,
//   maxCus: 16,
//   Avg: 4.6,
//   randomCustomerNumbers: [],
//   cookiesNumber: [],

//   getingRandomCustomer: function () {
//     for (let i = 0; i < this.times.length; i++) {
//       let value = randomCustomer(this.minCus, this.maxCus);
//       this.randomCustomerNumbers.push(value);
//       this.cookiesNumber.push(value * this.Avg);
//     }
//   },
//   render: function () {
//     let divEl = document.getElementById('seattle shop');
//     let artcleEl = document.createElement('article');
//     divEl.appendChild(artcleEl);

//     let h1El = document.createElement('h1');
//     artcleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     let ulEl = document.createElement('ul');
//     let totalCookies = 0;
//     for (let i = 0; i < this.cookiesNumber.length; i++) {
//       totalCookies += parseInt(this.cookiesNumber[i]);
//       let liEl = document.createElement('li');
//       liEl.textContent = `${this.times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = `Total:${totalCookies} cookies`;
//     ulEl.appendChild(liEl);
//     artcleEl.appendChild(ulEl);
//   }
// };
// Lima.getingRandomCustomer();
// Lima.render();


