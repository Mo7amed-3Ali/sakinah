const C='sakinah-v5',A=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C&&x!='sakinah-audio').map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
if(u.hostname=='everyayah.com'){e.respondWith((async()=>{const c=await caches.open('sakinah-audio'),r=await c.match(u.href);if(!r)return fetch(e.request);const rg=e.request.headers.get('range');if(!rg||r.type=='opaque')return r;const b=await r.blob(),m=/bytes=(\d+)-(\d*)/.exec(rg);if(!m)return r;const a=+m[1],z=m[2]?Math.min(+m[2],b.size-1):b.size-1;return new Response(b.slice(a,z+1),{status:206,headers:{'Content-Type':r.headers.get('Content-Type')||'audio/mpeg','Content-Range':'bytes '+a+'-'+z+'/'+b.size}})})());return}
if(e.request.method!='GET'||(u.hostname!=location.hostname&&!u.hostname.includes('fonts.g')))return;
if(u.pathname.endsWith('config.json')){e.respondWith(fetch(e.request).catch(()=>caches.match('config.json')));return}
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok||n.type=='opaque'){const c=n.clone();caches.open(C).then(x=>x.put(e.request,c))}return n}).catch(()=>caches.match('index.html'))))});
