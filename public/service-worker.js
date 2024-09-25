// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activado');
    // Permite que el Service Worker controle las páginas ya abiertas
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Aquí podrías agregar lógica de caché para funcionar offline
  });
  