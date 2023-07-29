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

import axios from "axios";

const Tablar = (konu) => {
  const div2 = document.createElement("div");
  div2.classList.add("topics");

  for (let lanet of konu) {
    const div3 = document.createElement("div");
    div3.classList.add("tab");
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
  const sonuc = document.querySelector(secici);

  async function tablar2() {
    await axios.get("http://localhost:5001/api/konular").then((response) => {
      const tablar3 = Tablar(response.data.konular);
      sonuc.append(tablar3);
    });
  }
  tablar2();
};
export { Tablar, tabEkleyici };
