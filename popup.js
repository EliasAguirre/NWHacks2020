// Update the relevant fields with the new data.
const getDOMInfo = info => {
  console.log(info)
  //document.querySelector('ul.productList').querySelectorAll('.productInfo').map((node)=>node.textContent.trim())
};

// Once the DOM is ready...
document.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: 'DOMInfo' },
      // ...also specifying a callback to be called 
      //    from the receiving end (content script).
      getDOMInfo);
  });

  const sendButton = document.querySelector(".sendButton");
  sendButton.addEventListener("click", () => {
    alert("Data sent!")
  });
});
