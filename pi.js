var feedback = document.getElementById('checker');

function checkpi() {
	var attempt = document.getElementById('pi').value;

	pivalue = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631";

	if (pivalue.startsWith(attempt) && attempt.length > 2) {
		feedback.innerHTML=attempt.length-2 + ' numbers after the decimal correct!';
		feedback.style.color='#008000';		
	}
	else if (pivalue.startsWith(attempt) && attempt.length <= 2) {
		feedback.innerHTML='So far so good!';
		feedback.style.color='#008000';	
	}

	else {
		feedback.innerHTML='Incorrect. Try again!';
		feedback.style.color='#FF0000';		
	}
}

document.getElementById('pi').addEventListener("input", checkpi);