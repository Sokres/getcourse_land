(function(){

  // Get the navigation element
  var navBar = document.querySelector('.three-day')
  var offset = navBar.offsetTop

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


