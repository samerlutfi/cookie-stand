'use strict';
let allStands = [];
let times = ['08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'];

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

  allStands.push(this);
}
Stands.prototype.getingRandomCustomer = function () {
  for (let i = 0; i < times.length; i++) {
    let value = randomCustomer(this.minCus, this.maxCus);
    this.randomCustomerNumbers.push(value);
    this.cookiesNumber.push(this.randomCustomerNumbers[i] * this.Avg);
  }

};
Stands.prototype.render = function () {
  let divEl = document.getElementById('seattle_shop');
  let artcleEl = document.createElement('article');
  divEl.appendChild(artcleEl);

  let h1El = document.createElement('h1');
  artcleEl.appendChild(h1El);
  h1El.textContent = this.name;

  let ulEl = document.createElement('ul');
  let totalCookies = 0;
  for (let i = 0; i < this.cookiesNumber.length; i++) {
    totalCookies += parseInt(this.cookiesNumber[i]);
    let liEl = document.createElement('li');
    liEl.textContent = `${times[i]}:${parseInt(this.cookiesNumber[i])} cookies`;
    ulEl.appendChild(liEl);
  }
  let liEl = document.createElement('li');
  liEl.textContent = `Total:${totalCookies} cookies`;
  ulEl.appendChild(liEl);
  artcleEl.appendChild(ulEl);
};


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


