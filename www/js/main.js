window.hoodie  = new Hoodie()

$( function() {
  
  var updatePreview = function() {
  };

  hoodie.account.on('signout signin', updatePreview)
})