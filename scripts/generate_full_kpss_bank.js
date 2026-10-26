const fs = require('fs');
const path = require('path');

// =========================================================================
// 600 SORULUK KPSS ORTAÖĞRETİM MASTER SORU BANKASI ÜRETİCİSİ
// Her Ders İçin 100 Soru (Türkçe, Matematik, Tarih, Coğrafya, Vatandaşlık, Güncel Bilgiler)
// =========================================================================

const bank = [];

// Yardımcı fonksiyon
function addQ(ders, konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: bank.length + 1,
    ders,
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// -------------------------------------------------------------------------
// 1. TÜRKÇE (100 SORU: ID 1 - 100)
// -------------------------------------------------------------------------
console.log('Generating Türkçe questions (1-100)...');

const turkceTemplates = [
  // Paragraf
  ["Paragrafta Ana Düşünce", 2, "Gerçek bir sanatçı, çağının tanığı olmakla yetinmez; yarınlara da ışık tutacak evrensel değerleri eserine nakşeder. Yalnızca bugünün alkışına odaklananlar, zamanın tozlu sayfalarında kaybolur.\n\nBu parçada asıl anlatılmak istenen nedir?",
   ["Sanatçı yalnızca kendi dönemini yansıtmalıdır.", "Kalıcılık, evrensel değerleri ve geleceği kucaklamakla mümkündür.", "Toplumun beğenisi sanatın tek ölçütüdür.", "Her eser mutlaka eleştiriye açık olmalıdır.", "Sanat üretimi zorlu bir süreçtir."], 1,
   "Parçada 'yarınlara ışık tutmak' ve 'evrensel değerler' vurgusuna dikkat edin.", "Yazar, kalıcı olmanın şartını evrensel değerleri yakalamak ve geleceğe seslenmek olarak ifade etmiştir."],

  ["Paragrafta Yardımcı Düşünce", 2, "Safranbolu evleri, Osmanlı sivil mimarisinin en zarif örneklerindendir. Taş, ahşap ve kerpicin mükemmel uyumuyla inşa edilen bu yapılar; komşunun güneşini ve manzarasını kesmeyecek şekilde konumlandırılmıştır.\n\nBu parçadan Safranbolu evleriyle ilgili hangisi ÇIKARILAMAZ?",
   ["Osmanlı mimarisini yansıttığı", "Farklı yapı malzemelerinin bir arada kullanıldığı", "Komşuluk hakkına ve saygıya özen gösterildiği", "Evlerin tamamının aynı usta tarafından yapıldığı", "Doğal çevreye uyumlu inşa edildiği"], 3,
   "Metinde evlerin tek bir usta tarafından yapıldığına dair hiçbir ifade yer almamaktadır.", "Metinde usta bilgisi verilmemiştir; mimari estetik, malzeme ve komşuluk saygısı anlatılmıştır."],

  ["Paragrafta Akışı Bozan Cümle", 2, "(I) Çocuklukta edinilen okuma alışkanlığı, bireyin tüm hayatını şekillendirir. (II) Kitaplarla büyüyen çocuklar olaylara daha geniş bir perspektiften bakar. (III) Dijital tabletlerin ekran parlaklığı göz sağlığını olumsuz etkileyebilir. (IV) Bu sayede problem çözme ve empati kurma becerileri erkenden gelişir. (V) Kısacası erken yaşta kitapla kurulan bağ geleceğe yapılan yatırımdır.\n\nAkışı bozan cümle hangisidir?",
   ["I", "II", "III", "IV", "V"], 2,
   "Paragraf kitap okuma alışkanlığından bahsederken III. cümlede tablet ekranının göz sağlığına etkisinden söz edilmiştir.", "III. cümle konudan tamamen saparak düşüncenin akışını bozmuştur."],

  ["Paragrafı İkiye Bölme", 2, "(I) Ebru sanatı, suyun üzerinde renklerin dans ettiği geleneksel bir Türk süsleme sanatıdır. (II) Kitre ile yoğunlaştırılan suyun üzerine serpilen boyalar bizlere eşsiz desenler sunar. (III) Her ebru yaprağı dünyada tektir ve kopyalanamaz. (IV) Hat sanatı ise yazıyı estetik bir boyuta taşıma gayesidir. (V) Kamış kalem ve is mürekkebiyle kâğıda dökülen bu sanat derin bir sabır gerektirir.\n\nİkinci paragraf hangi cümleyle başlar?",
   ["II", "III", "IV", "V", "Hiçbiri"], 2,
   "IV. cümlede Ebru sanatından Hat sanatına geçilmiştir.", "I, II ve III'te ebru; IV ve V'te ise hat sanatı ele alınmıştır."],

  ["Anlatım Biçimleri", 1, "Sabahın erken saatlerinde köyün dar patikasından yukarı doğru tırmanmaya başladık. Güneş sis bulutlarının ardından usulca yükseliyor, vadiye altın sarısı ışıklar saçıyordu. Çam kokusu ciğerlerimizi tazelerken derenin şırıltısı bize eşlik ediyordu.\n\nBu parçada hangi anlatım biçimi ağır basmaktadır?",
   ["Tartışmacı Anlatım", "Betimleyici Anlatım", "Açıklayıcı Anlatım", "Örnekleme", "Tanık Gösterme"], 1,
   "Sözcüklerle resim çizme sanatını (nitelendirici sözcükler) düşünün.", "Mekânın görsel ve duyusal unsurlarla okuyucunun gözünde canlandırılması betimlemedir."]
];

// 100 soru oluşturmak için döngüsel ve tematik zenginleştirme
console.log('Writing questions bank script...');
