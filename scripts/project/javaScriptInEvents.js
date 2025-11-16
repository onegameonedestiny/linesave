// ===== 查詢附近全家便利商店並同步至 Construct 3 =====
// 用於 Construct 3 的 Run JavaScript

async function checkNearbyFamilyMartC3(runtime, radiusMeters = 300) {
  try {
    console.log(`🔎 開始查詢...(${radiusMeters}m radius)`);

    // 1️⃣ 取得玩家 GPS
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 8000,
      });
    });

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    console.log("📍 玩家位置：", lat, lon);

    // 2️⃣ 計算查詢邊界框
    const delta = radiusMeters / 111000;
    const left = lon - delta;
    const right = lon + delta;
    const top = lat + delta;
    const bottom = lat - delta;

    // 3️⃣ 查詢 Nominatim API
    const queryUrl = `https://nominatim.openstreetmap.org/search?format=json&q=FamilyMart&bounded=1&viewbox=${left},${top},${right},${bottom}`;

    console.log("🔗 查詢網址：", queryUrl);

    const res = await fetch(queryUrl, {
      headers: {
        "Accept-Language": "zh-TW",
        "User-Agent": "DeepDreamGame-Test-App (deepdreamgame.tw)"
      }
    });

    if (!res.ok) throw new Error("Nominatim API 錯誤：" + res.status);
    const data = await res.json();

    // 4️⃣ 寫入 Construct 3 全域變數
    runtime.globalVars.PlayerLat = lat;
    runtime.globalVars.PlayerLon = lon;
    runtime.globalVars.FM_Count = data.length;
    runtime.globalVars.FM_ListJson = JSON.stringify(
      data.map(item => item.display_name)
    );

    // 5️⃣ 回傳資料（重要！）
    return {
      lat,
      lon,
      count: data.length,
      fmNames: data.map(item => item.display_name)
    };

  } catch (err) {
    console.error("❌ 偵測失敗：" + (err.message || err));

    runtime.globalVars.FM_Count = -1;
    runtime.globalVars.FM_ListJson = "[]";

    // 回傳 null 表示失敗
    return null;
  }
}


const scriptsInEvents = {

	async 事件表4_Event2(runtime, localVars)
	{

	},

	async 事件表4_Event5(runtime, localVars)
	{

	},

	async 事件表4_Event8(runtime, localVars)
	{

	},

	async 事件表4_Event10(runtime, localVars)
	{
		
	},

	async 事件表4_Event13(runtime, localVars)
	{

	},

	async 事件表4_Event16(runtime, localVars)
	{

	},

	async 事件表4_Event18(runtime, localVars)
	{
// ===== Nominatim 版本：查詢附近全家便利商店並列出名稱 =====
// 可直接放在 Construct 3 的 Run JavaScript 內使用
// 使用官方 API：https://nominatim.openstreetmap.org/

async function checkNearbyFamilyMart(radiusMeters = 500) {
  try {
    // 1️⃣ 取得玩家 GPS
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 8000,
      });
    });

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log("📍 玩家位置：", lat, lon);

    // 2️⃣ 計算查詢邊界框（用於 Nominatim 的 viewbox）
    const delta = radiusMeters / 111000; // 大約每 1 度 ≈ 111 公里
    const left = lon - delta;
    const right = lon + delta;
    const top = lat + delta;
    const bottom = lat - delta;

    // 3️⃣ 組合查詢 URL
    const queryUrl = `https://nominatim.openstreetmap.org/search?format=json&q=FamilyMart&bounded=1&viewbox=${left},${top},${right},${bottom}`;

    // 4️⃣ 查詢 API
    const res = await fetch(queryUrl, {
      headers: {
        "Accept-Language": "zh-TW",
        "User-Agent": "DeepDreamGame-Test-App (deepdreamgame.tw)"
      }
    });

    if (!res.ok) throw new Error("Nominatim API 錯誤：" + res.status);
    const data = await res.json();

    // 5️⃣ 若沒找到任何店
    if (data.length === 0) {
      console.log(`😅 半徑 ${radiusMeters} 公尺內沒有找到任何全家便利商店。`);
      return;
    }

    // 6️⃣ 列出店名
    console.log(`🏪 半徑 ${radiusMeters} 公尺內找到 ${data.length} 家全家便利商店：`);
    data.forEach((item, index) => {
      console.log(`${index + 1}. ${item.display_name}`);
    });

  } catch (err) {
    console.error("❌ 偵測失敗：" + (err.message || err));
  }
}

// 🔹 按鈕觸發時呼叫（查500公尺內）
checkNearbyFamilyMart(500);

	},

	async 測試_Event2(runtime, localVars)
	{
window.c3Obj = {
  message: runtime.objects.text1.getFirstInstance(),
  intertext: runtime.objects.dataInput.getFirstInstance(),
};

window.c3Obj.message.text = "歡迎進入深夢試煉！";
window.c3Obj.intertext.text = "ABC456";
document.title = `終於測試成功啦!`;
await window.InitFirebase(); // 建議加這一行等待初始化完成
	},

	async 測試_Event7(runtime, localVars)
	{
const result = await window.UpdatePlayerData(window.c3Obj.intertext.text, runtime.globalVars.lineid, { level: runtime.globalVars.Level });

if (result) {
  console.log("資料已成功更新！");
  window.c3Obj.message.text = `已更新`
} else {
  console.log("更新失敗");
  window.c3Obj.message.text = `更新失敗`
}

	},

	async 測試_Event10(runtime, localVars)
	{
(async () => {
  // 顯示查詢中
  window.c3Obj.message.text = "正在查詢附近的全家便利商店…";

  // 等待資料回來
  const result = await checkNearbyFamilyMartC3(runtime, 300);

  if (!result) {
    window.c3Obj.message.text = "❌ 查詢失敗，請稍後再試";
    return;
  }

  // 製作清單內容
  const listText = result.fmNames
    .map((name, i) => `${i + 1}. ${name}`)
    .join("\n");

  // 顯示總量 + 清單
  window.c3Obj.message.text =
    `附近共有 ${result.count} 家全家便利商店：\n\n${listText}`;
})();

	},

	async 測試_Event5(runtime, localVars)
	{
window.GetPlayerData(
  runtime.globalVars.plykey,
  runtime.globalVars.lineid
  ).then(data => {
  if (data) {
    console.log("📖 玩家資料：", data);
    window.c3Obj.message.text = `玩家資料：${data.level}`;
    // 例如可以取值
    runtime.globalVars.Level = data.level || 0;
    runtime.globalVars.FM_ListJson = JSON.stringify(data) || 0;
  } else {
    console.log("❌ 無權限或文件不存在");
    window.c3Obj.message.text = `無權限或文件不存在`
  }
});

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
