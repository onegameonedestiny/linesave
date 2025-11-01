

const scriptsInEvents = {

	async 事件表1_Event4(runtime, localVars)
	{
		const n = localStorage.getItem("line_name");
		alert("line_name = " + n);
		runtime.globalVars.NAME = n;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
