'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  function clearClass(items, clearClass) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(clearClass);
    }
  }
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  var burgerDefault = document.querySelector('.burger-toggle');
  var headerMenu = document.querySelector('.header--menu');
  var headerMenuLi = headerMenu.querySelectorAll('li');
  headerMenuLi.forEach(function (item) {
    if (item.querySelector('.menu--sub')) {
      item.classList.add('menu--item_children');
      var btnToggle = document.createElement('button');
      btnToggle.classList.add('item--toggle_popup');
      item.appendChild(btnToggle);
      btnToggle.addEventListener('click', function (e) {
        e.preventDefault();
        clearClass(btnToggle, 'active');
        clearClass(headerMenuLi, 'menu--item_children--open');
        btnToggle.classList.toggle('active');
        if (btnToggle.classList.contains('active')) {
          item.classList.add('menu--item_children--open');
          item.classList.add('active');
        } else {
          item.classList.remove('menu--item_children--open');
          item.classList.remove('active');
        }
      });
    }
  });
  burgerDefault.addEventListener('click', function (e) {
    e.preventDefault();
    burgerDefault.classList.toggle('active');
    if (burgerDefault.classList.contains('active')) {
      headerMenu.classList.add('active');
      body.style.cssText += 'overflow: hidden; position: fixed; width: 100%;';
      headerMenu.style.cssText += "max-width: ".concat(body.clientWidth, "px;");
    } else {
      headerMenu.classList.remove('active');
      body.style.cssText += 'overflow: visible; position: static;';
    }
  });
});
//# sourceMappingURL=app.js.map
