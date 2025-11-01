const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.事件表1_Event4,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Button.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{按鈕: 0},
	{NAME: 0}
];

self.InstanceType = {
	按鈕: class extends self.IButtonInstance {}
}