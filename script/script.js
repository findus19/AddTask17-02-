'use strict'

let tank = document.querySelector('.tank'),
    human = document.querySelector('.human'),
    reset = document.querySelector('.reset'),
    letsGo = document.querySelector('.letsGo'),
    count = 0;
let flyInterval;    

let flyAnimate = function(){
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  human.style.top = count + 'px';
  human.style.left = count + 120 + 'px';
  tank.style.left = count * 3.8 + 'px';
  if(count > 410){
    cancelAnimationFrame(flyInterval);
  }
}

let animate = true;
reset.addEventListener('click', function(){
  tank.style.top =  130 + 'px';
  tank.style.left = 100 + 'px';
  human.style.top =  0 + '0px';
  human.style.left = 0 + '0px';
  count = 0;
  cancelAnimationFrame(flyInterval);
  
});

letsGo.addEventListener('click',function(){
  if(animate){
    requestAnimationFrame(flyAnimate);
    animate = false;
  }else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  }
});