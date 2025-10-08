document.getElementById('lang-toggle').addEventListener('click', function() {
  // 获取当前路径
  var path = window.location.pathname;
  // 如果已经在中文页面，跳回英文页面
  if (path.startsWith('/zh/')) {
    window.location.pathname = path.replace(/^\/zh\//, '/');
  } else {
    // 跳转到对应的中文页面
    window.location.pathname = '/zh' + path;
  }
});
