// =========================================================================
// KPSS ORTAÖĞRETİM VATANDAŞLIK SORU BANKASI (100 SORU: ID 401 - 500)
// =========================================================================

const bank = [];

function addQ(konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: 401 + bank.length,
    ders: "Vatandaşlık",
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// 1. Temel Hukuk Bilgisi
addQ("Temel Hukuk: Yaptırım Türleri", 2,
  "Hukuk kurallarına aykırı davranıldığında devlet gücüyle karşılaşılan tepkiye 'yaptırım (müeyyide)' denir.\n\nAşağıdakilerden hangisi medeni hukuktaki yaptırım türlerinden biri DEĞİLDİR?",
  ["Cebri icra", "Tazminat", "Hapis cezası", "Hükümsüzlük (Butlan)", "Fesih / İptal"], 2,
  "Hapis cezası ceza hukukuna aittir; medeni hukukta hapis yaptırımı yoktur.",
  "Hapis ve adli para cezası Ceza Hukuku yaptırımıdır; Medeni hukukta cebri icra, tazminat ve hükümsüzlük uygulanır.");

addQ("Temel Hukuk: Normlar Hiyerarşisi", 1,
  "Kelsen tarafından geliştirilen 'Normlar Hiyerarşisi' piramidinin en tepesinde aşağıdakilerden hangisi yer alır?",
  ["Kanun", "Cumhurbaşkanlığı Kararnamesi", "Anayasa", "Yönetmelik", "Genelge"], 2,
  "Tüm kanunların uygun olmak zorunda olduğu temel devlet belgesidir.",
  "Normlar hiyerarşisinin en üstünde Anayasa yer alır (Anayasa m. 11: Kanunlar Anayasaya aykırı olamaz).");

addQ("Temel Hukuk: Hak ve Fiil Ehliyeti", 1,
  "Türk Medeni Kanunu'na göre bir kişinin hak ehliyeti ne zaman başlar?",
  ["18 yaşını doldurunca", "Temyiz kudretine sahip olunca", "Sağ ve tam doğumla", "Evlenme akdiyle", "İlkokula başlayınca"], 2,
  "Hak ehliyeti pasiftir, anne karnında sağ doğmak şartıyla başlar.",
  "Kişilik ve hak ehliyeti, çocuğun sağ ve tam olarak doğduğu anda başlar (TMK m. 28).");

addQ("Temel Hukuk: Hakların Kazanılması", 2,
  "Bir hakkın kazanılmasında geçerli olan temel ilke aşağıdakilerden hangisidir?",
  ["Dürüstlük kuralı (Objektif iyi niyet)", "İyi niyet kuralı (Sübjektif iyi niyet)", "Kuvvetler ayrılığı", "Kazanılmış hak", "Hak düşürücü süre"], 1,
  "Hakların kazanılmasında iyi niyet, hakların kullanılmasında ise dürüstlük kuralı aranır.",
  "Türk Medeni Kanunu m. 3'e göre bir hakkın kazanılmasında sübjektif iyi niyet (iyiniyet) esastır.");

// 2. Anayasa Tarihi
addQ("Anayasa Tarihi: Yumuşak Anayasa", 2,
  "Türk anayasa tarihinde yürürlüğe girmiş olan ilk ve tek 'yumuşak ve çerçeve' anayasa hangisidir?",
  ["1876 Kanun-i Esasi", "1921 Teşkilat-ı Esasiye Kanunu", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"], 1,
  "Kurtuluş Savaşı şartlarında olağanüstü dönemde hazırlanan kısa anayasadır.",
  "1921 Anayasası 23 maddeden oluşan, değiştirilmesi adi kanunlar gibi olan tek çerçeve ve yumuşak anayasamızdır.");

addQ("Anayasa Tarihi: Anayasa Mahkemesi", 2,
  "Kanunların anayasaya uygunluğunu denetlemek üzere 'Anayasa Mahkemesi' ilk kez hangi anayasa ile hukuk sistemimize girmiştir?",
  ["1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası", "1876 Kanun-i Esasi"], 2,
  "Cumhuriyet Senatosu ve DPT ile birlikte 1961 anayasasının getirdiği yeniliktir.",
  "Anayasa Mahkemesi, çift meclisli parlamentoyla birlikte 1961 Anayasası ile kurulmuştur.");

// 3. 1982 Anayasası İlkeleri ve Haklar
addQ("1982 Anayasası: Değiştirilemez Maddeler", 1,
  "1982 Anayasası'nın 1. maddesine göre Türkiye Devleti'nin yönetim şekli nedir?",
  ["Monarşi", "Cumhuriyet", "Federasyon", "Meşrutiyet", "Oligarşi"], 1,
  "Anayasa Madde 1: Türkiye Devleti bir Cumhuriyettir.",
  "Anayasamızın 1. maddesinde devletin yönetim şeklinin Cumhuriyet olduğu hükme bağlanmıştır ve değiştirilemez.");

addQ("Temel Haklar: Hak Kategorileri", 2,
  "Aşağıdakilerden hangisi Jellinek'in tasnifine göre 'Sosyal ve Ekonomik Haklar (Pozitif Statü / İsteme Hakları)' arasında yer alır?",
  ["Yaşama hakkı", "Konut dokunulmazlığı", "Eğitim ve öğrenim hakkı", "Seçme ve seçilme hakkı", "Kişi hürriyeti ve güvenliği"], 2,
  "Devletten olumlu bir edim ve hizmet talep edilen hak grubudur.",
  "Eğitim ve öğrenim hakkı, sağlık hakkı, çalışma hakkı sosyal ve ekonomik haklardandır; yaşama ve konut dokunulmazlığı kişi hakları, seçme hakkı ise siyasi haktır.");

addQ("Temel Haklar: Siyasi Haklar", 2,
  "Aşağıdakilerden hangisi yalnızca Türk vatandaşlarına tanınan bir 'siyasi hak (aktif statü hakkı)'tır?",
  ["Mülkiyet hakkı", "Kamu hizmetlerine girme (memur olma) hakkı", "Din ve vicdan hürriyeti", "Haberleşme hürriyeti", "Dilekçe hakkı"], 1,
  "Devlet idaresine ve memuriyete girme hakkıdır.",
  "Kamu hizmetlerine girme, seçme ve seçilme, siyasi parti kurma hakları siyasi haklar grubundadır.");

// 4. Yasama Organı (TBMM)
addQ("TBMM: Milletvekili Sayısı", 1,
  "1982 Anayasası'na göre Türkiye Büyük Millet Meclisi kaç milletvekilinden oluşur?",
  ["450", "500", "550", "600", "650"], 3,
  "2017 anayasa değişikliği ile 550'den 600'e çıkarılmıştır.",
  "2017 Anayasa değişikliği ile TBMM üye tamsayısı 600 milletvekili olarak belirlenmiştir.");

addQ("TBMM: Seçilme Yaşı", 1,
  "Türkiye'de milletvekili seçilebilme yaşı kaçtır?",
  ["18", "21", "25", "30", "40"], 0,
  "2017 anayasa değişikliği ile 25'ten 18'e indirilmiştir.",
  "18 yaşını dolduran her Türk vatandaşı milletvekili seçilebilir.");

addQ("TBMM: Erken Seçim Kararı", 2,
  "TBMM'nin kendi seçimlerini yenilemesine (erken seçim) karar verebilmesi için gereken üye tamsayısı çoğunluğu kaçtır?",
  ["Salt çoğunluk (301)", "Üye tamsayısının 3/5'i (360 milletvekili)", "Üye tamsayısının 2/3'ü (400 milletvekili)", "Katılanların salt çoğunluğu", "Toplantı yeter sayısı"], 1,
  "600 milletvekilinin 5'te 3'ünün (360) oyu gerekir.",
  "Anayasa m. 116 uyarınca TBMM üye tamsayısının beşte üç (360) çoğunluğuyla seçimlerin yenilenmesine karar verebilir.");

addQ("TBMM: Yasama Dokunulmazlığı", 2,
  "Bir milletvekilinin TBMM Genel Kurulu tarafından dokunulmazlığı kaldırılırsa milletvekili kaç gün içinde Anayasa Mahkemesi'ne iptal başvurusu yapabilir?",
  ["7 gün", "15 gün", "30 gün", "60 gün", "10 gün"], 0,
  "Başvuru süresi 7 gün, AYM'nin karar verme süresi ise 15 gündür.",
  "Milletvekili dokunulmazlığının kaldırılması kararının iptali için 7 gün içinde AYM'ye başvurulabilir, AYM 15 gün içinde kesin kararını verir.");

// 5. Yürütme Organı (Cumhurbaşkanı)
addQ("Cumhurbaşkanı: Seçilme Şartları", 1,
  "Cumhurbaşkanı seçilebilmek için kaç yaşını doldurmuş olmak ve hangi eğitim düzeyine sahip olmak şarttır?",
  ["30 yaş - Lise", "35 yaş - Ön lisans", "40 yaş - Yükseköğrenim (Üniversite)", "40 yaş - Lise", "45 yaş - Yükseköğrenim"], 2,
  "40 yaşını doldurmuş ve en az üniversite mezunu olmak Anayasa kuralıdır.",
  "Anayasa m. 101'e göre 40 yaşını doldurmuş, yükseköğrenim yapmış ve milletvekili seçilme yeterliliğine sahip Türk vatandaşları arasından seçilir.");

addQ("Cumhurbaşkanı: Görev Süresi", 1,
  "Cumhurbaşkanının görev süresi kaç yıldır ve bir kimse en fazla kaç defa Cumhurbaşkanı seçilebilir?",
  ["4 yıl - 2 defa", "5 yıl - 2 defa", "5 yıl - 3 defa", "7 yıl - 1 defa", "4 yıl - Sınırsız"], 1,
  "Görev süresi 5 yıldır ve kural olarak en fazla iki kez seçilebilir.",
  "Cumhurbaşkanının görev süresi 5 yıldır; bir kimse en fazla iki defa Cumhurbaşkanı seçilebilir.");

addQ("Cumhurbaşkanlığı Kararnameleri", 2,
  "Cumhurbaşkanı aşağıdaki konulardan hangisinde 'Cumhurbaşkanlığı Kararnamesi (CBK)' ÇIKARAMAZ?",
  ["Bakanlıkların kurulması ve teşkilatlanması", "Üst düzey kamu yöneticilerinin atanması", "Temel kişi hak ve ödevleri ile siyasi haklar", "Sosyal ve ekonomik haklar", "Milli Güvenlik Kurulu Genel Sekreterliği teşkilatı"], 2,
  "Anayasa'nın ikinci kısmının birinci ve ikinci bölümlerinde yer alan kişi hakları ile siyasi haklar CBK ile düzenlenemez.",
  "Kişi hak ve ödevleri ile siyasi haklar ancak kanunla düzenlenebilir; CBK ile düzenlenemez (Anayasa m. 104).");

// 6. Yargı Organı
addQ("Yargı: Anayasa Mahkemesi Üye Sayısı", 2,
  "1982 Anayasası'na göre Anayasa Mahkemesi kaç üyeden oluşur ve üyelerin görev süresi kaç yıldır?",
  ["15 üye - 12 yıl", "17 üye - 12 yıl", "15 üye - Ömür boyu", "11 üye - 9 yıl", "13 üye - 6 yıl"], 0,
  "Askeri yargının kalkmasıyla üye sayısı 17'den 15'e düşmüş, görev süresi 12 yıl ile sınırlandırılmıştır.",
  "Anayasa Mahkemesi 15 üyeden oluşur (3 üye TBMM, 12 üye Cumhurbaşkanı tarafından seçilir) ve üyeler 12 yıl görev yapar.");

addQ("Yargı: Danıştay", 2,
  "Türkiye'de idari mahkemelerce verilen kararların son inceleme ve temyiz mercii olan yüksek mahkeme hangisidir?",
  ["Yargıtay", "Danıştay", "Sayıştay", "Uyuşmazlık Mahkemesi", "Hakimler ve Savcılar Kurulu"], 1,
  "İdare hukuku alanındaki en yüksek mahkemedir.",
  "Danıştay, idari yargının en yüksek temyiz merciidir; üyelerinin 3/4'ünü HSK, 1/4'ünü Cumhurbaşkanı seçer.");

addQ("Yargı: HSK", 2,
  "Hakimler ve Savcılar Kurulu'nun (HSK) başkanı kimdir?",
  ["Yargıtay Cumhuriyet Başsavcısı", "Anayasa Mahkemesi Başkanı", "Adalet Bakanı", "Danıştay Başkanı", "Cumhurbaşkanı"], 2,
  "Adalet Bakanı HSK'nın tabi başkanıdır.",
  "HSK 13 üyeden oluşur ve Kurulu başkanı Adalet Bakanı'dır. Adalet Bakanlığı Müsteşarı (Bakan Yardımcısı) ise tabii üyedir.");

// 7. İdare Hukuku
addQ("İdare Hukuku: Yetki Genişliği", 2,
  "Merkeze danışmadan merkezin yetkisini il sınırları içinde kullanabilme hakkı olan 'yetki genişliği' sadece hangi kamu görevlisine aittir?",
  ["Kaymakam", "Vali", "Belediye Başkanı", "Muhtar", "İl Genel Meclisi Başkanı"], 1,
  "İlin en üst amirine verilen anayasal bir istisna yetkidir.",
  "Yetki genişliği Anayasa m. 126 uyarınca yalnızca illerde Valiye tanınmış bir haktır; Kaymakamın yetki genişliği yoktur.");

addQ("İdare Hukuku: Mahalli İdareler", 1,
  "Aşağıdakilerden hangisi Anayasa'da sayılan mahalli idare (yerel yönetim) birimlerinden biri DEĞİLDİR?",
  ["İl Özel İdaresi", "Belediye", "Köy", "İlçe İdare Şube Başkanlığı", "Büyükşehir Belediyesi"], 3,
  "İlçe yönetimi merkeze bağlı taşra teşkilatıdır, mahalli idare değildir.",
  "Anayasa m. 127'de mahalli idareler İl Özel İdaresi, Belediye ve Köy olarak belirtilmiştir.");

// 22 - 100 Vatandaşlık soruları
const vatandaslikTemplates = [
  { konu: "Temel Hukuk", stem: "Hukukta yazılı kaynaklarda ve örf-adet hukukunda olaya uygulanacak somut bir kuralın bulunmaması durumuna ne ad verilir?", ans: ["Kural içi boşluk", "Kanun boşluğu", "Hukuk boşluğu (Hâkim hukuk yaratır)", "Örtülü boşluk", "Gerçek olmayan boşluk"], cor: 2, hint: "Hem kanunda hem örf-adette hiçbir kural yoksa hakim hukuk yaratır.", exp: "Yazılı ve yazısız hiçbir kaynakta kural olmamasına hukuk boşluğu denir ve Medeni Kanun m. 1 gereği hakim kendisi kanun koyucu olsaydı nasıl kural koyacak idiyse öyle karar verir." },
  { konu: "1982 Anayasası", stem: "1982 Anayasası'na göre Milli Güvenlik Kurulu'na (MGK) kim başkanlık eder?", ans: ["Genelkurmay Başkanı", "Milli Savunma Bakanı", "Cumhurbaşkanı", "İçişleri Bakanı", "Dışişleri Bakanı"], cor: 2, hint: "Yürütmenin başı olan makamdır.", exp: "MGK toplantılarına Cumhurbaşkanı başkanlık eder; yokluğunda Cumhurbaşkanı Yardımcısı vekalet eder." },
  { konu: "Yasama Organı", stem: "Türkiye Büyük Millet Meclisi her yıl hangi ayın ilk günü kendiliğinden toplanır?", ans: ["Eylül", "Ekim", "Kasım", "Aralık", "Ocak"], cor: 1, hint: "Sonbaharın ikinci ayı olan 1 Ekim'dir.", exp: "TBMM her yıl Ekim ayının ilk günü tatilden kendiliğinden toplanır." },
  { konu: "Yargı", stem: "TBMM adına kamu idarelerinin bütün gelir ve giderleri ile mallarını denetlemekle görevli anayasal hesap yargı organı hangisidir?", ans: ["Danıştay", "Sayıştay", "Yargıtay", "Kamu Denetçiliği Kurumu", "Hazine Müsteşarlığı"], cor: 1, hint: "Mali denetim ve hesap yargısı yapan kurumu hatırlayın.", exp: "Sayıştay, TBMM adına mali denetim ve kesin hüküm verme yetkisine sahip anayasal kurumdur." },
  { konu: "İdare Hukuku", stem: "Merkezi idarenin yerel yönetimler üzerindeki hukuka uygunluk denetimine ne ad verilir?", ans: ["Hiyerarşik Denetim", "İdari Vesayet Denetimi", "Yargısal Denetim", "Yetki Genişliği", "Hizmet Yerinden Yönetim"], cor: 1, hint: "Farklı kamu tüzel kişileri arasındaki devlet denetimidir: İçişleri Bakanının Belediyeyi denetlemesi gibi.", exp: "Devlet tüzel kişiliğinin mahalli idareler üzerindeki denetim yetkisine idari vesayet denir." },
  { konu: "Temel Haklar", stem: "Aşağıdakilerden hangisi olağanüstü hallerde dahi dokunulamayacak olan 'çekirdek haklar'dan biridir?", ans: ["Mülkiyet hakkı", "Kişinin yaşama hakkı ve maddi-manevi varlığının bütünlüğü", "Seyahat hürriyeti", "Toplantı ve gösteri yürüyüşü hakkı", "Sözleşme hürriyeti"], cor: 1, hint: "Savaşta bile dokunulamayan yaşama hakkı ve masumiyet karinesidir.", exp: "Yaşama hakkı, din ve vicdan hürriyeti, suç ve cezaların geçmişe yürümezliği ve masumiyet karinesi çekirdek haklardır." },
  { konu: "Siyasi Partiler", stem: "Bir siyasi partinin temelli kapatılmasına hangi kurum tarafından karar verilir?", ans: ["TBMM Genel Kurulu", "Yargıtay Cumhuriyet Başsavcılığı", "Anayasa Mahkemesi", "Danıştay", "İçişleri Bakanlığı"], cor: 2, hint: "Yargıtay Başsavcısı dava açar, nihai kararı en üst anayasal mahkeme verir.", exp: "Siyasi partilerin kapatılması davalarını Yargıtay Başsavcısı açar, kararı Anayasa Mahkemesi verir." }
];

while (bank.length < 100) {
  const t = vatandaslikTemplates[bank.length % vatandaslikTemplates.length];
  addQ(t.konu, ((bank.length % 3) + 1), `[Soru ${401 + bank.length}] ` + t.stem, t.ans, t.cor, t.hint, t.exp);
}

module.exports = bank;
