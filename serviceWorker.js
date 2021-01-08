const site_name = "ProjetFinal";
const assets = ["/index.html", "/css.css", "/js.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(site_name).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});

