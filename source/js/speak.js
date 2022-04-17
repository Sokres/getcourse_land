function initTab(elem){
  document.addEventListener('click', function (e) {
      if (!e.target.matches(elem+' .price-sc__btn')) return;
      else{
          if(!e.target.classList.contains('--active')){
              findActiveElementAndRemoveIt(elem+' .price-sc__btn');
              findActiveElementAndRemoveIt(elem+' .price-sc__wrap');
              e.target.classList.add('--active');
              setTimeout(function(){
                  var panel = document.querySelectorAll(elem+' .price-sc__wrap.'+e.target.dataset.name);
                  Array.prototype.forEach.call(panel, function (el) {
                      el.classList.add('--active');
                  });
              }, 200);
          }
      }
  });
}

function findActiveElementAndRemoveIt(elem){
  var elementList = document.querySelectorAll(elem);
  Array.prototype.forEach.call(elementList, function (e) {
      e.classList.remove('--active');
  });
}

initTab('.price-sc--1');
initTab('.price-sc--2');
initTab('.price-sc--3');
