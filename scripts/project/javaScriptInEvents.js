

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
		(async () => {
		  try {
		    if (!window.liff || !liff.storage) {
		      alert("⚠️ LIFF 尚未初始化或不支援 storage");
		      return;
		    }
		
		    const score = String(runtime.globalVars.playerScore); // 確保是字串
		    await liff.storage.set("playerScore", score);
		    alert("✅ 已上傳至 LINE 雲端");
		    console.log("✅ 已上傳 playerScore =", score);
		  } catch (err) {
		    console.error("❌ 上傳失敗:", err);
		    alert("❌ 上傳失敗：" + err.message);
		  }
		})();
		
	},

	async 事件表1_Event5(runtime, localVars)
	{
		(async () => {
		  try {
		    if (!window.liff || !liff.storage) {
		      alert("⚠️ LIFF 尚未初始化或不支援 storage");
		      return;
		    }
		
		    const score = await liff.storage.get("playerScore");
		    if (score) {
		      runtime.globalVars.playerScore = String(score);
		      alert("✅ 雲端分數載入完成：" + score);
		      console.log("✅ 已載入 playerScore =", score);
		    } else {
		      alert("⚠️ 雲端尚無存檔");
		      console.log("⚠️ 雲端尚無 playerScore");
		    }
		  } catch (err) {
		    console.error("❌ 讀取失敗:", err);
		    alert("❌ 讀取失敗：" + err.message);
		  }
		})();
		
	},

	async 事件表2_Event2(runtime, localVars)
	{
		(async () => {
		  const data = await liff.storage.get("gameData");
		  if (data) {
		    runtime.globalVars.playerScore = data.score || 0;
		    runtime.globalVars.playTime = data.time || 0;
		    console.log("✅ 已載入雲端資料:", data);
		  } else {
		    console.log("⚠️ 沒有找到任何雲端存檔");
		  }
		})();
		
	},

	async 事件表2_Event3(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
