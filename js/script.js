// based on http://particleslider.com/

var init = function(){

  var ps = new ParticleSlider({
    ptlGap: 1,
    ptlSize: 2,
    width: 1e9,
    height: 1e9,
    mouseForce: 400 ,
    monochrome: true ,
    color: '#f8f8ff'
  });

  // Get desired width
// ps.getCw();
// Override default behavior with mehtod that
// sets desired width to size of specific html element
ps.getCw = function(){return window.innerWidth};
}



var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://particleslider.com/js/particleslider/current/particleslider.js';
    psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}

(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);

var menu =  document.querySelector('#menu');
var box =  document.querySelector('#main');
var toplabel =  document.querySelector('#toplabel');
var boxPosition = box.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= boxPosition*0.25) {
        menu.style.top = '0px';
        menu.style.backgroundColor='#222222';
        toplabel.style.top = '-200px';
    } else {
        menu.style.top = 'calc(100% - 100px)';
        menu.style.bottom = '';
        menu.style.backgroundColor='transparent';
        toplabel.style.top = '0px';
    }
});
