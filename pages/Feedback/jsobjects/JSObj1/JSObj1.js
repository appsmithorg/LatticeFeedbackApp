export default {
	myVar1: [],
	myVar2: {},
	defaultValue: " ",
	function1 (text) 
	{
    // Get the text from the text widget
    var textWidget1 = document.getElementById(Text16);
		// and assign it to a variable
    //var text = Text16.text;
		//It then gets the existing input widget using getElementById
		var existingInput1 = document.getElementById(RichTextEditor1);
		//set the value of the input widget to the value that is in the variable text above.
		//storeValue("defaultValue", "test")
		this.defaultValue = text
},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}
