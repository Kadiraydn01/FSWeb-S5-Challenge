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
  yazarName.textContent = `${makale.yazarAdı} tarafından`;

  cardDiv.appendChild(baslikDiv);
  cardDiv.appendChild(yazarDiv);
  yazarDiv.appendChild(imgDiv);
  imgDiv.appendChild(yazarImg);
  yazarDiv.appendChild(yazarName);

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

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
