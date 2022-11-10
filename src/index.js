"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let artworklist = [];
let title = document.getElementById('title');
let year = document.getElementById('year');
let price = document.getElementById('price');
let height = document.getElementById('height');
let errorarea = document.getElementById('error');
const cname = new RegExp(/[a-zA-Z]{1,}/);
const currentYear = new Date().getFullYear();
const cprice = 1;
const cheight = 20;
function titlecheck(title) {
    if (title.length > 0 && cname.test(title)) {
        return true;
    }
    return false;
}
function yearcheck(year) {
    if (year < currentYear) {
        return true;
    }
    return false;
}
function pricecheck(price) {
    if (price >= cprice) {
        return true;
    }
    return false;
}
function heightcheck(height) {
    if (height >= cheight) {
        return true;
    }
    return false;
}
function checkAll() {
    errorarea.textContent = "";
    if (titlecheck(title.value) && yearcheck(parseInt(year.value)) && pricecheck(parseInt(price.value)) && heightcheck(parseInt(height.value))) {
        artworklist.push(new Statue_1.Statue(title.value, parseInt(year.value), parseInt(price.value), parseInt(height.value)));
    }
    else {
        errorarea.textContent = "";
        if ()
            ;
    }
}
