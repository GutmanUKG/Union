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
});
//# sourceMappingURL=app.js.map
