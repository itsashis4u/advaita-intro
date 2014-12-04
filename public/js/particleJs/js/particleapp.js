/* default dom id (particles-js) */
//particlesJS();
//require('particles.js');
/* config dom id */
//particlesJS('dom-id');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-57358904-1', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');

document.body.style.width= document.body.clientWidth;
document.body.style.height= document.body.clientHeight;
document.body.style.background= "#070716";
//document.body.style.backgroundImage= "url('back.png')";
var canv = document.getElementsByTagName('canvas');
canv.display= "block";
canv.verticalAlign = "bottom";
//canv.style.position = "fixed";
var x = document.createElement('div');
document.body.appendChild(x).id= "particles-js";
//x.style.zIndex = -100;
x.style.position = "fixed";
x.style.width = "100%";
x.style.height = "100%";

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
    particles: {
        color: '#1ca8c3',
        shape: 'circle',
        opacity: 1,
        size: 2.5,
        size_random: true,
        nb: 300,
        line_linked: {
            enable_auto: false,
            distance: 250,
            color: '#1ca8c3',
            opacity: 0.5,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: false,
        mouse: {
            distance: 150            
        },
        mode: 'grab'
    },
    retina_detect: true
});