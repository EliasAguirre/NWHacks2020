// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

// window.addEventListener('load', function load(event){
  var createButton = document.getElementById('create_button');
  createButton.addEventListener('click', function() { helloworld(); });

  function helloworld(){
    alert("hi")
  }
// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    var domInfo = {
      arr: document.querySelector('ul.productList').querySelectorAll('.productInfo').map((node)=>node.textContent.trim())
    };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }
});
