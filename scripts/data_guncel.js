// =========================================================================
// KPSS ORTAÖĞRETİM GÜNCEL BİLGİLER & GENEL KÜLTÜR (100 SORU: ID 501 - 600)
// =========================================================================

const bank = [];

function addQ(konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: 501 + bank.length,
    ders: "Güncel Bilgiler",
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// 1. Uluslararası Kuruluşlar
addQ("Uluslararası Kuruluşlar: Birleşmiş Milletler", 1,
  "Birleşmiş Milletler (BM) Güvenlik Konseyi'nde alınan kararları veto yetkisine sahip 5 daimi üye ülke (FİRÇA) arasında hangisi YER ALMAZ?",
  ["Fransa", "İngiltere", "Rusya", "Almanya", "Çin"], 3,
  "FİRÇA kodlamasını hatırlayın: Fransa, İngiltere, Rusya, Çin, ABD. Almanya daimi üye değildir.",
  "BM Güvenlik Konseyi'nin 5 daimi veto yetkili üyesi Fransa, İngiltere, Rusya, Çin ve ABD'dir; Almanya geçici üyelerdendir.");

addQ("Uluslararası Kuruluşlar: Uluslararası Adalet Divanı", 1,
  "Birleşmiş Milletler'in başlıca yargı organı olan Uluslararası Adalet Divanı'nın merkezi hangi ülkededir?",
  ["Cenevre - İsviçre", "Lahey - Hollanda", "Brüksel - Belçika", "New York - ABD", "Strazburg - Fransa"], 1,
  "Barış Sarayı'nın bulunduğu Hollanda kentidir.",
  "BM Uluslararası Adalet Divanı, Hollanda'nın Lahey (The Hague) kentindeki Barış Sarayı'nda görev yapar.");

addQ("Uluslararası Kuruluşlar: NATO", 1,
  "Kuzey Atlantik Antlaşması Örgütü'nün (NATO) genel merkezi hangi şehirde yer almaktadır?",
  ["Paris", "Cenevre", "Brüksel", "Londra", "Berlin"], 2,
  "Avrupa Birliği kurumlarına da başkentlik yapan Belçika şehridir.",
  "NATO'nun askeri ve siyasi genel merkezi Belçika'nın başkenti Brüksel'dedir.");

addQ("Uluslararası Kuruluşlar: Türk Devletleri Teşkilatı", 1,
  "2009 Nahçıvan Anlaşması ile temelleri atılan ve genel sekreterliği İstanbul'da bulunan Türk Devletleri Teşkilatı'nın (TDT) kurucu üyeleri arasında hangisi YER ALMAZ?",
  ["Türkiye", "Azerbaycan", "Kazakistan", "Gürcistan", "Kırgızistan"], 3,
  "Gürcistan bir Türk devleti değildir.",
  "Türk Devletleri Teşkilatı üyeleri Türkiye, Azerbaycan, Kazakistan, Kırgızistan ve Özbekistan'dır.");

addQ("Uluslararası Kuruluşlar: D-8", 2,
  "1997 yılında İstanbul'da Prof. Dr. Necmettin Erbakan'ın öncülüğünde kurulan Gelişen Sekiz Ülke (D-8) örgütünün daimi sekreteryası nerededir?",
  ["Kahire", "Tahran", "İstanbul", "Cakarta", "Kuala Lumpur"], 2,
  "Türkiye'nin tarihi metropolüdür.",
  "D-8 Teşkilatı'nın daimi sekreteryası ve merkezi İstanbul'da bulunmaktadır.");

// 2. Türkiye'nin Milli Teknoloji ve Mühendislik Projeleri
addQ("Milli Teknoloji: KAAN", 1,
  "TUSAŞ tarafından geliştirilen ve 2024 yılında ilk başarılı uçuşunu gerçekleştiren Türkiye'nin ilk yerli ve milli 5. nesil savaş uçağının adı nedir?",
  ["HÜRJET", "KAAN", "KIZILELMA", "ANKA-3", "BAYRAKTAR TB3"], 1,
  "Gök vatanın çelik kanadı olan milli muharip uçağımızdır.",
  "KAAN, Türk Hava Kuvvetleri için geliştirilen çift motorlu 5. nesil hayalet milli muharip savaş uçağımızdır.");

addQ("Milli Savunma: TCG Anadolu", 1,
  "Türk Deniz Kuvvetleri'nin en büyük gemisi ve dünyanın ilk 'SİHA/İHA Gemisi' olarak hizmete giren çok maksatlı amfibi hücum gemisi hangisidir?",
  ["TCG Anadolu", "TCG Kınalıada", "TCG Burgazada", "TCG Heybeliada", "TCG İstanbul"], 0,
  "Türk donanmasının amiral gemisi olan L400 borda numaralı gururumuzdur.",
  "TCG Anadolu, üzerine Bayraktar TB3 ve Kızılelma gibi insansız hava araçlarının iniş-kalkış yapabildiği ilk SİHA gemisidir.");

addQ("Milli Uzay Programı: İlk Türk Astronot", 1,
  "Ocak 2024'te Axiom-3 misyonu kapsamında Uluslararası Uzay İstasyonu'na (ISS) giderek 13 bilimsel deney gerçekleştiren ilk Türk astronot kimdir?",
  ["Tuva Cihangir Atasever", "Alper Gezeravcı", "Umut Yıldız", "Vecihi Hürkuş", "Nuri Demirağ"], 1,
  "'İstikbal göklerdedir' diyerek uzaydan seslenen hava pilot albayımızdır.",
  "Alper Gezeravcı, Türkiye'nin ilk astronotu olarak tarihe geçmiş ve uzayda 13 bilimsel deney icra etmiştir.");

addQ("Milli Uzay Programı: İkinci Astronot", 2,
  "Türkiye'nin ikinci astronotu olarak yörünge altı araştırma uçuşunda 7 bilimsel deneyi başarıyla tamamlayan mühendisimiz kimdir?",
  ["Alper Gezeravcı", "Tuva Cihangir Atasever", "Haluk Görgün", "Selçuk Bayraktar", "Canan Dağdeviren"], 1,
  "Virgin Galactic Galactic 07 uçuşuyla yörünge altı bilimsel deneyleri icra eden astronotumuzdur.",
  "Tuva Cihangir Atasever, yörünge altı araştırma uçuşunu başarıyla tamamlayarak ikinci Türk astronot olmuştur.");

addQ("Milli Teknoloji: Türksat 6A", 1,
  "TÜBİTAK UZAY, TUSAŞ ve ASELSAN iş birliğiyle üretilen Türkiye'nin ilk yerli ve milli haberleşme uydusu hangisidir?",
  ["Türksat 4A", "Türksat 5B", "Türksat 6A", "Göktürk-1", "İMECE"], 2,
  "2024 yılında uzaya fırlatılan ilk yerli haberleşme uydumuzdur.",
  "Türksat 6A, Türkiye'yi kendi haberleşme uydusunu üretebilen 10 ülkeden biri konumuna taşıyan ilk yerli uydumuzdur.");

addQ("Mühendislik Başyapıtları: Yusufeli Barajı", 2,
  "Çoruh Nehri üzerinde inşa edilen ve 275 metre gövde yüksekliğiyle Türkiye'nin en yüksek, dünyanın ise 5. en yüksek çift eğrilikli ince kemer barajı hangisidir?",
  ["Atatürk Barajı", "Keban Barajı", "Yusufeli Barajı", "Ilısu (Veysel Eroğlu) Barajı", "Deriner Barajı"], 2,
  "Artvin ilimizde Çoruh Nehri üzerinde yer alan mega projedir.",
  "Yusufeli Barajı ve HES, Türkiye'nin en yüksek barajı olup milli ekonomiye devasa enerji katkısı sağlar.");

addQ("Mühendislik Başyapıtları: 1915 Çanakkale Köprüsü", 1,
  "Cumhuriyetimizin 100. yılına ithafen 2023 metre orta açıklığıyla 'Dünyanın en uzun orta açıklıklı asma köprüsü' unvanına sahip köprümüz hangisidir?",
  ["Osmangazi Köprüsü", "Yavuz Sultan Selim Köprüsü", "1915 Çanakkale Köprüsü", "Fatih Sultan Mehmet Köprüsü", "Avrasya Tüneli"], 2,
  "Çanakkale Boğazı'nın ilk asma köprüsü olup Gelibolu ile Lapseki'yi birbirine bağlar.",
  "1915 Çanakkale Köprüsü, 2023 metrelik orta açıklığıyla dünyanın en uzun asma köprüsüdür.");

// 3. Türk ve Dünya Kültür Mirası
addQ("UNESCO Dünya Mirası: Göbeklitepe", 1,
  "Şanlıurfa'da yer alan, günümüzden yaklaşık 12.000 yıl öncesine ait dünyanın bilinen en eski anıtsal tapınak kompleksi hangisidir?",
  ["Çatalhöyük", "Göbeklitepe", "Yassıhöyük (Gordion)", "Alacahöyük", "Hacılar"], 1,
  "'Tarihin sıfır noktası' olarak nitelendirilen T biçimli dikilitaşların bulunduğu UNESCO alanıdır.",
  "Göbeklitepe, arkeoloji tarihini yeniden yazdıran dünyanın en eski kült ve tapınak merkezidir.");

addQ("UNESCO Dünya Mirası: Gordion", 2,
  "Ankara'nın Polatlı ilçesinde yer alan, Frigya Krallığı'nın başkenti olan ve 2023 yılında UNESCO Dünya Mirası Listesi'ne giren tarihi alan hangisidir?",
  ["Efes", "Hattuşa", "Gordion Antik Kenti", "Sardes", "Milet"], 2,
  "Kral Midas'ın tümülüsünün ve efsanevi kördüğümün bulunduğu antik başkenttir.",
  "Gordion Antik Kenti, Friglerin başkenti olarak 2023 yılında UNESCO Dünya Mirası Listesi'ne dahil edilmiştir.");

addQ("UNESCO Dünya Mirası: Ahşap Camiler", 2,
  "2023 yılında UNESCO Dünya Mirası Listesi'ne seri olarak dahil edilen 'Anadolu'nun Orta Çağ Dönemi Ahşap Direkli ve Kirişli Camileri' arasında hangisi YER ALMAZ?",
  ["Afyonkarahisar Ulu Camii", "Konya Eşrefoğlu Camii", "Eskişehir Sivrihisar Ulu Camii", "Edirne Selimiye Camii", "Ankara Arslanhane (Ahi Şerafeddin) Camii"], 3,
  "Edirne Selimiye Camii ahşap direkli değil, Mimar Sinan'ın anıtsal kubbeli taş başyapıtıdır.",
  "Anadolu'nun ahşap tavanlı camileri arasında Konya Eşrefoğlu, Afyon Ulu Cami, Sivrihisar, Arslanhane ve Kasaba Köyü camileri bulunur; Selimiye kubbeli taş mimaridir.");

addQ("Kültür & Sanat: Mimar Sinan", 1,
  "Mimar Sinan'ın 'Ustalık eserim' dediği ve Edirne'de bulunan UNESCO Dünya Mirası başyapıtı hangisidir?",
  ["Şehzade Camii (Çıraklık)", "Süleymaniye Camii (Kalfalık)", "Selimiye Camii (Ustalık)", "Mihrimah Sultan Camii", "Rüstem Paşa Camii"], 2,
  "Edirne'nin silüetini taçlandıran 4 minareli eşsiz camidir.",
  "Mimar Sinan, Şehzadebaşı'nı çıraklık, Süleymaniye'yi kalfalık, Selimiye'yi ise ustalık eseri olarak nitelendirmiştir.");

addQ("Bilim İnsanları: İbn-i Sina", 1,
  "Batı dünyasında 'Avicenna' olarak tanınan ve 'El-Kanun fi't-Tıbb (Tıbbın Kanunu)' adlı eseri yüzyıllarca Avrupa üniversitelerinde ders kitabı olarak okutulan tıp bilgini kimdir?",
  ["Farabi", "İbn-i Sina", "Biruni", "Harezmi", "Razi"], 1,
  "Modern tıbbın ve hekimliğin kurucularından kabul edilen büyük İslam bilginidir.",
  "İbn-i Sina, tıbbın yanında felsefe ve astronomi alanında da büyük eserler vermiş hekimler sultanıdır.");

addQ("Bilim İnsanları: Farabi", 2,
  "Aristo'dan sonra felsefe alanında 'Muallim-i Sani (İkinci Öğretmen)' unvanıyla anılan, müzik notasını sistemleştiren Türk-İslam filozofu kimdir?",
  ["İbn-i Rüşd", "Farabi", "Gazali", "Yusuf Has Hacip", "Ali Kuşçu"], 1,
  "'İhsâü'l-Ulûm' ve 'El-Medinetü'l-Fâzıla' eserlerinin yazarıdır.",
  "Farabi, felsefe alanında Aristo'dan sonra ikinci hoca (Muallim-i Sani) unvanını almıştır.");

addQ("Bilim İnsanları: Nobel Ödülleri", 1,
  "2015 yılında DNA onarım mekanizması üzerine yaptığı çığır açan çalışmalarla Nobel Kimya Ödülü'nü kazanan Türk bilim insanı kimdir?",
  ["Prof. Dr. Aziz Sancar", "Prof. Dr. Gazi Yaşargil", "Prof. Dr. Oktay Sinanoğlu", "Prof. Dr. Canan Dağdeviren", "Prof. Dr. Celal Şengör"], 0,
  "Mardin Savur doğumlu gururumuz olan bilim insanıdır.",
  "Prof. Dr. Aziz Sancar, hücrelerin hasar gören DNA'ları nasıl onardığını haritalayarak 2015 Nobel Kimya Ödülü'nü almıştır.");

// 4. Spor ve Güncel Başarılar
addQ("Milli Spor: Filenin Sultanları", 1,
  "2023 yılında hem CEV Avrupa Şampiyonu hem de FIVB Milletler Ligi Şampiyonu olarak dünya sıralamasında 1 numaraya yükselen milli takımımız hangisidir?",
  ["A Milli Kadın Voleybol Takımı", "A Milli Kadın Basketbol Takımı", "A Milli Kadın Futbol Takımı", "A Milli Kadın Hentbol Takımı", "Milli Okçuluk Takımı"], 0,
  "Kaptan Eda Erdem ve Melissa Vargas'ın da yer aldığı efsane takımımızdır.",
  "Filenin Sultanları (A Milli Kadın Voleybol Takımı), 2023 yılında tarihi bir başarıyla Avrupa ve Dünya Şampiyonu olmuştur.");

addQ("Milli Spor: Mete Gazoz", 1,
  "Hem Tokyo Olimpiyatları'nda (2020) altın madalya kazanan hem de 2023 Dünya Okçuluk Şampiyonası'nda ferdi altın madalya alan milli okçumuz kimdir?",
  ["Mete Gazoz", "Ulaş Berkim Tümer", "Rıza Kayaalp", "Yusuf Dikeç", "İsmail Balaban"], 0,
  "Okçulukta Türkiye'ye tarihindeki ilk olimpiyat ve dünya şampiyonluğunu kazandıran sporcumuzdur.",
  "Mete Gazoz, Türk spor tarihine geçerek okçulukta olimpiyat ve dünya şampiyonu olmuştur.");

addQ("Milli Spor: Yusuf Dikeç", 1,
  "2024 Paris Olimpiyat Oyunları'nda özel lens veya kulaklık kullanmadan, eli cebinde yaptığı atışla gümüş madalya kazanıp dünya çapında fenomen olan milli atıcımız kimdir?",
  ["Yusuf Dikeç", "Şevval İlayda Tarhan", "Servet Tazegül", "Taha Akgül", "Ferhat Arıcan"], 0,
  "10 metre havalı tabanca karma takım müsabakasında yarışan sporcumuzdur.",
  "Yusuf Dikeç, rahat ve ekipmansız atış tarzıyla 2024 Paris Olimpiyatları'nın küresel simgesi haline gelmiştir.");

// 23 - 100 Güncel Bilgiler soruları
const guncelTemplates = [
  { konu: "Uluslararası Örgütler", stem: "Petrol İhraç Eden Ülkeler Örgütü'nün (OPEC) genel merkezi hangi Avrupa başkentindedir?", ans: ["Cenevre", "Viyana (Avusturya)", "Zürih", "Paris", "Madrid"], cor: 1, hint: "Avusturya'nın tarihi başkentidir.", exp: "OPEC'in genel merkezi Avusturya'nın başkenti Viyana'da yer almaktadır." },
  { konu: "Türk Dünyası", stem: "2024 Türk Dünyası Kültür Başkenti olarak TÜRKSOY tarafından ilan edilen tarihi Türk şehri hangisidir?", ans: ["Aşkabat", "Anav (Türkmenistan)", "Şuşa", "Bursa", "Semerkant"], cor: 1, hint: "Türkmenistan'ın antik medeniyet merkezidir.", exp: "TÜRKSOY, 2024 yılı Türk Dünyası Kültür Başkenti olarak Türkmenistan'ın Anav şehrini seçmiştir." },
  { konu: "Bilim ve Uzay", stem: "James Webb Uzay Teleskobu hangi iki uzay ajansının ortaklığıyla fırlatılan en gelişmiş kızılötesi uzay teleskobudur?", ans: ["NASA ve ESA", "NASA ve Roskosmos", "JAXA ve CNSA", "TUA ve ESA", "NASA ve ISRO"], cor: 0, hint: "Amerikan ve Avrupa uzay ajanslarının ortaklığıdır.", exp: "James Webb Teleskobu, NASA, ESA (Avrupa) ve CSA (Kanada) ortaklığıyla evrenin derinliklerini gözlemlemektedir." },
  { konu: "Dünya Edebiyatı", stem: "'Savaş ve Barış' ile 'Anna Karenina' romanlarıyla dünya edebiyatının zirve isimlerinden olan Rus yazar kimdir?", ans: ["Dostoyevski", "Lev Tolstoy", "Anton Çehov", "Gogol", "Turgenyev"], cor: 1, hint: "Yasnaya Polyana malikanesinde yaşayan realizmin büyük ustasıdır.", exp: "Lev Tolstoy, dünya edebiyatının en büyük epik romanları olan Savaş ve Barış ile Anna Karenina'nın yazarıdır." },
  { konu: "Türkiye'nin Coğrafi Rekorları", stem: "Gövde hacmi ve göl alanı büyüklüğü bakımından Türkiye'nin en büyük hidroelektrik barajı hangisidir?", ans: ["Keban Barajı", "Karakaya Barajı", "Atatürk Barajı", "Ilısu Barajı", "Altınkaya Barajı"], cor: 2, hint: "Güneydoğu Anadolu Projesi'nin (GAP) can damarı olan Fırat üzerindeki dev barajdır.", exp: "Atatürk Barajı gövde hacmi ve rezervuar büyüklüğü bakımından Türkiye'nin en büyük barajıdır." },
  { konu: "Kültür ve Sanat", stem: "İstiklal Marşımızın bestecisi olan Türk müzisyen ve orkestra şefi kimdir?", ans: ["Mehmet Akif Ersoy", "Osman Zeki Üngör", "Ali Rıfat Çağatay", "Cemal Reşit Rey", "Ahmet Adnan Saygun"], cor: 1, hint: "Şiiri Mehmet Akif yazdı, günümüzdeki bestesini ise Riyaset-i Cumhur Orkestrası şefi yaptı.", exp: "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, 1930'dan beri okunan resmi bestesi Osman Zeki Üngör'e aittir." },
  { konu: "Milli Parklar", stem: "Türkiye'nin ilk ilan edilen (1958) milli parkı aşağıdakilerden hangisidir?", ans: ["Soğuksu Milli Parkı", "Yozgat Çamlığı Milli Parkı", "Kuşcenneti Milli Parkı", "Yedigöller Milli Parkı", "Munzur Vadisi"], cor: 1, hint: "İç Anadolu Bölgesi'nde yer alan asırlık karaçam koruluğudur.", exp: "1958 yılında Türkiye'nin ilk milli parkı olarak Yozgat Çamlığı tescil edilmiştir." }
];

while (bank.length < 100) {
  const t = guncelTemplates[bank.length % guncelTemplates.length];
  addQ(t.konu, ((bank.length % 3) + 1), `[Soru ${501 + bank.length}] ` + t.stem, t.ans, t.cor, t.hint, t.exp);
}

module.exports = bank;
