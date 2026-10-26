// =========================================================================
// KPSS ORTAÖĞRETİM MASTER BUILD & INJECT SCRIPT
// 600 Soru (Her Ders 100 Soru) & Soft Pastel Profesyonel Arayüz
// =========================================================================

const fs = require('fs');
const path = require('path');

const turkce = require('./data_turkce.js');
const matematik = require('./data_matematik.js');
const tarih = require('./data_tarih.js');
const cografya = require('./data_cografya.js');
const vatandaslik = require('./data_vatandaslik.js');
const guncel = require('./data_guncel.js');

const allQuestions = [...turkce, ...matematik, ...tarih, ...cografya, ...vatandaslik, ...guncel];
console.log(`Loaded ${allQuestions.length} total questions.`);
if (allQuestions.length !== 600) {
  throw new Error(`Expected 600 questions, got ${allQuestions.length}`);
}

const htmlPath = path.resolve(__dirname, '../app/src/main/assets/index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. SORULAR DİZİSİNİ DEĞİŞTİR
const startMarker = '    const SORULAR = [';
const startIdx = html.indexOf(startMarker);
if (startIdx === -1) {
  throw new Error('Could not find startMarker "const SORULAR = ["');
}

const storageMarker = '// UYGULAMA DURUMU (STATE MANAGEMENT & LOCAL STORAGE)';
const storageIdx = html.indexOf(storageMarker);
if (storageIdx === -1) {
  throw new Error('Could not find storageMarker');
}

// Banner başlangıcını bul (önceki '// =======')
const bannerMarker = '// =========================================================================';
const prevBannerIdx = html.lastIndexOf(bannerMarker, storageIdx);
const cutIdx = prevBannerIdx !== -1 ? prevBannerIdx : storageIdx;

const questionsJson = JSON.stringify(allQuestions, null, 2);
const newSorularDeclaration = `    const SORULAR = ${questionsJson};`;

html = html.substring(0, startIdx) + newSorularDeclaration + '\n\n    ' + html.substring(cutIdx);

// 2. 120 SORULUK GENEL DENEME DAĞILIMI GÜNCELLEMESİ (ÖSYM Resmi Formatı)
const oldDistRegex = /const distribution = \[\s*\{ ders: 'Türkçe', count: \d+ \},\s*\{ ders: 'Matematik', count: \d+ \},\s*\{ ders: 'Tarih', count: \d+ \},\s*\{ ders: 'Coğrafya', count: \d+ \},\s*\{ ders: 'Vatandaşlık', count: \d+ \},\s*\{ ders: 'Güncel Bilgiler', count: \d+ \}\s*\];/;
const newDistCode = `const distribution = [
        { ders: 'Türkçe', count: 30 },
        { ders: 'Matematik', count: 30 },
        { ders: 'Tarih', count: 27 },
        { ders: 'Coğrafya', count: 18 },
        { ders: 'Vatandaşlık', count: 9 },
        { ders: 'Güncel Bilgiler', count: 6 }
      ];`;

if (oldDistRegex.test(html)) {
  html = html.replace(oldDistRegex, newDistCode);
  console.log('Updated 120-question general deneme distribution to exact ÖSYM ratio (30+30+27+18+9+6 = 120).');
} else {
  console.log('Distribution already up-to-date or custom.');
}

// 3. BAŞLIK VE SAYILARI GÜNCELLE
html = html.replace('Dersler & Konular (160 Soru)', 'Dersler & Konular (600 Soru)');
html = html.replace('<strong id="badge-count-turkce">50 Soru</strong>', '<strong id="badge-count-turkce">100 Soru</strong>');
html = html.replace('<strong id="badge-count-matematik">26 Soru</strong>', '<strong id="badge-count-matematik">100 Soru</strong>');
html = html.replace('<strong id="badge-count-tarih">24 Soru</strong>', '<strong id="badge-count-tarih">100 Soru</strong>');
html = html.replace('<strong id="badge-count-cografya">22 Soru</strong>', '<strong id="badge-count-cografya">100 Soru</strong>');
html = html.replace('<strong id="badge-count-vatandaslik">20 Soru</strong>', '<strong id="badge-count-vatandaslik">100 Soru</strong>');
html = html.replace('<strong id="badge-count-guncel">18 Soru</strong>', '<strong id="badge-count-guncel">100 Soru</strong>');

// Temizle olası eski artıklar
html = html.replace(/\n\s*==\s*\n/g, '\n');

// 4. Dosyaları yaz ve kök dizine de eşitle
fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`Saved updated HTML to: ${htmlPath}`);

const rootHtmlPath = path.resolve(__dirname, '../index.html');
fs.writeFileSync(rootHtmlPath, html, 'utf8');
console.log(`Synced to root HTML: ${rootHtmlPath}`);

console.log('Build script finished successfully!');
