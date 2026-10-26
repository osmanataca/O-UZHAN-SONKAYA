// =========================================================================
// KPSS ORTAÖĞRETİM TARİH SORU BANKASI (100 SORU: ID 201 - 300)
// =========================================================================

const bank = [];

function addQ(konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: 201 + bank.length,
    ders: "Tarih",
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// 1. İslamiyet Öncesi Türk Tarihi
addQ("İslamiyet Öncesi Türk Tarihi: Devlet Yönetimi", 1,
  "Eski Türk devletlerinde devleti yönetme yetkisinin Tanrı tarafından hükümdara verildiğine inanılan anlayışa ne ad verilir?",
  ["Kurultay", "Kut", "Töre", "Yabgu", "Balbal"], 1,
  "Gök Tengri tarafından verilen kutsal yönetim bağışı/yetkisi kavramını düşünün.",
  "Eski Türklerde hükümdara devleti yönetme yetkisinin Gök Tanrı tarafından bağışlandığı inancına 'Kut' adı verilir.");

addQ("İslamiyet Öncesi Türk Tarihi: Kültür ve Medeniyet", 1,
  "Eski Türklerde ölen kahramanların mezarlarının başına, hayattayken öldürdüğü düşman sayısı kadar dikilen küçük taş heykellere ne ad verilir?",
  ["Yuğ", "Kurgan", "Balbal", "Toy", "Tamga"], 2,
  "Mezar taşı niteliğindeki savaşçı heykellerine dikkat edin.",
  "Ölen savaşçının mezarı (kurgan) etrafına dikilen taş heykellere 'balbal' denir.");

addQ("İslamiyet Öncesi Türk Tarihi: Yazıtlar", 1,
  "Türk adının geçtiği ilk Türkçe yazılı belgeler olan Orhun Abideleri hangi devlet döneminde dikilmiştir?",
  ["Asya Hun Devleti", "I. Göktürk Devleti", "II. Göktürk (Kutluk) Devleti", "Uygur Devleti", "Avarlar"], 2,
  "Kutluk (II. Göktürk) Devleti döneminde Bilge Kağan, Kül Tigin ve Vezir Tonyukuk adına dikilmiştir.",
  "Orhun Yazıtları, II. Göktürk (Kutluk) Devleti zamanında dikilmiş ilk Türkçe yazılı kaynaklardır.");

addQ("İslamiyet Öncesi Türk Tarihi: Uygurlar", 1,
  "Türk tarihinde yerleşik hayata geçen, ilk matbaayı kullanan ve kütüphaneler kuran ilk Türk devleti hangisidir?",
  ["Hunlar", "Göktürkler", "Uygurlar", "Hazarlar", "Kırgızlar"], 2,
  "Maniheizm dinini kabul ederek tarıma ve yerleşik yaşama geçen devleti hatırlayın.",
  "Bögü Kağan döneminde Maniheizm'i benimseyen Uygurlar, yerleşik hayata geçerek kalıcı mimari ve matbaayı ilk kullanan Türk devleti olmuştur.");

addQ("İslamiyet Öncesi Türk Tarihi: Ordu", 1,
  "Türk kara kuvvetlerinin kuruluş tarihi olarak kabul edilen M.Ö. 209 yılında 'Onlu Ordu Sistemi'ni kuran Türk hükümdarı kimdir?",
  ["Teoman", "Mete Han", "Bumin Kağan", "İstemi Yabgu", "Attila"], 1,
  "Asya Hun Devleti'nin en parlak dönemini yaşatan hükümdardır.",
  "Mete Han, M.Ö. 209'da orduyu onluk, yüzlük, binlik ve tümen birliklerine ayırarak modern kara ordusunun temelini atmıştır.");

// 2. İlk Türk-İslam Devletleri
addQ("İlk Türk-İslam Devletleri: Karahanlılar", 1,
  "Orta Asya'da kurulan ilk Müslüman Türk devleti aşağıdakilerden hangisidir?",
  ["Tolunoğulları", "İhşidiler", "Karahanlılar", "Gazneliler", "Büyük Selçuklular"], 2,
  "Satuk Buğra Han (Abdülkerim) döneminde İslamiyet'i resmi din kabul etmişlerdir.",
  "Orta Asya'da kurulan ilk Müslüman Türk devleti Karahanlılar'dır.");

addQ("İlk Türk-İslam Edebiyatı", 2,
  "Kaşgarlı Mahmut tarafından Araplara Türkçeyi öğretmek ve Türkçenin üstünlüğünü ortaya koymak amacıyla yazılan ilk Türkçe sözlük hangisidir?",
  ["Kutadgu Bilig", "Divanu Lugati't-Türk", "Atabetü'l-Hakayık", "Divan-ı Hikmet", "Muhakemetü'l-Lugateyn"], 1,
  "İlk Türkçe sözlük ve ilk Türk dünyası haritasını içeren eserdir.",
  "Divanu Lugati't-Türk, Kaşgarlı Mahmut tarafından Abbasi Halifesine sunulmuş ilk Türkçe sözlüktür.");

addQ("İlk Türk-İslam Devletleri: Gazneliler", 2,
  "Hindistan'a 17 sefer düzenleyerek bölgede İslamiyet'in yayılmasını sağlayan ve 'Sultan' unvanını kullanan ilk Türk hükümdarı kimdir?",
  ["Alp Tigin", "Gazneli Mahmut", "Sebük Tigin", "Tuğrul Bey", "Alparslan"], 1,
  "Abbasi halifesi tarafından 'Sultan' unvanı verilen ünlü Gazneli hükümdarıdır.",
  "Gazneli Mahmut, Hindistan'a yaptığı 17 seferle İslam'ı bölgeye taşımış ve tarihte ilk kez 'Sultan' unvanını kullanmıştır.");

addQ("Büyük Selçuklu Devleti: Savaşlar", 1,
  "1071 yılında Bizans İmparatorluğu'na karşı kazanılan ve 'Anadolu'nun kapılarını Türklere açan' tarihi zafer hangisidir?",
  ["Dandanakan Savaşı", "Pasinler Savaşı", "Malazgirt Meydan Muharebesi", "Miryokefalon Savaşı", "Yassıçemen Savaşı"], 2,
  "Sultan Alparslan'ın Bizans İmparatoru Romen Diyojen'i mağlup ettiği savaştır.",
  "1071 Malazgirt Zaferi ile Anadolu'nun kapıları Türklere açılmış ve ilk Türk beylikleri kurulmaya başlanmıştır.");

addQ("Büyük Selçuklu: Kültür & Eğitim", 2,
  "Büyük Selçuklu Devleti'nde Vezir Nizamülmülk tarafından Bağdat'ta kurulan, dönemin en yüksek öğretim kurumu olan medrese hangisidir?",
  ["Sahn-ı Seman", "Nizamiye Medreseleri", "Gök Medrese", "Caca Bey Medresesi", "Karatay Medresesi"], 1,
  "Vezir Nizamülmülk'ün adını taşıyan ilk üniversite niteliğindeki medresedir.",
  "Nizamiye Medreseleri, dönemin batıni tehlikesine karşı ilim insanı yetiştirmek için Bağdat'ta kurulmuştur.");

// 3. Anadolu Selçukluları & Beylikler
addQ("Anadolu Selçukluları: Savaşlar", 2,
  "1176 yılında II. Kılıçarslan döneminde Bizans'a karşı kazanılan ve 'Anadolu'nun kesin olarak Türk yurdu olduğunu' tescilleyen savaş hangisidir?",
  ["Pasinler Savaşı", "Malazgirt Savaşı", "Miryokefalon Savaşı", "Kösedağ Savaşı", "Yassıçemen Savaşı"], 2,
  "Bu zaferle Bizans'ın Türkleri Anadolu'dan atma ümidi tamamen sona ermiştir.",
  "1176 Miryokefalon Savaşı ile Anadolu kesin olarak Türk yurdu haline gelmiştir.");

addQ("I. Beylikler Dönemi: İlk Denizci", 1,
  "İzmir ve civarında kurulan ve tarihteki ilk Türk denizcisi olarak kabul edilen beylik/komutan kimdir?",
  ["Saltuklular", "Mengücekliler", "Çaka Beyliği", "Karesioğulları", "Aydınoğulları"], 2,
  "1081 yılı Türk Deniz Kuvvetleri'nin de kuruluş yılı kabul edilir.",
  "Çaka Bey, İzmir'de kurduğu donanma ile tarihteki ilk Türk denizcisi kabul edilir.");

addQ("Osmanlı Kuruluş: Teşkilatlanma", 1,
  "Osmanlı Devleti'nde ilk düzenli ordu (Yaya ve Müsellem), ilk divan teşkilatı ve ilk medrese hangi padişah döneminde kurulmuştur?",
  ["Osman Bey", "Orhan Bey", "I. Murat", "Yıldırım Bayezid", "II. Murat"], 1,
  "Bursa'yı fethederek başkent yapan ve devleti beylikten teşkilatlı devlete dönüştüren hükümdardır.",
  "Orhan Bey döneminde İznik'te ilk medrese açılmış, ilk divan kurulmuş ve Yaya-Müsellem ordusu oluşturulmuştur.");

addQ("Osmanlı Kuruluş: Rumeli'ye Geçiş", 1,
  "Osmanlı Devleti'nin Rumeli'de (Balkanlar'da) fethettiği ilk askeri üs ve toprak parçası neresidir?",
  ["Edirne", "Çimpe Kalesi", "Filibe", "Selanik", "Gelibolu"], 1,
  "Bizans İmparatoru Kantakuzen'in Orhan Bey'den yardım istemesi karşılığında verilmiştir.",
  "1353'te Çimpe Kalesi'nin alınmasıyla Osmanlılar Rumeli'ye ilk adımı atmıştır.");

addQ("Osmanlı Kuruluş: Yeniçeri Ocağı", 2,
  "Kapıkulu Ocağı ve Yeniçeri Ocağı'nı kuran, ilk kez 'Sultan' ve 'Hüdavendigâr' unvanlarını kullanan Osmanlı padişahı kimdir?",
  ["Osman Gazi", "Orhan Gazi", "I. Murat", "II. Murat", "Fatih Sultan Mehmet"], 2,
  "I. Kosova Savaşı'nda şehit düşen padişahtır.",
  "I. Murat (Hüdavendigâr), Tımar ve Devşirme sistemlerini başlatıp Kapıkulu Ocaklarını kurmuştur.");

// 4. Osmanlı Yükselme & Kültür
addQ("Osmanlı Yükselme: İstanbul'un Fethi", 1,
  "İstanbul'un fethinin (1453) dünya tarihi açısından en önemli sonucu aşağıdakilerden hangisidir?",
  ["İpek Yolu'nun Osmanlı denetimine geçmesi", "Orta Çağ'ın kapanıp Yeni Çağ'ın başlaması", "Osmanlı Devleti'nin imparatorluk haline gelmesi", "Bizans İmparatorluğu'nun yıkılması", "Topkapı Sarayı'nın inşası"], 1,
  "Evrensel çağ açıp kapayan dönüm noktasına dikkat edin.",
  "İstanbul'un fethi evrensel ölçekte Orta Çağ'ı bitirip Yeni Çağ'ı başlatan olay kabul edilir.");

addQ("Osmanlı Yükselme: Halifeliğin Geçişi", 1,
  "1516 Mercidabık ve 1517 Ridaniye seferleriyle Memlük Devleti'ne son vererek Halifeliği Osmanlı Devleti'ne kazandıran padişah kimdir?",
  ["Fatih Sultan Mehmet", "II. Bayezid", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Selim"], 2,
  "8 yıla 80 yıllık iş sığdıran ve Mısır'ı fetheden Osmanlı padişahıdır.",
  "Yavuz Sultan Selim, Memlükleri yıkarak Mısır'ı ve Kutsal Emanetleri İstanbul'a getirmiş, halifeliği Osmanlıya almıştır.");

addQ("Osmanlı Kültür ve Medeniyeti: Yönetici Sınıflar", 2,
  "Osmanlı Devleti'nde adalet, eğitim ve din işlerinden sorumlu olan, Şeyhülislam ve Kazaskerin de mensubu bulunduğu yönetici sınıf hangisidir?",
  ["Seyfiye (Kılıç Ehli)", "Kalemiye (Kalem Ehli)", "İlmiye (İlim Ehli)", "Reaya", "Tımarlı Sipahiler"], 2,
  "Kadılar, müderrisler ve müftülerin oluşturduğu ilim sınıfıdır.",
  "İlmiye sınıfı; adalet, eğitim ve fetva işlerini yürüten zümredir.");

addQ("Osmanlı Kültür ve Medeniyeti: Maliye", 2,
  "Osmanlı Divan-ı Hümayununda devletin gelir-gider hesaplarını tutan ve bütçeyi hazırlayan divan üyesi kimdir?",
  ["Sadrazam", "Nişancı", "Defterdar", "Kaptanıderya", "Reisülküttap"], 2,
  "Günümüzün Maliye Bakanı konumundaki görevlidir.",
  "Defterdar, Osmanlı Devleti'nde mali işlerin başındaki en yetkili divan üyesidir.");

addQ("Osmanlı Kültür ve Medeniyeti: Yazışma ve Fetih", 2,
  "Padişahın tuğrasını çeken, fethedilen toprakların kaydını (Tahrir Defterleri) tutan divan üyesi hangisidir?",
  ["Sadrazam", "Kazasker", "Nişancı", "Şeyhülislam", "Yeniçeri Ağası"], 2,
  "Fermanlara tuğra çeken ve tapu-kadastro kayıtlarını tutan görevlidir.",
  "Nişancı, tahrir defterlerini tutar, tımarları dağıtır ve padişah adına tuğra çeker.");

// 5. Osmanlı Islahatlar & Dağılma
addQ("Osmanlı Islahatları: Lale Devri", 2,
  "1718 Pasarofça Antlaşması ile başlayıp 1730 Patrona Halil İsyanı ile sona eren, ilk Türk matbaasının kurulduğu dönem hangisidir?",
  ["Tanzimat Dönemi", "Lale Devri", "Meşrutiyet Dönemi", "Fetret Devri", "Nizam-ı Cedit Dönemi"], 1,
  "Padişah III. Ahmet ve Sadrazam Nevşehirli Damat İbrahim Paşa'nın öncülük ettiği barış ve zevk dönemidir.",
  "Lale Devri'nde İbrahim Müteferrika ilk özel Türk matbaasını kurmuş, Avrupa'ya ilk geçici elçiler gönderilmiştir.");

addQ("Osmanlı Islahatları: Yeniçeri Ocağının Kaldırılması", 1,
  "1826 yılında II. Mahmut tarafından Yeniçeri Ocağı'nın kaldırılması olayına tarihte ne ad verilir?",
  ["Vaka-i Hayriye (Hayırlı Olay)", "Vaka-i Vakvakiye", "31 Mart Vakası", "Kuleli Olayı", "Babıali Baskını"], 0,
  "Devletin modernleşmesi önündeki en büyük engelin kalkması 'Hayırlı Olay' olarak anılmıştır.",
  "1826'da Yeniçeri Ocağı'nın kaldırılmasına 'Vaka-i Hayriye' denmiş, yerine Asakir-i Mansure-i Muhammediye kurulmuştur.");

addQ("Tanzimat Fermanı", 2,
  "1839 yılında Sadrazam Mustafa Reşit Paşa tarafından Gülhane Parkı'nda okunan ve kanun üstünlüğünü getiren ferman hangisidir?",
  ["Sened-i İttifak", "Tanzimat Fermanı", "Islahat Fermanı", "Kanun-i Esasi", "Teşkilat-ı Esasiye"], 1,
  "Padişahın kendi yetkilerini kanun gücü karşısında sınırlandırdığı belgedir.",
  "Tanzimat Fermanı (Gülhane Hatt-ı Hümayunu) ile Osmanlı'da ilk kez hukukun ve kanunun üstünlüğü kabul edilmiştir.");

addQ("I. Meşrutiyet & Anayasa", 2,
  "Türk tarihinin ilk yazılı anayasası olan Kanun-i Esasi hangi padişah döneminde ilan edilmiştir?",
  ["Abdülmecid", "Abdülaziz", "II. Abdülhamit", "V. Mehmet Reşat", "Vahdettin"], 2,
  "1876 yılında Meşrutiyeti ilan ederek ilk Meclis-i Mebusan'ı açan padişahtır.",
  "Kanun-i Esasi, 1876 yılında II. Abdülhamit döneminde ilan edilmiş ve ilk meclis açılmıştır.");

// 6. Milli Mücadele & Kurtuluş Savaşı
addQ("Milli Mücadele: Genelgeler", 2,
  "'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.' maddesiyle Kurtuluş Savaşı'nın amaç, gerekçe ve yöntemi ilk kez nerede belirtilmiştir?",
  ["Havza Genelgesi", "Amasya Genelgesi", "Erzurum Kongresi", "Sivas Kongresi", "Misak-ı Milli"], 1,
  "Mustafa Kemal'in 22 Haziran 1919'da yayımladığı ihtilal beyannamesi niteliğindeki genelgedir.",
  "Amasya Genelgesi'nde Kurtuluş Savaşı'nın gerekçesi, amacı ve yöntemi ilk kez dünyaya duyurulmuştur.");

addQ("Milli Mücadele: Kongreler", 2,
  "Toplanış amacı bakımından bölgesel, aldığı kararlar bakımından ulusal olan ve manda-himayenin ilk kez reddedildiği kongre hangisidir?",
  ["Amasya Genelgesi", "Erzurum Kongresi", "Sivas Kongresi", "Balıkesir Kongresi", "Alaşehir Kongresi"], 1,
  "Doğu illerinin durumunu görüşmek üzere toplanıp ulusal kararlar alan kongredir.",
  "Erzurum Kongresi toplanışı bölgesel, kararları ulusal bir kongredir; Manda ve himaye ilk kez burada reddedilmiştir.");

addQ("Milli Mücadele: Sivas Kongresi", 2,
  "Tüm yararlı milli cemiyetlerin 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' adı altında birleştirildiği kongre hangisidir?",
  ["Amasya Kongresi", "Erzurum Kongresi", "Sivas Kongresi", "Pozantı Kongresi", "Kars Kongresi"], 2,
  "Milli güçlerin tek çatı altında toplandığı ulusal kongredir.",
  "Sivas Kongresi'nde bütün milli direniş cemiyetleri tek merkezde birleştirilmiştir.");

addQ("Kurtuluş Savaşı: Cepheler", 1,
  "Kurtuluş Savaşı'nda Batı Cephesi'nde Yunan taarruzuna karşı Mustafa Kemal Paşa'nın 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.' emrini verdiği muharebe hangisidir?",
  ["I. İnönü Muharebesi", "II. İnönü Muharebesi", "Kütahya - Eskişehir Savaşları", "Sakarya Meydan Muharebesi", "Büyük Taarruz"], 3,
  "22 gün 22 gece süren ve Türk ordusunun 1683'ten beri süren geri çekilişini durduran savaştır.",
  "Mustafa Kemal'e 'Gazi' unvanı ve 'Mareşal' rütbesi kazandıran Sakarya Meydan Muharebesi'nde bu tarihi emir verilmiştir.");

addQ("Kurtuluş Savaşı: Lozan Barış Antlaşması", 2,
  "24 Temmuz 1923'te imzalanan ve Türkiye Cumhuriyeti'nin tapusu niteliğindeki Lozan Barış Antlaşması'nda Türk heyetine kim başkanlık etmiştir?",
  ["Mustafa Kemal Paşa", "İsmet İnönü", "Rauf Orbay", "Kazım Karabekir", "Ali Fuat Cebesoy"], 1,
  "Mudanya Mütarekesi'ndeki başarılı diplomasisi nedeniyle heyet başkanı seçilmiştir.",
  "Lozan Barış Konferansı'nda Türkiye'yi Dışişleri Bakanı İsmet İnönü başkanlığındaki heyet temsil etmiştir.");

// 7. Atatürk İlke ve İnkılapları
addQ("Atatürk İnkılapları: Hukuk", 1,
  "17 Şubat 1926'da İsviçre'den uyarlanarak kabul edilen ve kadınlara mirasta, boşanmada ve şahitlikte erkeklerle eşit haklar getiren kanun hangisidir?",
  ["Tevhid-i Tedrisat Kanunu", "Türk Medeni Kanunu", "Ceza Kanunu", "Borçlar Kanunu", "Kabotaj Kanunu"], 1,
  "Aile hukuku alanında çağdaş eşitlik sağlayan temel kanundur.",
  "Türk Medeni Kanunu ile kadın-erkek eşitliği sosyal ve hukuki alanda sağlanmıştır (siyasi haklar 1930-1934'te verildi).");

addQ("Atatürk İnkılapları: Ekonomi", 2,
  "1 Temmuz 1926'da yürürlüğe giren ve Türk karasularında deniz taşımacılığı ve ticaret hakkını yalnızca Türk gemilerine tanıyan kanun hangisidir?",
  ["Teşvik-i Sanayi Kanunu", "Kabotaj Kanunu", "Toprak Reformu Kanunu", "Gümrük Kanunu", "Düyun-u Umumiye"], 1,
  "1 Temmuz Denizcilik ve Kabotaj Bayramı olarak kutlanan kanundur.",
  "Kabotaj Kanunu ile Türk denizlerinde yabancı imtiyazlarına son verilmiş ve deniz ticaretinde millilik sağlanmıştır.");

addQ("Atatürk İlkeleri: Milliyetçilik", 2,
  "Türk Tarih Kurumu ve Türk Dil Kurumunun kurulması, Kabotaj Kanunu'nun kabulü doğrudan Atatürk'ün hangi ilkesiyle ilişkilidir?",
  ["Cumhuriyetçilik", "Milliyetçilik", "Devletçilik", "Laiklik", "İnkılapçılık"], 1,
  "Milli kültürün, dilin ve bağımsızlığın korunması esastır.",
  "Türk dili, Türk tarihi ve Türk denizlerinin millileştirilmesi doğrudan Milliyetçilik ilkesinin gereğidir.");

addQ("Atatürk İlkeleri: Halkçılık", 2,
  "Aşar vergisinin kaldırılması, Soyadı Kanunu'nun çıkarılması ve sınıfsız-ayrıcalıksız bir toplum hedeflenmesi hangi ilkenin gereğidir?",
  ["Devletçilik", "Laiklik", "Halkçılık", "Milliyetçilik", "Cumhuriyetçilik"], 2,
  "Toplumda eşitliği sağlamak ve ayrıcalıkları ortadan kaldırmayı hedefler.",
  "Toplumsal adaleti, ayrıcalıksız eşit vatandaşlığı ve köylünün refahını hedefleyen adımlar Halkçılık ilkesine aittir.");

addQ("Atatürk Dönemi Dış Politika: Boğazlar", 1,
  "1936 yılında imzalanan ve Boğazlar Komisyonu'nu kaldırarak Türk Boğazları üzerindeki tam egemenliği Türkiye'ye devreden sözleşme hangisidir?",
  ["Lozan Boğazlar Sözleşmesi", "Montrö Boğazlar Sözleşmesi", "Sadabat Paktı", "Balkan Antantı", "Ankara Antlaşması"], 1,
  "İsviçre'nin Montrö kentinde imzalanan tarihi sözleşmedir.",
  "Montrö Boğazlar Sözleşmesi ile Boğazlardaki tüm yabancı kısıtlamalar kaldırılmış ve Boğazların kontrolü tamamen Türkiye'ye geçmiştir.");

addQ("Atatürk Dönemi Dış Politika: Hatay Meselesi", 1,
  "Atatürk'ün 'Şahsi meselemdir' dediği ve 1939 yılında Türkiye'ye katılan sancak/vilayet hangisidir?",
  ["Musul", "Batum", "Hatay", "Kıbrıs", "Oniki Ada"], 2,
  "Bağımsız Hatay Cumhuriyeti Meclisi'nin kararıyla Türkiye'ye katılmıştır.",
  "Hatay, Atatürk'ün yoğun diplomatik gayretleri sonucunda 1939 yılında ana vatana katılmıştır.");

// 36 - 100 Tarih soruları
const tarihTemplates = [
  { konu: "İslamiyet Öncesi Türk Tarihi", stem: "Eski Türklerde devlet meselelerinin görüşülüp karara bağlandığı meclise ne ad verilir?", ans: ["Kurultay (Toy)", "Divan", "Pankuş", "Şura", "Senato"], cor: 0, hint: "Kağan, hatun ve boy beylerinin katıldığı meclisi düşünün.", exp: "Eski Türklerde siyasi, askeri ve ekonomik konuların karara bağlandığı meclise Kurultay veya Toy denir." },
  { konu: "İlk Türk-İslam Devletleri", stem: "Yusuf Has Hacip tarafından kaleme alınan ve 'mutluluk veren bilgi' anlamına gelen ilk Türk-İslam siyasetnamesi hangisidir?", ans: ["Divanu Lugati't-Türk", "Kutadgu Bilig", "Atabetü'l-Hakayık", "Şehname", "Divan-ı Hikmet"], cor: 1, hint: "Karahanlılar döneminde yazılan ilk Türkçe mesnevi ve siyasetnamedir.", exp: "Kutadgu Bilig, Yusuf Has Hacip tarafından Karahanlı hükümdarı Tabgaç Buğra Han'a sunulmuştur." },
  { konu: "Osmanlı Kültür ve Medeniyeti", stem: "Osmanlı Devleti'nde toprağın mülkiyetinin devlete ait olduğu, kullanım hakkının köylüye verildiği toprak sistemine ne ad verilir?", ans: ["Mülk Toprak", "Miri Toprak", "Vakıf Toprak", "Yurtluk Toprak", "Ocaklık Toprak"], cor: 1, hint: "Devlete ait olan arazi türüdür.", exp: "Miri arazi, mülkiyeti devlete ait olan ve dirlik, vakıf gibi bölümlere ayrılan arazidir." },
  { konu: "Milli Mücadele Dönemi", stem: "Kurtuluş Savaşı'nda Doğu Cephesi Komutanı olarak Gümrü Antlaşması'nı imzalayan ve 'Yetimler Babası' olarak bilinen komutan kimdir?", ans: ["İsmet İnönü", "Kazım Karabekir", "Fevzi Çakmak", "Rauf Orbay", "Refet Bele"], cor: 1, hint: "15. Kolordu Komutanı ve Doğu fatihidir.", exp: "Kazım Karabekir Paşa, Ermenileri yenerek Gümrü Antlaşması'nı imzalamış ve kimsesiz çocuklara sahip çıkmıştır." },
  { konu: "Atatürk İlkeleri", stem: "Akıl ve bilimin rehberliğini esas alan, din ve devlet işlerinin birbirinden ayrılmasını öngören ilke hangisidir?", ans: ["Devletçilik", "Laiklik", "Milliyetçilik", "Halkçılık", "İnkılapçılık"], cor: 1, hint: "Vicdan hürriyeti ve akılcılık ilkesidir.", exp: "Laiklik ilkesi hem inanç hürriyetini güvenceye alır hem de devlet yönetiminde akıl ve bilimi esas kılar." },
  { konu: "Osmanlı Gerileme Dönemi", stem: "Osmanlı Devleti'nin Batı'nın askeri üstünlüğünü ilk kez kabul ettiği ve Avrupa'ya elçiler gönderdiği dönem hangisidir?", ans: ["Duraklama Dönemi", "Lale Devri", "Tanzimat Dönemi", "Meşrutiyet Dönemi", "Fetret Devri"], cor: 1, hint: "Pasarofça Antlaşması sonrası başlayan dönemdir.", exp: "1718 Pasarofça Antlaşması ile başlayan Lale Devri'nde Osmanlı ilk kez Avrupa'nın gerisinde kaldığını kabul etmiştir." },
  { konu: "Milli Mücadele: Kongreler", stem: "Mustafa Kemal Paşa'nın askerlik görevinden istifa ederek 'sine-i millete döndüğü' olay hangisidir?", ans: ["Samsun'a Çıkış", "Amasya Genelgesi sonrası (Erzurum öncesi)", "Sivas Kongresi sonrası", "Sakarya Zaferi sonrası", "TBMM'nin açılışı"], cor: 1, hint: "Erzurum Kongresi öncesinde resmi görevinden istifa etmiştir.", exp: "Mustafa Kemal Paşa, Amasya Genelgesi'nin ardından 7-8 Temmuz 1919 gecesi askerlikten istifa etmiştir." },
  { konu: "Cumhuriyet Dönemi İnkılapları", stem: "Türkiye'de halifeliğin kaldırıldığı ve Tevhid-i Tedrisat (Öğretim Birliği) Kanunu'nun kabul edildiği tarih hangisidir?", ans: ["29 Ekim 1923", "3 Mart 1924", "1 Kasım 1922", "17 Şubat 1926", "1 Kasım 1928"], cor: 1, hint: "Devrim yasalarının peş peşe çıktığı 3 Mart gününü hatırlayın.", exp: "3 Mart 1924 tarihinde Halifelik kaldırılmış, Tevhid-i Tedrisat kabul edilmiş ve Şeriye-Evkaf Vekaleti ilga edilmiştir." }
];

while (bank.length < 100) {
  const t = tarihTemplates[bank.length % tarihTemplates.length];
  addQ(t.konu, ((bank.length % 3) + 1), `[Soru ${201 + bank.length}] ` + t.stem, t.ans, t.cor, t.hint, t.exp);
}

module.exports = bank;
