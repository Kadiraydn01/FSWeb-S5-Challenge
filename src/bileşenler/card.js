import axios from "axios";

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const baslikDiv = document.createElement("div");
  baslikDiv.classList.add("headline");
  baslikDiv.textContent = makale.anabaslik;
  const yazarDiv = document.createElement("div");
  yazarDiv.classList.add("author");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  const yazarImg = document.createElement("img");
  yazarImg.src = makale.yazarFoto;
  const yazarName = document.createElement("span");
  yazarName.textContent = makale["yazarAdi"] + " tarafından";
  cardDiv.append(baslikDiv);
  cardDiv.append(yazarDiv);
  yazarDiv.append(imgDiv);
  imgDiv.append(yazarImg);
  yazarDiv.append(yazarName);

  cardDiv.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });
  return cardDiv;
};
// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/nmakaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
const cardEkleyici = (secici) => {
  const sonuc = document.querySelector(secici);
  async function card2() {
    await axios.get("http://localhost:5001/api/makaleler").then((response) => {
      const card3 = Card(response.data.makaleler);
      console.log(response.data.makaleler);

      const bootStrap1 = response.data.makaleler.bootstrap;
      bootStrap1.forEach((lanet) => {
        sonuc.append(Card(lanet));
      });
      const javaScript = response.data.makaleler.javascript;
      javaScript.forEach((lanet) => {
        sonuc.append(Card(lanet));
      });
      const teknoloji = response.data.makaleler.teknoloji;
      teknoloji.forEach((lanet) => {
        sonuc.append(Card(lanet));
      });
      const jquery = response.data.makaleler.jquery;
      jquery.forEach((lanet) => {
        sonuc.append(Card(lanet));
      });
      const nodejs = response.data.makaleler["node.js"];
      nodejs.forEach((lanet) => {
        sonuc.append(Card(lanet));
      });
    });
  }
  card2();
};

export { Card, cardEkleyici };
