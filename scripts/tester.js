let holder=document.getElementById('job-container');


let temp=holder.children[0];
let watch=temp.querySelector('.company-name');
let badge=temp.querySelector('.job-badge');
console.log(watch.outerText);
console.log(badge);
console.log(badge.outerText);
badge.innerText="Applied"


