'use strict'
let tank = document.querySelector('.tank'),
    human = document.querySelector('.human'),
    count = 0;
let humanRan = function(){
  count++;
  human.style.top = count + 'px';
  human.style.left = count + 'px';
  tank.style.left = count + 'px';
  console.log(count);
  if(count < 700){
    setTimeout(humanRan, 10);
  }
}

humanRan();