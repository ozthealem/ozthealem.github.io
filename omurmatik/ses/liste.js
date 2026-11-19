// Oyunun MP3 dosyasından çalan sesleri. Ad = dosya adı (ses/<ad>.mp3). Listede olmayan ses kod tarifinden çalar.
// Seçim Serdar 18 Kas 2026 (Test/ses_kiyas.html). Kaynaklar:
//   Stable Audio Open 1.0 (Test/ses_sao, tohumlu): dugme 7, acil 7, kazanma 8, secim 3, devam 2, yil_isle 2, yil_bitti 1, pencere 3, hayvan_kedi 3, hayvan_kopek 1
//   SFX Brew (Test/ses_brew2): cek 3 (coin), gazete 1 (pageTurn), az_para 4 (error)
//   sebo.ai 2. tur (Test/ses_tur2): veraset, hayvan_balik, hayvan_kus, kaybetme
// Ses seti 4 (Test/ses_set4, Stable Audio): kaydirici 5, zarf_ac 1 (-6 dB), algi_tebrik 3, arsiv_ac 2 (-6 dB), arsiv_kapa 1, veraset = kotu_haber 5.
// Kalkan: yil_bitti. Kod tarifinden: kesinti.
window.SES_LISTE = ["dugme", "secim", "devam", "yil_isle", "pencere", "cek", "acil", "az_para", "veraset", "hayvan_balik", "hayvan_kus", "hayvan_kedi", "hayvan_kopek", "gazete", "kazanma", "kaybetme", "kaydirici", "zarf_ac", "algi_tebrik", "arsiv_ac", "arsiv_kapa"];
