const CACHE_NAME = 'pasneserpark-v3-20260528';

// Lijst van alle bestanden om te cachen
const urlsToCache = [
  '/app/',
  '/app/index.html',
  // Audio bestanden
  '/app/audio/absolutisht.mp3',
  '/app/audio/autobus.mp3',
  '/app/audio/avash_avash.mp3',
  '/app/audio/breshke.mp3',
  '/app/audio/bretkose.mp3',
  '/app/audio/buf.mp3',
  '/app/audio/bufo.mp3',
  '/app/audio/buke.mp3',
  '/app/audio/cfare.mp3',
  '/app/audio/dallendyshe.mp3',
  '/app/audio/dardhe.mp3',
  '/app/audio/dele.mp3',
  '/app/audio/dhelpor.mp3',
  '/app/audio/dhie.mp3',
  '/app/audio/dhjete.mp3',
  '/app/audio/diell.mp3',
  '/app/audio/djathas.mp3',
  '/app/audio/djathe.mp3',
  '/app/audio/domate.mp3',
  '/app/audio/drejt.mp3',
  '/app/audio/dy.mp3',
  '/app/audio/dymbedhjete.mp3',
  '/app/audio/dyzet.mp3',
  '/app/audio/ere.mp3',
  '/app/audio/faleminderit.mp3',
  '/app/audio/flutur.mp3',
  '/app/audio/fushe.mp3',
  '/app/audio/furgon.mp3',
  '/app/audio/gezuar.mp3',
  '/app/audio/gjashte.mp3',
  '/app/audio/gjashtedhjete.mp3',
  '/app/audio/gjashtembedhjete.mp3',
  '/app/audio/gjalp.mp3',
  '/app/audio/gomar.mp3',
  '/app/audio/gur.mp3',
  '/app/audio/hardhuce.mp3',
  '/app/audio/hene.mp3',
  '/app/audio/jam_me_stomakun.mp3',
  '/app/audio/jo.mp3',
  '/app/audio/jo_jo_jo.mp3',
  '/app/audio/ju_lutem.mp3',
  '/app/audio/ju_lutem_jo_raki.mp3',
  '/app/audio/kafe_ekspres.mp3',
  '/app/audio/kafe_ftofte.mp3',
  '/app/audio/kafe_me_qumesht.mp3',
  '/app/audio/kafe_turke.mp3',
  '/app/audio/kale.mp3',
  '/app/audio/kamion.mp3',
  '/app/audio/kapucino.mp3',
  '/app/audio/karkalec.mp3',
  '/app/audio/karrote.mp3',
  '/app/audio/kastraveca.mp3',
  '/app/audio/kater.mp3',
  '/app/audio/katermbedhjete.mp3',
  '/app/audio/koder.mp3',
  '/app/audio/ku.mp3',
  '/app/audio/kur.mp3',
  '/app/audio/laker.mp3',
  '/app/audio/lakuriq_nates.mp3',
  '/app/audio/lindja_e_diellit.mp3',
  '/app/audio/limon.mp3',
  '/app/audio/liqen.mp3',
  '/app/audio/lope.mp3',
  '/app/audio/lugine.mp3',
  '/app/audio/lume.mp3',
  '/app/audio/mace.mp3',
  '/app/audio/majtas.mp3',
  '/app/audio/makine.mp3',
  '/app/audio/mal.mp3',
  '/app/audio/me_falni.mp3',
  '/app/audio/me_sheqer.mp3',
  '/app/audio/mire.mp3',
  '/app/audio/mire_faleminderit.mp3',
  '/app/audio/mire_se_vini.mp3',
  '/app/audio/mire_se_vini_ne_pasneserpark.mp3',
  '/app/audio/miredita.mp3',
  '/app/audio/mirembrema.mp3',
  '/app/audio/miremengjes.mp3',
  '/app/audio/mirupafshim.mp3',
  '/app/audio/mish_derri.mp3',
  '/app/audio/mish_dhie.mp3',
  '/app/audio/mish_qengji.mp3',
  '/app/audio/molle.mp3',
  '/app/audio/motor.mp3',
  '/app/audio/naten_e_mire.mp3',
  '/app/audio/natyrisht.mp3',
  '/app/audio/ndoshta.mp3',
  '/app/audio/nente.mp3',
  '/app/audio/nentedhjete.mp3',
  '/app/audio/nentembedhjete.mp3',
  '/app/audio/neser.mp3',
  '/app/audio/nje.mp3',
  '/app/audio/nje_kafe_ju_lutem.mp3',
  '/app/audio/nje_moment.mp3',
  '/app/audio/nje_raki.mp3',
  '/app/audio/njembedhjete.mp3',
  '/app/audio/njeqind.mp3',
  '/app/audio/njezet.mp3',
  '/app/audio/nuk_e_di.mp3',
  '/app/audio/nuk_flas_shqip.mp3',
  '/app/audio/nuk_kuptoj.mp3',
  '/app/audio/pa_sheqer.mp3',
  '/app/audio/pak_raki.mp3',
  '/app/audio/papaqi.mp3',
  '/app/audio/pasneser.mp3',
  '/app/audio/patate.mp3',
  '/app/audio/perendim_dielli.mp3',
  '/app/audio/pershendetje.mp3',
  '/app/audio/pese.mp3',
  '/app/audio/pesedhjete.mp3',
  '/app/audio/pesembedhjete.mp3',
  '/app/audio/po.mp3',
  '/app/audio/po_or_jo.mp3',
  '/app/audio/po_po_po.mp3',
  '/app/audio/portokall.mp3',
  '/app/audio/prisni.mp3',
  '/app/audio/pse.mp3',
  '/app/audio/pule.mp3',
  '/app/audio/pyll.mp3',
  '/app/audio/qen.mp3',
  '/app/audio/qepe.mp3',
  '/app/audio/qofte.mp3',
  '/app/audio/qukapik.mp3',
  '/app/audio/raki.mp3',
  '/app/audio/raki_mani.mp3',
  '/app/audio/raki_rrushi.mp3',
  '/app/audio/raki_thane.mp3',
  '/app/audio/re.mp3',
  '/app/audio/rose.mp3',
  '/app/audio/shalqi.mp3',
  '/app/audio/shi.mp3',
  '/app/audio/shtate.mp3',
  '/app/audio/shtatedhjete.mp3',
  '/app/audio/shtatembedhjete.mp3',
  '/app/audio/shume_mire.mp3',
  '/app/audio/si.mp3',
  '/app/audio/si_je.mp3',
  '/app/audio/si_jeni.mp3',
  '/app/audio/sigurisht.mp3',
  '/app/audio/skifter.mp3',
  '/app/audio/sorre.mp3',
  '/app/audio/sot.mp3',
  '/app/audio/speca.mp3',
  '/app/audio/spinaq.mp3',
  '/app/audio/stacioni_i_autobusit.mp3',
  '/app/audio/taksi.mp3',
  '/app/audio/tani.mp3',
  '/app/audio/te_shihemi.mp3',
  '/app/audio/tete.mp3',
  '/app/audio/tetedhjete.mp3',
  '/app/audio/tetembedhjete.mp3',
  '/app/audio/tre.mp3',
  '/app/audio/trembedhjete.mp3',
  '/app/audio/tridhjete.mp3',
  '/app/audio/uje.mp3',
  '/app/audio/veze.mp3',
  '/app/audio/yll.mp3',
  // Easy Words audio
  '/app/audio/Art.mp3',
  '/app/audio/Artist.mp3',
  '/app/audio/Autobus.mp3',
  '/app/audio/Biologji.mp3',
  '/app/audio/Demokraci.mp3',
  '/app/audio/Fantastik.mp3',
  '/app/audio/Festival.mp3',
  '/app/audio/Film.mp3',
  '/app/audio/Fizikë.mp3',
  '/app/audio/Hotel.mp3',
  '/app/audio/Informacion.mp3',
  '/app/audio/Kafé.mp3',
  '/app/audio/Kaos.mp3',
  '/app/audio/Katastrofë.mp3',
  '/app/audio/Kompjuter.mp3',
  '/app/audio/Konflikt.mp3',
  '/app/audio/Konstitucion.mp3',
  '/app/audio/Kulturë.mp3',
  '/app/audio/Matematik.mp3',
  '/app/audio/Minister.mp3',
  '/app/audio/Muzikë.mp3',
  '/app/audio/Normal.mp3',
  '/app/audio/Parlament.mp3',
  '/app/audio/Pasaportë.mp3',
  '/app/audio/Perfekt.mp3',
  '/app/audio/Pizza.mp3',
  '/app/audio/President.mp3',
  '/app/audio/Problem.mp3',
  '/app/audio/Republik.mp3',
  '/app/audio/Restorant.mp3',
  '/app/audio/Sallatë.mp3',
  '/app/audio/Skandal.mp3',
  '/app/audio/Taksi.mp3',
  '/app/audio/Teatër.mp3',
  '/app/audio/Teknologji.mp3',
  '/app/audio/Turist.mp3'
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
