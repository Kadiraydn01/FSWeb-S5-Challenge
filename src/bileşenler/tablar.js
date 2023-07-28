// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>

// import { response } from "express";
// import { errors } from "msw/lib/types/context";
// import { rest } from "msw";
//
const Tablar = (konu) => {
  const div2 = document.createElement("div");
  div2.classList.add("topics");

  for (let lanet of konu) {
    const div3 = document.createElement("div");

    div3.textContent = lanet;
    div2.appendChild(div3);
  }

  return div2;
};
// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const tabEkleyici = (secici) => {
  const apiUrl = "http://localhost:5001/api/konular";
  const sorun = new XMLHttpRequest();
  sorun.open("GET", apiUrl, true);
  sorun.onload = function () {
    if (sorun.status >= 200 && sorun.status < 300) {
      const cevap = JSON.parse(sorun.cevap);
      const dizi2 = cevap.konu;
      const element = Tablar(dizi2);
      const sonuc = document.querySelector(secici);
      sonuc.appendChild(element);
    } else {
      console.log("API hatası:", sorun.status, sorun.statusText);
    }
  };
  sorun.onerror = function () {
    console.log("API hatası: Bağlantı hatası");
  };
  sorun.send;
};

export { Tablar, tabEkleyici };
