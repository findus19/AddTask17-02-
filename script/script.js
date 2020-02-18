'use strict'
let tank = document.querySelector('.tank'),
    human = document.querySelector('.human'),
    reset = document.querySelector('.reset'),
    count = 0;
let flyInterval;    
let flyAnimate = function(){
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  human.style.top = count + 'px';
  human.style.left = count + 100 + 'px';
  tank.style.left = count*2 + 'px';
  if(count > 410){
    cancelAnimationFrame(flyInterval);
  }
}

let animate = false;
reset.addEventListener('click', function(){

  tank.style.top =  '130px';
  tank.style.left = '100px';
  human.style.top =  '0px';
  human.style.left = '0px';
  cancelAnimationFrame(flyInterval);
  flyAnimate();
});

document.addEventListener('click',function(){
  if(animate){
    requestAnimationFrame(flyAnimate);
    animate = false;
  }else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  }
});