// Service Worker
/*
self.addEventListener('install', (e) => {
    
    let installPromise = new Promise((resolve) => {

        setTimeout(resolve, 3000);
    });
    console.log("SW: Install Event");
    e.waitUntil(installPromise)
});

self.addEventListener('activate', (e) => {
    let activatePromise = new Promise((resolve) => {

        setTimeout(resolve, 3000);
        console.log("SW: Activate Event");
    });
    e.waitUntil(activatePromise)
});
*/
self.addEventListener('fetch', (e) => {
    if(e.request.url.endsWith('/test')){
        
        let customRes = new Response("TEST")
        e.respondWith(customRes);
    }
});