if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/js/sw/index.js')
           .then(function() { console.log("Service Worker Registered"); });
}