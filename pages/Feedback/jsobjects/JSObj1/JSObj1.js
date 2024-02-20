export default {
	myVar1: [],
	myVar2: {},
	function1 () 
	{
    // Get the text from the text widget
    var textWidget1 = document.getElementById(Text16);
		// and assign it to a variable
    var text = Text16.text;
		//It then gets the existing input widget using getElementById
		var existingInput1 = document.getElementById(Input2);
		//set the value of the input widget to the value that is in the variable text above.
		Input2.setValue(text)
   
},
	function2 () 
	{
    // Get the text from the text widget
    var textWidget2 = document.getElementById(Text17);
		// and assign it to a variable
    var text = Text17.text;
		//It then gets the existing input widget using getElementById
		var existingInput2 = document.getElementById(Input2);
		//set the value of the input widget to the value that is in the variable text above.
		Input2.setValue(text)
   
},
	function3 () 
	{
    // Get the text from the text widget
    var textWidget2 = document.getElementById(Text18);
		// and assign it to a variable
    var text = Text18.text;
		//It then gets the existing input widget using getElementById
		var existingInput2 = document.getElementById(Input2);
		//set the value of the input widget to the value that is in the variable text above.
		Input2.setValue(text)
		
   
},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}
