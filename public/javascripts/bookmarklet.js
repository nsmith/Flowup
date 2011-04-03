(function(){
  var styleId='ujs_display_div_order';
  var className='ujs_display_div_order_details';
  function addStyle() {
    var s=document.getElementById(styleId);
    if (s) {
      clean();
      s.parentNode.removeChild(s);
      return false;
    }
    var s=document.createElement('style');
    s.id=styleId; s.setAttribute('type', 'text/css');
    s.setAttribute('style', 'display:none!important;');
    s.appendChild(document.createTextNode('span.'+ className + ' {color: #000 !important; background: #ffff99 !important; border: 1px solid #ffcc66 !important; display: inline-block !important; font-family: sans-serif !important; font-size: 10px !important; font-style: normal !important; font-variant: normal !important; font-weight: normal !important; letter-spacing: 0 !important; margin: 0 1px 0 0 !important; padding: 1px !important; text-align: left !important; text-decoration: none !important; text-transform: none !important; z-index: 1 !important; opacity: 0.9 !important;} embed {outline: 1px solid #ff0000 !important;}'));
    document.documentElement.appendChild(s);
    return true;
  }
  function clean() {
    var s=document.selectNodes('//span[@class=\'' + className + '\']');
    for (var i=0; i<s.length; i++) {
      s[i].parentNode.removeChild(s[i]);
    }
  }
  function display() {
    if(!addStyle()) {
      return;
    }
    var d=document.getElementsByTagName('embed');
    for(var i=0; i<d.length; i++) { 
      var theVideo = d[i];
      theVideo.onclick = function(evt) {
        var req = new XMLHttpRequest();
        var post_data = "";
        post_data += ("embed_code" + escape(evt.target.parentNode.innerHTML));
        req.open("POST", 'http://localhost:3000/videos/', true);
        req.send(post_data);
        return true; 
      } 
    }
  }
  display();
})();

