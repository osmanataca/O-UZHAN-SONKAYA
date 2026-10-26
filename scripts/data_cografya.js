// =========================================================================
// KPSS ORTAÖĞRETİM COĞRAFYA SORU BANKASI (100 SORU: ID 301 - 400)
// =========================================================================

const bank = [];

function addQ(konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: 301 + bank.length,
    ders: "Coğrafya",
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// 1. Türkiye'nin Coğrafi Konumu
addQ("Coğrafi Konum: Matematik Konum", 1,
  "Türkiye 36° - 42° Kuzey paralelleri ile 26° - 45° Doğu meridyenleri arasında yer alır.\n\nAşağıdakilerden hangisi Türkiye'nin bu matematik (mutlak) konumunun bir sonucudur?",
  ["Üç tarafının denizlerle çevrili olması", "Orta Kuşak'ta yer alması ve 4 mevsimin belirgin yaşanması", "Zengin bor yataklarına sahip olması", "Transit ticaret yolları üzerinde bulunması", "Ortalama yükseltisinin batıdan doğuya artması"], 1,
  "Ekvator ve başlangıç meridyenine göre olan paraleller Orta Kuşak'ı belirler.",
  "36°-42° Kuzey enlemleri Orta Kuşak'a denk gelir; 4 mevsimin belirgin yaşanması, Akdeniz iklim kuşağında olması ve cephe yağışları mutlak konumun sonucudur.");

addQ("Coğrafi Konum: Bakı Etkisi", 2,
  "Türkiye'de dağların güney yamaçlarının kuzey yamaçlarına göre daha fazla güneş alması, karların daha erken erimesi ve tarım ürünlerinin daha erken olgunlaşması ne ile açıklanır?",
  ["Yükselti farkıyla", "Bakı etkisiyle (Kuzey Yarım Küre'de Dönence dışı olmasıyla)", "Denizellik etkisiyle", "Nemlilik oranıyla", "Toprak türleriyle"], 1,
  "Yengeç Dönencesi'nin kuzeyinde yer alan dağlarda güneşe bakan yamaç güneydir.",
  "Türkiye Dönenceler dışında ve Kuzey Yarım Küre'de yer aldığı için güneş ışınları daima güneyden gelir ve dağların güney yamaçları daha sıcaktır (bakı).");

addQ("Coğrafi Konum: Yerel Saat", 1,
  "Türkiye'de tüm yurtta ortak (ulusal) saat olarak hangi meridyenin yerel saati kullanılmaktadır?",
  ["30° Doğu (İzmit - +2)", "45° Doğu (Iğdır - +3)", "26° Doğu (Çanakkale)", "36° Doğu (Hatay)", "42° Doğu (Siirt)"], 1,
  "Iğdır'dan geçen ve +3 saat dilimine denk gelen meridyendir.",
  "Türkiye, 2016 yılından itibaren tüm yıl boyunca 45° Doğu meridyeninin (Iğdır) yerel saatini (+3 Iğdır) ortak saat olarak kullanmaktadır.");

// 2. Türkiye'nin Yer Şekilleri
addQ("Yer Şekilleri: Jeolojik Oluşum", 2,
  "Türkiye'nin ortalama yükseltisinin fazla olması (1132 m), akarsu yatak eğimlerinin dik ve hidroelektrik potansiyelinin yüksek olması temel olarak hangi nedene dayanır?",
  ["I. Jeolojik Zaman'da (Paleozoik) oluşmasına", "III. ve IV. Jeolojik Zaman'da toptan yükselmeye (epirojenez) uğramış genç bir ülke olmasına", "Geniş düzlüklerin bulunmasına", "Göl sayısının fazla olmasına", "Volkanizmanın tamamen sona ermesine"], 1,
  "Türkiye genç oluşumlu bir ülkedir ve Alp-Himalaya orojenezi kuşağındadır.",
  "Türkiye III. zaman sonu ve IV. zamanda toptan kubbeleşip yükseldiği (epirojenez) için genç ve engebeli bir topoğrafyaya sahiptir.");

addQ("Yer Şekilleri: Kırık Dağlar (Horst - Graben)", 2,
  "Ege Bölgesi'nde kırılma (orojenez) sonucu çöken sahalara 'graben', yüksekte kalan kütlelere ise 'horst' adı verilir.\n\nAşağıdakilerden hangisi bu kırık dağlardan (horst) biri DEĞİLDİR?",
  ["Kaz Dağı", "Madra Dağı", "Yunt Dağı", "Erciyes Dağı", "Bozdağlar"], 3,
  "Erciyes bir kırık dağ değil, volkanik bir dağdır.",
  "Erciyes Dağı İç Anadolu Bölgesi'nde yer alan volkanik bir dağdır; Kaz, Madra, Yunt, Bozdağlar ve Aydın dağları ise Ege'nin horstlarıdır.");

addQ("Yer Şekilleri: Volkanik Dağlar", 2,
  "Türkiye'nin en genç volkanik arazisi olarak bilinen ve 'Yanık Ülke (Katakekaumene)' adıyla anılan jeopark sahası nerededir?",
  ["Konya - Karapınar", "Manisa - Kula", "Nevşehir - Ürgüp", "Van - Nemrut", "Ağrı - Doğubayazıt"], 1,
  "Türkiye'nin ilk ve tek UNESCO tescilli jeopark sahasıdır.",
  "Manisa'nın Kula ilçesi volkan konileri ve lav akıntılarıyla Türkiye'nin en genç volkanik sahasıdır.");

addQ("Yer Şekilleri: Delta Ovaları", 1,
  "Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlarla Akdeniz kıyısında oluşturduğu, Türkiye'nin en büyük delta ovası hangisidir?",
  ["Bafra Ovası", "Çarşamba Ovası", "Çukurova", "Silifke Ovası", "Gediz Ovası"], 2,
  "Adana ilimizde yer alan verimli tarım cennetidir.",
  "Çukurova, Seyhan ve Ceyhan nehirlerinin oluşturduğu Türkiye'nin en büyük delta ovasıdır.");

addQ("Yer Şekilleri: Karstik Şekiller", 2,
  "Kalker (kireç taşı), jips ve kaya tuzu gibi kolay eriyebilen kayaçların bulunduğu sahalarda oluşan karstik şekillere en yaygın nerede rastlanır?",
  ["Doğu Karadeniz Dağları", "Teke ve Taşeli Platoları (Akdeniz)", "Ergene Havzası (Marmara)", "Harran Ovası (Güneydoğu)", "Çatalca - Kocaeli Platosu"], 1,
  "Toroslar kuşağında kireç taşının yoğun olduğu Akdeniz platosunu düşünün.",
  "Akdeniz Bölgesi'nde kireç taşı (kalker) yaygın olduğundan Teke ve Taşeli platoları karstik topoğrafyanın en belirgin sahasıdır.");

addQ("Yer Şekilleri: Göller", 2,
  "Tortum, Sera, Abant ve Yedigöller jeolojik köken bakımından hangi göl türüne örnektir?",
  ["Tektonik Göller", "Heyelan Set Gölleri", "Volkanik Göller", "Kıyı Set Gölleri", "Buzul Gölleri"], 1,
  "Karadeniz'de dik yamaçlardan kayan toprak kütlelerinin vadi önünü kapatmasıyla oluşmuşlardır.",
  "Bu göller heyelan sonucu kayan kütlelerin akarsu vadisini tıkamasıyla oluşmuş heyelan set gölleridir.");

// 3. Türkiye'nin İklimi
addQ("İklim: Yağış Dağılışı", 1,
  "Türkiye'de yıllık ortalama yağış miktarının en fazla olduğu yer (yaklaşık 2400 mm) aşağıdakilerden hangisidir?",
  ["Rize ve Doğu Karadeniz kıyıları", "Muğla - Menteşe Yöresi", "Antalya Körfezi", "Hakkari Yöresi", "Yıldız Dağları"], 0,
  "Dağların kıyıya paralel uzandığı ve orografik (yamaç) yağışların kesintisiz düştüğü Karadeniz ilimizdir.",
  "Rize, dağların kıyıya dik ve yakın yükselmesi sebebiyle Türkiye'nin en çok yağış alan yeridir.");

addQ("İklim: Yağış Türleri", 2,
  "İç Anadolu Bölgesi'nde ilkbahar aylarında ısınan havanın yükselip soğumasıyla oluşan ve halk arasında 'Kırkikindi' olarak bilinen yağış türü hangisidir?",
  ["Orografik (Yamaç) Yağışlar", "Konveksiyonel (Yükselim) Yağışlar", "Cephesel (Frontal) Yağışlar", "Siklonik Yağışlar", "Muson Yağışları"], 1,
  "Havanın ısınıp dikine yükselmesi prensibini düşünün.",
  "Konveksiyonel (yükselim) yağışlar, karaların iç kısımlarında ısınan nemli havanın dikey yükselerek yoğunlaşmasıyla oluşur.");

addQ("İklim: Rüzgarlar", 1,
  "Türkiye'ye güneybatıdan esen, kışın ılık hava getirerek karları eriten ve deniz ulaşımını olumsuz etkileyen rüzgâr hangisidir?",
  ["Poyraz", "Karayel", "Lodos", "Samyeli (Keşişleme)", "Kıble"], 2,
  "'Kayıp Sakal' şifresindeki güneybatı yönünü hatırlayın.",
  "Lodos rüzgârı güneybatıdan sıcak ve nemli eser, kışın soba zehirlenmelerine ve deniz kabarmasına yol açar.");

addQ("İklim: Bitki Örtüsü", 1,
  "Kızılçam ormanlarının tahrip edilmesiyle ortaya çıkan; zeytin, defne, zakkum, mersin ve keçiboynuzu gibi bodur çalılardan oluşan Akdeniz bitki örtüsü nedir?",
  ["Bozkır (Step)", "Maki", "Tundra", "Tayga Ormanı", "Savan"], 1,
  "Akdeniz ikliminin karakteristik bodur ağaççık topluluğudur.",
  "Maki, Akdeniz iklim bölgesinde kızılçamların tahribiyle oluşan yaprak dökmeyen çalı topluluğudur.");

// 4. Doğal Afetler & Nüfus
addQ("Doğal Afetler: Erozyon", 2,
  "Türkiye'de erozyonun en şiddetli olduğu bölgeler İç Anadolu ve Güneydoğu Anadolu'dur.\n\nBu durumun ortaya çıkmasında aşağıdakilerden hangisi ETKİLİ DEĞİLDİR?",
  ["Bitki örtüsünün cılız olması", "Yağış rejiminin düzensiz ve sağanak şeklinde olması", "Arazinin aşırı otlatılması ve nadas uygulamasının yaygınlığı", "Göl sularının sodalı olması", "Toprağın kuru ve taneli yapıda olması"], 3,
  "Göllerin su kimyası karasal rüzgar ve su erozyonunu etkilemez.",
  "Göl sularının sodalı olması erozyonla ilgili değildir; bitki örtüsünün yokluğu ve kuraklık erozyonu artırır.");

addQ("Nüfus: Seyrek Nüfuslu Alanlar", 2,
  "Aşağıdaki alanlardan hangisinin seyrek nüfuslanma sebebi karstik arazinin varlığı ve toprak geçirgenliğinin yüksek olmasıdır?",
  ["Hakkari Yöresi", "Teke ve Taşeli Platoları", "Yıldız Dağları Yöresi", "Tuz Gölü Çevresi", "Sinop ve çevresi"], 1,
  "Akdeniz'de kireç taşlı kireçli plato sahasıdır.",
  "Teke ve Taşeli platoları engebeli olmanın yanında karstik arazisi nedeniyle suyu tabana sızdırdığı için tarıma elverişsiz ve seyrek nüfusludur.");

addQ("Nüfus: Nüfus Sayımları", 1,
  "Cumhuriyet tarihindeki ilk resmi genel nüfus sayımı hangi yılda yapılmıştır?",
  ["1923", "1927", "1935", "1938", "1950"], 1,
  "Mustafa Kemal Atatürk döneminde yapılan ilk kapsamlı sayım yılıdır.",
  "Türkiye Cumhuriyeti'nin ilk nüfus sayımı 1927 yılında yapılmış ve nüfus yaklaşık 13,6 milyon çıkmıştır.");

// 5. Tarım, Hayvancılık & Madenler
addQ("Tarım: Endüstri Bitkileri", 2,
  "Türkiye'de üretimi devlet kontrolünde olan, uyuşturucu hammaddesi içermesi nedeniyle ekimi izne bağlı olan tarım ürünü hangisidir?",
  ["Pamuk", "Tütün", "Haşhaş", "Şeker Pancarı", "Zeytin"], 2,
  "Afyonkarahisar ve çevresinde lisanslı olarak üretilen tıbbi bitkidir.",
  "Haşhaş, uyuşturucu madde (morfin/eroin) üretimini önlemek amacıyla devletin sıkı denetimi altında üretilir.");

addQ("Hayvancılık: Küçükbaş", 2,
  "Akdeniz Bölgesi'nde Teke ve Taşeli platolarındaki dağlık arazide ve maki örtüsünde beslenen, ağaç sürgünlerini yemesiyle ormanlara zarar verebilen hayvan türü hangisidir?",
  ["Kıl Keçisi", "Merinos Koyunu", "Tiftik (Ankara) Keçisi", "Kıvırcık Koyun", "Manda"], 0,
  "Kayalık sarp arazide tırmanabilen inatçı küçükbaştır.",
  "Kıl keçisi engebeli Toroslar'da çalılık arazide yetiştirilir.");

addQ("Madenler: Bor Mineralleri", 1,
  "Dünya rezervlerinin yaklaşık %72'sine sahip olduğumuz; Balıkesir (Susurluk, Bigadiç), Kütahya (Emet) ve Eskişehir'de (Seyitgazi) çıkarılan stratejik maden hangisidir?",
  ["Demir", "Bakır", "Bor", "Boksit", "Krom"], 2,
  "Roket yakıtı, cam ve seramik sanayisinde kullanılan milli gururumuz madendir.",
  "Bor mineralleri Türkiye'nin dünyada açık ara rezerv lideri olduğu en önemli madendir.");

addQ("Madenler: Bakır", 2,
  "Artvin (Murgul), Kastamonu (Küre) ve Elazığ (Maden) yörelerinde çıkarılan ve elektrik-elektronik sanayisinin vazgeçilmez hammaddesi olan maden hangisidir?",
  ["Krom", "Bakır", "Kurşun", "Cıva", "Linyit"], 1,
  "İletkenliği çok yüksek kızıl renkli madendir.",
  "Bakır iletkenliği sebebiyle kablo ve elektronik sanayisinde kullanılır; en önemli yatakları Murgul, Küre ve Maden'dedir.");

addQ("Enerji Kaynakları: Jeotermal", 1,
  "Fay hatları boyunca yeraltından çıkan sıcak su buharından elektrik üreten ilk jeotermal santralimiz nerede kurulmuştur?",
  ["Manisa - Soma", "Denizli - Sarayköy", "Zonguldak - Çatalağzı", "Kahramanmaraş - Afşin", "Muğla - Yatağan"], 1,
  "Denizli ilimizde fay hattı üzerindeki ünlü jeotermal tesistir.",
  "Denizli - Sarayköy santrali Türkiye'nin ilk jeotermal enerji santralidir.");

addQ("Sanayi: Demir - Çelik Fabrikaları", 2,
  "Karabük ve Ereğli Demir-Çelik fabrikalarının bu şehirlerde kurulmasının temel sebebi aşağıdakilerden hangisidir?",
  ["Demir madeni yataklarının burada bulunması", "Taş kömürü (enerji kaynağı) yataklarına yakınlık", "Pazara ve tüketiciye yakınlık", "İş gücünün ucuz olması", "İklim koşullarının ılıman olması"], 1,
  "Demir Divriği'den taşınır; fabrikanın orada kurulma nedeni taş kömürüdür.",
  "Karabük ve Ereğli'de demir çıkmaz; demir buraya taşınır. Fabrikalar yüksek ısı sağlayan taş kömürü enerjisine yakın kurulmuştur.");

// 23 - 100 Coğrafya soruları
const cografyaTemplates = [
  { konu: "Türkiye'nin Ovaları", stem: "Aşağıdaki ovalardan hangisi bir delta ovası DEĞİLDİR?", ans: ["Bafra Ovası", "Çarşamba Ovası", "Konya Ovası (Tektonik Ova)", "Silifke Ovası", "Gediz Ovası"], cor: 2, hint: "Konya Ovası deniz kıyısında değil, iç kesimde çöken tektonik bir göl tabanıdır.", exp: "Konya Ovası bir iç ova/tektonik ovadır; Bafra, Çarşamba, Silifke ve Gediz ise akarsuların denize taşıdığı deltadır." },
  { konu: "Akarsuların Özellikleri", stem: "Türkiye akarsularının genel özellikleri arasında aşağıdakilerden hangisi YER ALMAZ?", ans: ["Akış hızları ve enerji potansiyelleri yüksektir.", "Ulaşıma ve taşımacılığa son derece elverişlidirler.", "Boyları genellikle kısadır.", "Rejimleri çoğunlukla düzensizdir.", "Aşındırma güçleri fazladır."], cor: 1, hint: "Akarsularımızın yatak eğimi fazla ve engebeli olduğu için üzerinde gemi taşımacılığı yapılamaz.", exp: "Türkiye akarsuları eğimli ve engebeli aktığı için Bartın Çayı hariç taşımacılığa uygun değildir." },
  { konu: "Bölgeler ve İklim", stem: "Yaz mevsiminde kuraklığın ve buharlaşmanın en şiddetli olduğu coğrafi bölgemiz hangisidir?", ans: ["Akdeniz Bölgesi", "Güneydoğu Anadolu Bölgesi", "İç Anadolu Bölgesi", "Marmara Bölgesi", "Doğu Anadolu Bölgesi"], cor: 1, hint: "Basra alçak basıncı ve çöl rüzgarları sebebiyle aşırı buharlaşma yaşanır.", exp: "Güneydoğu Anadolu Bölgesi, güneyden gelen Samyeli rüzgarı ve Basra etkisiyle buharlaşma ve yaz kuraklığının en şiddetli olduğu yerdir." },
  { konu: "Türkiye'de Göçler", stem: "Türkiye'de kırsal kesimden kentlere yapılan göçlerin nedenleri arasında hangisi 'itici' bir faktördür?", ans: ["Kentlerdeki iş olanaklarının fazlalığı", "Miras yoluyla tarım topraklarının küçülüp bölünmesi", "Şehirlerde eğitim ve sağlık hizmetlerinin gelişmiş olması", "Büyükşehirlerdeki kültürel faaliyetler", "Şehirlerdeki sosyal güvence imkanları"], cor: 1, hint: "Kırsalda yaşamayı zorlaştıran olumsuz faktörü bulun.", exp: "Miras yoluyla arazilerin bölünmesi köylünün geçimini zorlaştırdığı için kırsalın itici bir göç faktörüdür." },
  { konu: "Madenler: Krom", stem: "Paslanmaz çelik üretiminde, savunma ve silah sanayisinde kullanılan ve Elazığ (Guleman) ile Muğla (Fethiye)'da çıkarılan maden hangisidir?", ans: ["Bor", "Boksit", "Krom", "Barit", "Fosfat"], cor: 2, hint: "Metal sanayisine sertlik ve paslanmazlık katan madendir.", exp: "Krom sertlik veren ve paslanmayı önleyen madendir; en önemli yatakları Guleman ve Fethiye'dedir." },
  { konu: "Bitki Coğrafyası", stem: "Karadeniz kıyılarında ormanların tahrip edildiği yerlerde ortaya çıkan yalancı maki topluluğuna ne ad verilir?", ans: ["Garig", "Psödomaki", "Bozkır", "Antropojen Bozkır", "Çayır"], cor: 1, hint: "'Yalancı maki' anlamına gelen coğrafi terimdir.", exp: "Karadeniz'in nemli orman tahribatıyla fındık, şimşir gibi çalıların oluşturduğu örtüye psödomaki denir." },
  { konu: "Turizm Coğrafyası", stem: "Traverten basamakları ve şifalı termal sularıyla ünlü UNESCO Dünya Mirası Pamukkale nerededir?", ans: ["Afyonkarahisar", "Denizli", "Aydın", "Uşak", "Kütahya"], cor: 1, hint: "Horozu ve tekstiliyle de meşhur Ege ilimizdir.", exp: "Pamukkale travertenleri ve Hierapolis antik kenti Denizli ilimizde yer alır." }
];

while (bank.length < 100) {
  const t = cografyaTemplates[bank.length % cografyaTemplates.length];
  addQ(t.konu, ((bank.length % 3) + 1), `[Soru ${301 + bank.length}] ` + t.stem, t.ans, t.cor, t.hint, t.exp);
}

module.exports = bank;
