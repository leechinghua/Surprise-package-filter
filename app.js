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
products.forEach((product) => {
  const tr = document.createElement("tr"); // 建立 tr 元素

  const tdName = document.createElement("td"); // 建立 td 元素 (商品名稱)
  tdName.textContent = product.name;

  const tdPrice = document.createElement("td"); // 建立 td 元素 (商品價格)
  tdPrice.textContent = `$${product.price}`; // 顯示價格格式為 $ 價格

  tr.appendChild(tdName); // 將商品名稱加入 tr
  tr.appendChild(tdPrice); // 將商品價格加入 tr

  tbody.appendChild(tr); // 將 tr 加入 tbody
});

// 機制：輸入總價後，選出符合條件的商品組合
function findCombinations(products, targetPrice) {
  const result = [];

  function backtrack(currentCombination, currentSum, startIndex) {
    // 如果當前總和達到目標價，將組合加入結果
    if (currentSum === targetPrice) {
      result.push([...currentCombination]);
      return;
    }

    // 如果超過目標價，停止遞迴
    if (currentSum > targetPrice) {
      return;
    }

    // 遍歷商品，嘗試選擇每個商品
    for (let i = startIndex; i < products.length; i++) {
      currentCombination.push(products[i]); // 選擇當前商品
      backtrack(currentCombination, currentSum + products[i].price, i); // 遞迴，允許重複選擇
      currentCombination.pop(); // 撤銷選擇
    }
  }

  backtrack([], 0, 0); // 開始遞迴
  return result;
}
// 處理按鈕點擊事件
document.getElementById("calculateBtn").addEventListener("click", () => {
  const targetPrice = parseInt(
    document.getElementById("targetPrice").value,
    10
  ); // 獲取輸入的目標價格
  const combinationTable = document.getElementById("combinationTable");
  combinationTable.innerHTML = ""; // 清空結果區域

  if (isNaN(targetPrice) || targetPrice <= 0) {
    combinationTable.textContent = "請輸入有效的總價！";
    return;
  }

  // 計算符合的商品組合
  const combinations = findCombinations(products, targetPrice);

  // 限制只顯示前兩個組合
  const limitedCombinations = combinations.slice(0, 2);

  // 顯示結果
  if (combinations.length === 0) {
    combinationTable.textContent = "找不到符合條件的商品組合。";
  } else {
    limitedCombinations.forEach((combination, index) => {
      // 建立表格
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      // 建立表格標題
      thead.innerHTML = `
        <br>
          <tr>
            <th colspan="2">組合 ${index + 1}</th>
          </tr>
          <tr>
            <th>商品名稱</th>
            <th>價格</th>
          </tr>
        `;

      // 建立表格內容
      combination.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
          `;
        tbody.appendChild(row);
      });

      // 合併表格並插入結果區域
      combinationTable.appendChild(thead);
      combinationTable.appendChild(tbody);
      // combinationTable.appendChild(table);
    });
  }
});
