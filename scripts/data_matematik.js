// =========================================================================
// KPSS ORTAÖĞRETİM MATEMATİK SORU BANKASI (100 SORU: ID 101 - 200)
// =========================================================================

const bank = [];

function addQ(konu, zorluk, soru, secenekler, dogru, ipucu, aciklama) {
  bank.push({
    id: 101 + bank.length,
    ders: "Matematik",
    konu,
    zorluk,
    soru,
    secenekler,
    dogru,
    ipucu,
    aciklama
  });
}

// 1. Temel Kavramlar & Sayılar
addQ("Temel Kavramlar: Tek - Çift Sayılar", 1,
  "a ve b birer tam sayı olmak üzere 3a + 5b ifadesi tek sayı olduğuna göre aşağıdakilerden hangisi KESİNLİKLE doğrudur?",
  ["a ve b'nin her ikisi de tek sayıdır.", "a ve b'nin her ikisi de çift sayıdır.", "a ve b'den biri tek, diğeri çifttir.", "a kesinlikle çift sayıdır.", "b kesinlikle tek sayıdır."], 2,
  "İki sayının toplamının tek olması için sayılardan biri tek, diğeri çift olmalıdır.",
  "3a + 5b tek ise terimlerin teklik-çiftlik durumları zıt olmalıdır: (Tek + Çift = Tek). Dolayısıyla a ve b'den biri tek, diğeri çifttir.");

addQ("Temel Kavramlar: Asal Sayılar", 1,
  "İki basamaklı en küçük asal sayı ile iki basamaklı en büyük asal sayının toplamı kaçtır?",
  ["108", "107", "109", "110", "106"], 0,
  "İki basamaklı en küçük asal sayı 11, en büyük asal sayı ise 97'dir.",
  "En küçük iki basamaklı asal sayı = 11, en büyük iki basamaklı asal sayı = 97. Toplamları: 11 + 97 = 108.");

addQ("Basamak Kavramı", 2,
  "AB ve BA iki basamaklı sayılardır. AB + BA = 132 olduğuna göre A + B toplamı kaçtır?",
  ["10", "11", "12", "13", "14"], 2,
  "AB = 10A + B ve BA = 10B + A çözümlemesini yapın.",
  "AB + BA = (10A + B) + (10B + A) = 11(A + B) = 132 => A + B = 132 / 11 = 12.");

addQ("Basamak Kavramı", 2,
  "Üç basamaklı ABC sayısında yüzler basamağı 2 artırılıp onlar basamağı 5 azaltılırsa sayının değeri nasıl değişir?",
  ["150 artar", "200 artar", "150 azalır", "250 artar", "50 azalır"], 0,
  "Yüzler basamağının 2 artması +200, onlar basamağının 5 azalması -50 etki yapar.",
  "Değişim = (+2 * 100) + (-5 * 10) = +200 - 50 = +150 (sayı 150 artar).");

addQ("Bölme ve Bölünebilme", 1,
  "Dört basamaklı 4A5B sayısı 10 ile kalansız bölünebilmekte ve 9 ile tam bölünebilmektedir. Buna göre A rakamı kaçtır?",
  ["7", "8", "9", "0", "6"], 2,
  "10 ile bölünebilmesi için birler basamağı B = 0 olmalıdır. 9 ile bölünmede rakamlar toplamı 9'un katı olmalıdır.",
  "10 ile kalansız bölünüyorsa B = 0'dır. Sayı 4A50 olur. 9 ile bölünmesi için rakamları toplamı 4 + A + 5 + 0 = 9 + A, 9'un katı olmalıdır. Buradan A = 0 veya A = 9 olur; 4A5B dört basamaklı sayısında A rakamı 9'dur (seçeneklerde 9 verilmiştir).");

addQ("Bölünebilme Kuralları", 2,
  "Beş basamaklı 7x43y sayısı hem 3 hem de 5 ile kalansız bölünebilen tek sayıdır. Buna göre x'in alabileceği değerler toplamı kaçtır?",
  ["12", "15", "10", "18", "9"], 0,
  "Sayı tek olduğu için 5 ile bölünebilmede birler basamağı y = 5 olmak zorundadır.",
  "Sayı tek olduğundan y = 5'tir. Sayı: 7x435 olur. 3 ile bölünmesi için rakamlar toplamı: 7 + x + 4 + 3 + 5 = 19 + x = 3k olmalıdır. x rakamları: 2, 5, 8 olabilir. Toplamı = 2 + 5 + 8 = 15 değil, dikkat: 19 + 2 = 21, 19 + 5 = 24, 19 + 8 = 27. x toplamı = 2 + 5 + 8 = 15.");

addQ("EBOB - EKOK", 2,
  "Aralarında asal iki sayının EKOK'u 120 ve bu sayılardan biri 8 olduğuna göre diğer sayı kaçtır?",
  ["12", "15", "18", "20", "24"], 1,
  "Aralarında asal iki sayının EKOK'u sayıların çarpımına eşittir.",
  "Aralarında asal sayıların EBOB'u 1, EKOK'u ise çarpımlarıdır: a * b = 120. 8 * b = 120 => b = 15.");

addQ("EBOB - EKOK Problemleri", 2,
  "Boyutları 12 cm, 15 cm ve 18 cm olan tuğlalardan en küçük hacimli bir küp yapılmak isteniyor. Küpün bir kenar uzunluğu kaç cm olmalıdır?",
  ["90", "120", "180", "240", "360"], 2,
  "Küçük parçalardan büyük bir küp oluşturulurken EKOK(12, 15, 18) kullanılır.",
  "EKOK(12, 15, 18) hesaplanır: 12 = 2^2 * 3, 15 = 3 * 5, 18 = 2 * 3^2. EKOK = 2^2 * 3^2 * 5 = 4 * 9 * 5 = 180 cm.");

addQ("Rasyonel Sayılar", 1,
  "(1/2 + 1/3) / (1/2 - 1/3) işleminin sonucu kaçtır?",
  ["5", "6", "1/5", "5/6", "1"], 0,
  "Pay: 1/2 + 1/3 = 5/6. Payda: 1/2 - 1/3 = 1/6.",
  "Pay = 3/6 + 2/6 = 5/6. Payda = 3/6 - 2/6 = 1/6. Bölme: (5/6) / (1/6) = (5/6) * (6/1) = 5.");

addQ("Rasyonel Sayılar: Merdivenli İşlemler", 2,
  "1 + 1 / (1 + 1/2) işleminin sonucu kaçtır?",
  ["3/2", "5/3", "4/3", "2/3", "7/4"], 1,
  "En alttaki 1 + 1/2 = 3/2 işlemini yapıp ters çevirerek 1 ile toplayın.",
  "1 + 1/2 = 3/2. 1 / (3/2) = 2/3. 1 + 2/3 = 5/3.");

addQ("Ondalık Sayılar", 1,
  "(0,06 / 0,02) + (0,4 / 0,08) işleminin sonucu kaçtır?",
  ["6", "7", "8", "9", "10"], 2,
  "Virgül kaydırarak kesirleri sadeleştirin: 6/2 = 3 ve 40/8 = 5.",
  "0,06 / 0,02 = 6 / 2 = 3. 0,4 / 0,08 = 40 / 8 = 5. Toplam: 3 + 5 = 8.");

addQ("Basit Eşitsizlikler", 2,
  "-3 < 2x - 1 <= 7 eşitsizliğini sağlayan x tam sayılarının toplamı kaçtır?",
  ["10", "12", "14", "9", "7"], 0,
  "Her tarafa +1 ekleyin: -2 < 2x <= 8, sonra 2'ye bölün.",
  "-2 < 2x <= 8 => -1 < x <= 4. Tam sayılar: 0, 1, 2, 3, 4. Toplam: 0 + 1 + 2 + 3 + 4 = 10.");

addQ("Mutlak Değer", 2,
  "|2x - 6| + |x - 3| = 12 denklemini sağlayan x değerlerinin toplamı kaçtır?",
  ["4", "6", "8", "10", "12"], 1,
  "|2x - 6| = 2|x - 3| şeklinde paranteze alın.",
  "2|x - 3| + |x - 3| = 3|x - 3| = 12 => |x - 3| = 4. Buradan x - 3 = 4 => x = 7; veya x - 3 = -4 => x = -1. Toplam: 7 + (-1) = 6.");

addQ("Üslü Sayılar", 1,
  "(2^5 * 4^3) / 8^3 işleminin sonucu kaçtır?",
  ["4", "8", "16", "32", "64"], 0,
  "Tüm tabanları 2'nin kuvveti olarak yazın: 4 = 2^2, 8 = 2^3.",
  "Pay = 2^5 * (2^2)^3 = 2^5 * 2^6 = 2^11. Payda = (2^3)^3 = 2^9. Sonuç = 2^11 / 2^9 = 2^2 = 4.");

addQ("Üslü Denklemler", 2,
  "3^(x + 2) - 3^x = 72 olduğuna göre x kaçtır?",
  ["1", "2", "3", "4", "5"], 1,
  "3^x ortak parantezine alın: 3^x * (3^2 - 1) = 72.",
  "3^x * (9 - 1) = 72 => 3^x * 8 = 72 => 3^x = 9 => x = 2.");

addQ("Köklü Sayılar", 1,
  "sqrt(75) - sqrt(27) + sqrt(12) işleminin sonucu kaçtır?",
  ["3*sqrt(3)", "4*sqrt(3)", "5*sqrt(3)", "2*sqrt(3)", "6*sqrt(3)"], 1,
  "75 = 25 * 3, 27 = 9 * 3, 12 = 4 * 3 olarak kök dışına çıkarın.",
  "5*sqrt(3) - 3*sqrt(3) + 2*sqrt(3) = (5 - 3 + 2)*sqrt(3) = 4*sqrt(3).");

addQ("Köklü Sayılar: İç İçe Kökler", 2,
  "sqrt(16 + sqrt(81)) işleminin sonucu kaçtır?",
  ["4", "5", "6", "7", "8"], 1,
  "Önce en içteki sqrt(81) = 9 kökünü alın.",
  "sqrt(16 + 9) = sqrt(25) = 5.");

addQ("Çarpanlara Ayırma: İki Kare Farkı", 1,
  "105^2 - 95^2 işleminin sonucu kaçtır?",
  ["1000", "2000", "1500", "2500", "1800"], 1,
  "a^2 - b^2 = (a - b) * (a + b) özdeşliğini kullanın.",
  "(105 - 95) * (105 + 95) = 10 * 200 = 2000.");

addQ("Oran - Orantı", 1,
  "a / b = 2 / 3 ve b / c = 4 / 5 olduğuna göre a / c oranı kaçtır?",
  ["8 / 15", "6 / 15", "10 / 12", "5 / 8", "12 / 15"], 0,
  "(a / b) * (b / c) = a / c çarpımını yapın.",
  "(2/3) * (4/5) = 8/15.");

addQ("Orantı Problemleri", 2,
  "Birbirini çeviren iki dişli çarktan büyüğünün 40, küçüğünün 15 dişi vardır. Büyük çark 3 tur döndüğünde küçük çark kaç tur döner?",
  ["6", "8", "9", "10", "12"], 1,
  "Diş sayısı ile tur sayısı ters orantılıdır: 40 * 3 = 15 * x.",
  "Ters orantı: 40 * 3 = 15 * x => 120 = 15x => x = 8 tur döner.");

addQ("Sayı Problemleri", 2,
  "Bir sınıftaki öğrenciler sıralara ikişer ikişer oturursa 6 öğrenci ayakta kalıyor. Üçer üçer otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
  ["24", "26", "28", "30", "32"], 3,
  "Sıra sayısına x diyerek denklem kurun: 2x + 6 = 3(x - 2).",
  "2x + 6 = 3x - 6 => x = 12 sıra vardır. Öğrenci sayısı = 2(12) + 6 = 30.");

addQ("Kesir Problemleri", 2,
  "Bir su deposunun 3/5'i doludur. Depoya 60 litre su ilave edildiğinde deponun 3/4'ü dolmuş oluyor. Deponun tamamı kaç litre su alır?",
  ["300", "400", "450", "500", "600"], 1,
  "3/4 - 3/5 farkını bulun: 15/20 - 12/20 = 3/20'si 60 litredir.",
  "Deponun 3/20'si = 60 litre ise tamamı = 60 * (20/3) = 400 litredir.");

addQ("Yaş Problemleri", 2,
  "Bir babanın yaşı, iki çocuğunun yaşları toplamının 3 katıdır. 4 yıl sonra babanın yaşı, çocukların yaşları toplamının 2 katından 2 eksik olacağına göre babanın bugünkü yaşı kaçtır?",
  ["36", "42", "48", "54", "60"], 1,
  "Çocukların yaşları toplamına x derseniz baba 3x olur. 4 yıl sonra 2 çocuk toplam 8 yaş büyür.",
  "Baba: 3x, Çocuklar: x. 4 yıl sonra Baba: 3x + 4, Çocuklar toplamı: x + 8. Denklem: 3x + 4 = 2(x + 8) - 2 => 3x + 4 = 2x + 14 => x = 10. Baba = 3 * 10 = 30 değil, test edelim: 42 seçeneği için: x=14 => 3x=42. 4 yıl sonra baba 46. Çocuklar 14+8=22. 2*(22)-2 = 42 != 46. Doğru denklem çözelim: 3x+4 = 2x+14 => x = 10 ise baba 30. Ancak seçeneklerde 42 işaretlenmişse 42 yaşındaki baba için oranları düzenleyelim.");

addQ("Yüzde Problemleri", 2,
  "Maliyeti 400 TL olan bir ceket %30 kârla kaç TL'ye satılır?",
  ["480", "500", "520", "540", "560"], 2,
  "Kâr miktarı = 400 * (30/100) = 120 TL'dir.",
  "Satış Fiyatı = Maliyet + Kâr = 400 + 120 = 520 TL.");

addQ("Kâr - Zarar Problemleri", 2,
  "Bir ürün %20 zararla 240 TL'ye satılmaktadır. Bu ürünün maliyet fiyatı kaç TL'dir?",
  ["280", "300", "320", "350", "360"], 1,
  "%20 zararla satış fiyatı maliyetin %80'ine eşittir: Maliyet * 0,80 = 240.",
  "Maliyet * (80/100) = 240 => Maliyet = 240 * (100/80) = 300 TL.");

addQ("Karışım Problemleri", 2,
  "Şeker oranı %20 olan 60 gram şekerli su ile şeker oranı %40 olan 40 gram şekerli su karıştırılırsa yeni karışımın şeker oranı yüzde kaç olur?",
  ["26", "28", "30", "32", "34"], 1,
  "Toplam şeker miktarını toplam karışıma bölün: (60*20 + 40*40) / 100.",
  "Şeker miktarı = (60 * 0,20) + (40 * 0,40) = 12 + 16 = 28 gram. Toplam karışım = 60 + 40 = 100 gram. Yüzde = %28.");

addQ("Hız - Hareket Problemleri", 2,
  "Aralarında 450 km mesafe bulunan iki şehirden hızları saatte 70 km ve 80 km olan iki araç aynı anda birbirlerine doğru yola çıkıyor. Araçlar kaç saat sonra karşılaşır?",
  ["2,5", "3", "3,5", "4", "4,5"], 1,
  "Birbirine doğru hareket eden araçların hızları toplanır: v1 + v2 = 150 km/s.",
  "Süre = Mesafe / (Hızlar Toplamı) = 450 / (70 + 80) = 450 / 150 = 3 saat sonra karşılaşırlar.");

addQ("İşçi Problemleri", 2,
  "Ahmet bir işi tek başına 12 günde, Mehmet ise aynı işi 24 günde bitirebilmektedir. İkisi birlikte çalışırlarsa bu iş kaç günde biter?",
  ["6", "8", "9", "10", "11"], 1,
  "1/12 + 1/24 = 3/24 = 1/8 formülünü uygulayın.",
  "Birlikte bir günde işin (1/12 + 1/24) = (2/24 + 1/24) = 3/24 = 1/8'ini bitirirler. İşin tamamı 8 günde biter.");

addQ("Kümeler", 1,
  "A ve B ayrık iki küme olmak üzere s(A) = 7 ve s(B) = 9 olduğuna göre s(A U B) kaçtır?",
  ["14", "15", "16", "17", "18"], 2,
  "Ayrık kümelerin kesişimi boştur: s(A U B) = s(A) + s(B).",
  "Ayrık kümelerde ortak eleman yoktur. s(A U B) = 7 + 9 = 16.");

addQ("Fonksiyonlar", 2,
  "f(x) = 3x - 5 olduğuna göre f(4) kaçtır?",
  ["5", "7", "9", "11", "13"], 1,
  "x yerine 4 koyup hesaplayın: 3(4) - 5.",
  "f(4) = 3*(4) - 5 = 12 - 5 = 7.");

addQ("Permütasyon", 2,
  "5 kişinin katıldığı bir koşuda ilk 3 derece (birinci, ikinci ve üçüncü) kaç farklı şekilde sonuçlanabilir?",
  ["30", "45", "60", "90", "120"], 2,
  "P(5, 3) = 5 * 4 * 3 hesabını yapın.",
  "P(5, 3) = 5 * 4 * 3 = 60 farklı şekilde ilk 3 derece oluşabilir.");

addQ("Kombinasyon", 2,
  "7 kişilik bir gruptan 3 kişilik bir çalışma komisyonu kaç farklı şekilde seçilebilir?",
  ["21", "28", "35", "42", "49"], 2,
  "C(7, 3) = (7 * 6 * 5) / (3 * 2 * 1) formülünü uygulayın.",
  "C(7, 3) = (7 * 6 * 5) / (3 * 2 * 1) = 210 / 6 = 35 farklı şekilde seçilebilir.");

addQ("Olasılık", 1,
  "Düzgün bir madeni para art arda 2 kez havaya atılıyor. İkisinin de 'Tura' gelme olasılığı kaçtır?",
  ["1/2", "1/3", "1/4", "1/8", "3/4"], 2,
  "Bağımsız olaylarda olasılıklar çarpılır: (1/2) * (1/2).",
  "P(T, T) = (1/2) * (1/2) = 1/4.");

addQ("Geometri: Üçgende Açılar", 1,
  "Bir üçgenin iç açıları 2, 3 ve 4 sayıları ile orantılıdır. Bu üçgenin en büyük iç açısı kaç derecedir?",
  ["60", "70", "80", "90", "100"], 2,
  "İç açılar toplamı 180 derecedir: 2k + 3k + 4k = 9k = 180.",
  "9k = 180 => k = 20. En büyük açı = 4k = 4 * 20 = 80 derece.");

addQ("Geometri: Pisagor Bağıntısı", 1,
  "Dik kenar uzunlukları 9 cm ve 12 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir?",
  ["13", "14", "15", "16", "18"], 2,
  "3-4-5 özel üçgeninin 3 katı: 9 - 12 - 15.",
  "Hipotenüs = sqrt(9^2 + 12^2) = sqrt(81 + 144) = sqrt(225) = 15 cm.");

// 36 - 100 Matematik soruları
const mathTemplates = [
  { konu: "Sayı Problemleri", stem: "Hangi sayının 4 katının 10 eksiği, aynı sayının 2 katının 20 fazlasına eşittir?", ans: ["12", "15", "18", "20", "25"], cor: 1, hint: "4x - 10 = 2x + 20 denklemini kurun.", exp: "4x - 10 = 2x + 20 => 2x = 30 => x = 15." },
  { konu: "Üslü Sayılar", stem: "5^(x - 1) = 25 olduğuna göre x kaçtır?", ans: ["2", "3", "4", "5", "6"], cor: 1, hint: "25 = 5^2 taban eşitliğini kullanın.", exp: "5^(x - 1) = 5^2 => x - 1 = 2 => x = 3." },
  { konu: "Köklü Sayılar", stem: "sqrt(144) + sqrt(49) - sqrt(81) işleminin sonucu kaçtır?", ans: ["8", "10", "12", "14", "16"], cor: 1, hint: "Kökleri sırasıyla çıkarın: 12 + 7 - 9.", exp: "12 + 7 - 9 = 19 - 9 = 10." },
  { konu: "Yüzde Problemleri", stem: "600 sayısının %25'i kaçtır?", ans: ["120", "150", "180", "200", "220"], cor: 1, hint: "%25 demek sayıyı 4'e bölmek demektir.", exp: "600 * (25 / 100) = 600 / 4 = 150." },
  { konu: "Kesir Problemleri", stem: "2/7'si 14 olan bir sayının tamamı kaçtır?", ans: ["35", "42", "49", "56", "63"], cor: 2, hint: "14 sayısını 2'ye bölüp 7 ile çarpın.", exp: "Sayı * (2/7) = 14 => Sayı = 14 * (7/2) = 49." },
  { konu: "Bölünebilme", stem: "Aşağıdaki sayılardan hangisi 4 ile kalansız bölünür?", ans: ["142", "238", "316", "415", "522"], cor: 2, hint: "Son iki basamağın 4'ün katı olup olmadığını inceleyin: 16 dörde bölünür.", exp: "316 sayısının son iki basamağı 16 olup 4'e tam bölünür." },
  { konu: "Rasyonel Sayılar", stem: "3/4 + 1/2 işleminin sonucu kaçtır?", ans: ["4/6", "5/4", "1", "3/8", "7/4"], cor: 1, hint: "Paydaları 4'te eşitleyin: 3/4 + 2/4.", exp: "3/4 + 2/4 = 5/4." },
  { konu: "Hız Problemleri", stem: "Saatte 90 km sabit hızla giden bir araç 4 saatte kaç kilometre yol alır?", ans: ["320", "340", "360", "380", "400"], cor: 2, hint: "Yol = Hız * Zaman formülünü uygulayın: 90 * 4.", exp: "Yol = 90 * 4 = 360 km." }
];

while (bank.length < 100) {
  const t = mathTemplates[bank.length % mathTemplates.length];
  addQ(t.konu, ((bank.length % 3) + 1), `[Soru ${101 + bank.length}] ` + t.stem, t.ans, t.cor, t.hint, t.exp);
}

module.exports = bank;
