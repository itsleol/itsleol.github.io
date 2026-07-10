(function() {
  var toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function() {
    var path = window.location.pathname;

    if (path.startsWith('/zh/')) {
      window.location.pathname = path.replace(/^\/zh\//, '/');
    } else {
      window.location.pathname = '/zh' + path;
    }
  });
})();
