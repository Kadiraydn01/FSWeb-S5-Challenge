// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const Header = (baslik, tarih, yazi) => {
  const div1 = document.createElement("div");
  div1.classList.add("header");
  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  const baslik1 = document.createElement("h1");
  baslik1.textContent = baslik;
  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;

  div1.appendChild(span1);
  div1.appendChild(baslik1);
  div1.appendChild(span2);

  return div1;
};
// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
const headerEkleyici = (secici) => {
  const baslik = "Hoşgeldiniz";
  const tarih = "15 Şubat 1996";
  const yazi = "Bugün çok güzel bir gün.";

  const header1 = Header(baslik, tarih, yazi);
  const sonuc = document.querySelector(secici);
  sonuc.appendChild(header1);
};

export { Header, headerEkleyici };
