module.exports = function(src) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.async = true;
  (document.head || document.body).appendChild(script);
};
