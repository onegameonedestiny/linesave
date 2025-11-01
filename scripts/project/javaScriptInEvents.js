

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
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

	async 事件表1_Event5(runtime, localVars)
	{
		(async () => {
		  const data = {
		    score: runtime.globalVars.playerScore,
		    time: runtime.globalVars.playTime,
		  };
		
		  await liff.storage.set("gameData", data);
		  console.log("✅ 已將資料上傳到 liff.storage");
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
