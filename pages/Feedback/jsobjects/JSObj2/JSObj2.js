export default {
	myVar1: [],
	myVar2: {},
	myFun1 () { 
		// Get the radio group element
		var radioGroup = document.getElementById(RadioGroup2);

		{
			var selectedValue = RadioGroup2.selectedOptionValue;
			// Perform task based on the selected value
			switch (selectedValue) {
				case RadioGroup2.options[0].value:
					// Task for option 1
					Send_Email0.run()

					break;
				case RadioGroup2.options[1].value:
					// Task for option 2
					Send_Email0.run()

					break;
				case RadioGroup2.options[2].value:
					// Task for option 3
					Send_Email0.run()

					break;
					// Add more cases for additional options as needed
				default:
					// Default case if no matching option is found
					console.log('No task defined for this option');
					break;
			}
			//	write code here
			//	this.myVar1 = [1,2,3]
		}
	}

	,
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}