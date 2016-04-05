(function() {
	//GLOBAL VARIABLES

	//Find calculate button
	var calculatePizzasButton = document.querySelector("[data-ui='calculatePizzasButton']");
	
	//Find pieces per person input
	var piecesPerPersonInput = document.querySelector("[data-ui='piecesPerPersonInput']");
	//Find pieces per person output (these are elements where the output number is going)
	var piecesPerPerson = document.querySelector("[data-ui='piecesPerPerson']");
	
	//Find number of people input
	var numberOfPeopleInput = document.querySelector("[data-ui='numberOfPeopleInput']")
	//Find number of people output (these are elements where the output number is going)
	var numberOfPeople = document.querySelector("[data-ui='numberOfPeople']")

	//Find total number of slices output (these are elements where the output number is going)
	var totalNumberOfSlices = document.querySelector("[data-ui='totalNumberOfSlices']")
	//Find total number of people output (these are elements where the output number is going)
	var totalNumberOfPizzas = document.querySelector("[data-ui='totalNumberOfPizzas']")

	//Get and set value of pieces per person
	var piecesPerPersonValue = 0;
	var numberOfPeopleValue = 0;
	var totalNumberOfPizzasValue = 0;
	var totalNumberOfSlicesValue = 0;

	//Pizza slice conversion rate as a variable
	var PIZZA_SLICE_CONVERSION_RATE = 8

	//Click calculate(submit)
	calculatePizzasButton.addEventListener('click', function(e) {
		//Prevent default for submit button
		e.preventDefault();
		//console.log(e, "I was clicked");

		//Get and set value of pieces per person
		//Reset value of pieces per person and convert value to number via parse float
		piecesPerPersonValue = parseFloat(piecesPerPersonInput.value);

		//Reset value of pieces per person and convert value to number via parse float
		numberOfPeopleValue = parseFloat(numberOfPeopleInput.value);

		//Ensuring we calculate based on our input values before updating UI
		updateTotalNumberOfSlices();
		updateTotalNumberOfPizzas();

		//Updating the UI with proper numbers
		updateUI();
	});

	//Each pizza has 8 slices 
	//Number of pizzas need and number of slices

	function updateTotalNumberOfSlices(){
		//Each pizza has 8 slices
		totalNumberOfSlicesValue = (piecesPerPersonValue * numberOfPeopleValue);
	}

	//Calculate and update total number of pizzas

	function updateTotalNumberOfPizzas(){
		//dividing numbers to get total number of pizzas
		totalNumberOfPizzasValue = Math.ceil(totalNumberOfSlicesValue / PIZZA_SLICE_CONVERSION_RATE);
	}



	//Containing all of the output changes

	function updateUI() {
		//Update pieces per person output with the value

		//Update pieces per person output
		//console.log(piecesPerPerson, piecesPerPersonValue);
		piecesPerPerson.innerHTML = piecesPerPersonValue;	

		//Update number of people output
		numberOfPeople.innerHTML = numberOfPeopleValue;

		//Update total number of slices output with value of pizza slice equation
		totalNumberOfSlices.innerHTML = totalNumberOfSlicesValue;

		//Update total number of slices output with value of pizzas equation
		totalNumberOfPizzas.innerHTML = totalNumberOfPizzasValue;
	}


})();