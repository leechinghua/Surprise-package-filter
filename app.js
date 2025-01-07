// 範例商品
const products = [
  { name: "chanel粉紅甜蜜系列50ml", price: 3900 },
  { name: "chanel粉紅甜蜜系列100ml", price: 5550 },
  { name: "Miss Dior 花漾淡香水30ml", price: 2280 },
  { name: "Dior真我宣言香氛禮盒組", price: 1070 },
  { name: "hermes小香禮盒四入組", price: 2300 },
  { name: "hermes花園系列小香禮盒7.5ml*4", price: 2370 },
  { name: "雅頓第五大道女性淡香精125ml", price: 990 },
  { name: "寶格麗水能量男性淡香水100ml", price: 2890 },
  { name: "雅頓向日葵女性淡香水100ml", price: 700 },
  { name: "hermes大地男性淡香水100ml", price: 2700 },
];
// 商品輸入
const tbody = document.querySelector("#tbody");


// 將 products 資料加入到 tbody 中
products.forEach(product => {
  const tr = document.createElement("tr"); // 建立 tr 元素

  const tdName = document.createElement("td"); // 建立 td 元素 (商品名稱)
  tdName.textContent = product.name;

  const tdPrice = document.createElement("td"); // 建立 td 元素 (商品價格)
  tdPrice.textContent = `$${product.price}`; // 顯示價格格式為 $ 價格

  tr.appendChild(tdName); // 將商品名稱加入 tr
  tr.appendChild(tdPrice); // 將商品價格加入 tr

  tbody.appendChild(tr); // 將 tr 加入 tbody
});
