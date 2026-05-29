const CACHE_NAME = 'pasneserpark-v4-20260529';

// Lijst van alle bestanden om te cachen
const urlsToCache = [
  '/',
  'index.html',
  // Audio bestanden
  'audio/absolutisht.mp3',
  'audio/autobus.mp3',
  'audio/avash_avash.mp3',
  'audio/breshke.mp3',
  'audio/bretkose.mp3',
  'audio/buf.mp3',
  'audio/bufo.mp3',
  'audio/buke.mp3',
  'audio/cfare.mp3',
  'audio/dallendyshe.mp3',
  'audio/dardhe.mp3',
  'audio/dele.mp3',
  'audio/dhie.mp3',
  'audio/dhjete.mp3',
  'audio/diell.mp3',
  'audio/djathe.mp3',
  'audio/domate.mp3',
  'audio/drejt.mp3',
  'audio/dy.mp3',
  'audio/dymbedhjete.mp3',
  'audio/dyzet.mp3',
  'audio/ere.mp3',
  'audio/faleminderit.mp3',
  'audio/flutur.mp3',
  'audio/fushe.mp3',
  'audio/furgon.mp3',
  'audio/gezuar.mp3',
  'audio/gjashte.mp3',
  'audio/gjashtedhjete.mp3',
  'audio/gjashtembedhjete.mp3',
  'audio/gjalp.mp3',
  'audio/gomar.mp3',
  'audio/gur.mp3',
  'audio/hardhuce.mp3',
  'audio/hene.mp3',
  'audio/jam_me_stomakun.mp3',
  'audio/jo.mp3',
  'audio/jo_jo_jo.mp3',
  'audio/ju_lutem.mp3',
  'audio/ju_lutem_jo_raki.mp3',
  'audio/kafe.mp3',
  'audio/kafe_ekspres.mp3',
  'audio/kafe_ftohte.mp3',
  'audio/kafe_me_qumesht.mp3',
  'audio/kafe_turke.mp3',
  'audio/kale.mp3',
  'audio/kamion.mp3',
  'audio/kapucino.mp3',
  'audio/karkalec.mp3',
  'audio/karrote.mp3',
  'audio/kastraveca.mp3',
  'audio/kater.mp3',
  'audio/katermbedhjete.mp3',
  'audio/koder.mp3',
  'audio/ku.mp3',
  'audio/kur.mp3',
  'audio/laker.mp3',
  'audio/lakuriq_nates.mp3',
  'audio/lindja_e_diellit.mp3',
  'audio/limon.mp3',
  'audio/liqen.mp3',
  'audio/lope.mp3',
  'audio/lugine.mp3',
  'audio/lume.mp3',
  'audio/mace.mp3',
  'audio/majtas.mp3',
  'audio/makine.mp3',
  'audio/mal.mp3',
  'audio/me_falni.mp3',
  'audio/me_sheqer.mp3',
  'audio/mire.mp3',
  'audio/mire_faleminderit.mp3',
  'audio/mire_se_vini.mp3',
  'audio/mire_se_vini_ne_pasneserpark.mp3',
  'audio/miredita.mp3',
  'audio/mirembrema.mp3',
  'audio/miremengjes.mp3',
  'audio/mirupafshim.mp3',
  'audio/mish_derri.mp3',
  'audio/mish_dhie.mp3',
  'audio/mish_qengji.mp3',
  'audio/molle.mp3',
  'audio/motor.mp3',
  'audio/naten_e_mire.mp3',
  'audio/natyrisht.mp3',
  'audio/ndoshta.mp3',
  'audio/nente.mp3',
  'audio/nentedhjete.mp3',
  'audio/nentembedhjete.mp3',
  'audio/neser.mp3',
  'audio/nje.mp3',
  'audio/nje_kafe_ju_lutem.mp3',
  'audio/nje_moment.mp3',
  'audio/nje_raki.mp3',
  'audio/njembedhjete.mp3',
  'audio/njeqind.mp3',
  'audio/njezet.mp3',
  'audio/nuk_e_di.mp3',
  'audio/nuk_flas_shqip.mp3',
  'audio/nuk_kuptoj.mp3',
  'audio/pa_sheqer.mp3',
  'audio/pak_raki.mp3',
  'audio/papaqi.mp3',
  'audio/pasneser.mp3',
  'audio/patate.mp3',
  'audio/perendim_dielli.mp3',
  'audio/pershendetje.mp3',
  'audio/pese.mp3',
  'audio/pesedhjete.mp3',
  'audio/pesembedhjete.mp3',
  'audio/po.mp3',
  'audio/po_or_jo.mp3',
  'audio/po_po_po.mp3',
  'audio/portokall.mp3',
  'audio/prisni.mp3',
  'audio/pse.mp3',
  'audio/pule.mp3',
  'audio/pyll.mp3',
  'audio/qen.mp3',
  'audio/qepe.mp3',
  'audio/qofte.mp3',
  'audio/qukapik.mp3',
  'audio/raki.mp3',
  'audio/raki_mani.mp3',
  'audio/raki_rrushi.mp3',
  'audio/raki_thane.mp3',
  'audio/re.mp3',
  'audio/rose.mp3',
  'audio/shalqi.mp3',
  'audio/shi.mp3',
  'audio/shtate.mp3',
  'audio/shtatedhjete.mp3',
  'audio/shtatembedhjete.mp3',
  'audio/shume_mire.mp3',
  'audio/si.mp3',
  'audio/si_je.mp3',
  'audio/si_jeni.mp3',
  'audio/sigurisht.mp3',
  'audio/skifter.mp3',
  'audio/sorre.mp3',
  'audio/sot.mp3',
  'audio/speca.mp3',
  'audio/spinaq.mp3',
  'audio/stacioni_i_autobusit.mp3',
  'audio/taksi.mp3',
  'audio/tani.mp3',
  'audio/te_shihemi.mp3',
  'audio/tete.mp3',
  'audio/tetedhjete.mp3',
  'audio/tetembedhjete.mp3',
  'audio/tre.mp3',
  'audio/trembedhjete.mp3',
  'audio/tridhjete.mp3',
  'audio/uje.mp3',
  'audio/veze.mp3',
  'audio/yll.mp3',
  // Easy Words audio
  'audio/art.mp3',
  'audio/artist.mp3',
  'audio/biologji.mp3',
  'audio/demokraci.mp3',
  'audio/dhelper.mp3',
  'audio/djathtas.mp3',
  'audio/fantastik.mp3',
  'audio/festival.mp3',
  'audio/film.mp3',
  'audio/fizike.mp3',
  'audio/hotel.mp3',
  'audio/informacion.mp3',
  'audio/kaos.mp3',
  'audio/katastrofe.mp3',
  'audio/kompjuter.mp3',
  'audio/konflikt.mp3',
  'audio/konstitucion.mp3',
  'audio/kulture.mp3',
  'audio/matematik.mp3',
  'audio/minister.mp3',
  'audio/muzike.mp3',
  'audio/normal.mp3',
  'audio/parlament.mp3',
  'audio/pasaporte.mp3',
  'audio/perfekt.mp3',
  'audio/pizza.mp3',
  'audio/president.mp3',
  'audio/problem.mp3',
  'audio/republik.mp3',
  'audio/restorant.mp3',
  'audio/sallate.mp3',
  'audio/skandal.mp3',
  'audio/teater.mp3',
  'audio/teknologji.mp3',
  'audio/turist.mp3'
];

// Install event - cache alle bestanden - SKIP WAITING voor snelle updates
self.addEventListener('install', event => {
  self.skipWaiting(); // Force nieuwe service worker direct actief
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - cleanup old caches EN claim clients direct
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim alle clients direct - geen refresh nodig
      return self.clients.claim();
    })
  );
});
