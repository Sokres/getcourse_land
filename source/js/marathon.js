(function(){

// Get the navigation element
var navBar = document.querySelector('.three-day')
// var obj = navBar.getBoundingClientRect().top;
var offset = navBar.offsetTop - navBar.offsetTop;
var virtualElement = document.createElement('div')

var stick = function () {

    var scroll = window.scrollY;

    var isSticked = navBar.classList.contains('three-day--stik')


    if ( scroll >= offset && !isSticked) {

      navBar.classList.add('three-day--stik')

    } else if(scroll <= offset && isSticked){
      navBar.classList.remove('three-day--stik')

        var formerFirstChild = navBar.removeChild(virtualElement);
    }
}

  // listen to the scroll
  window.addEventListener('scroll', stick)
})();




/* кнопка связи в соц сетях */

(function(){
  let toggle = document.getElementById('nav-toggle')
  let content = document.getElementById('nav-content')

  let show = () => {
    toggle.setAttribute('aria-expanded', true)
    content.setAttribute('aria-hidden', false)
  }

  let hide = () => {
    toggle.setAttribute('aria-expanded', false)
    content.setAttribute('aria-hidden', true)
  }

  toggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  let handleClosure = event => !content.contains(event.target) && hide()

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
})();
console.log('hello');
(function(){
  let askToggle = document.getElementById('ask-toggle')
  let askContent = document.getElementById('ask-content')

  let show = () => {
    askToggle.setAttribute('aria-expanded', true)
    askContent.setAttribute('aria-hidden', false)
  }

  let hide = () => {
    askToggle.setAttribute('aria-expanded', false)
    askContent.setAttribute('aria-hidden', true)
  }

  askToggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(askToggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  let handleClosure = event => !askContent.contains(event.target) && hide()

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
})();
(function(){
  function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .accordion__btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('accordion__container--active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .accordion__container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('accordion__container--active');
                    });
                }
                e.target.parentElement.classList.add('accordion__container--active');
            }else{
                e.target.parentElement.classList.remove('accordion__container--active');
            }
        }
    });
}

initAcc('.accordion__box', true);
})();
console.log('hello');
// Оптимизация изображений Lazy loading


document.addEventListener("DOMContentLoaded", function(event) {
  var lazyImages =[].slice.call(
   document.querySelectorAll(".lazy > source")
  )

  if ("IntersectionObserver" in window && 'IntersectionObserverEntry' in window) {
     let lazyImageObserver =
      new IntersectionObserver(function(entries, observer) {
         entries.forEach(function(entry) {
          if (entry.isIntersecting) {
             let lazyImage = entry.target;
             lazyImage.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.classList.add('fade-in');
             lazyImage.parentElement.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
           }
        });
       });

     lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
     });
  } else {

    // Not supported, load all images immediately
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.classList.add('fade-in');
              lazyImage.parentElement.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
   }

 });
