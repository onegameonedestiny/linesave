const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.事件表1_Event2,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.TextBox.Exps.Text,
		C3.JavaScriptInEvents.事件表1_Event5,
		C3.Plugins.Button.Acts.SetText,
		C3.JavaScriptInEvents.事件表2_Event2
	];
};
self.C3_JsPropNameTable = [
	{按鈕: 0},
	{按鈕2: 0},
	{輸入框: 0},
	{文本: 0},
	{playerScore: 0},
	{playTime: 0},
	{NAME: 0}
];

self.InstanceType = {
	按鈕: class extends self.IButtonInstance {},
	按鈕2: class extends self.IButtonInstance {},
	輸入框: class extends self.ITextInputInstance {},
	文本: class extends self.ITextInstance {}
}