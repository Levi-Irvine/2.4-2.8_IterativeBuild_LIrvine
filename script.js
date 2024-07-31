document.getElementById('toggleButton1').addEventListener('click', function() {
	var collapsibleDiv1 = document.getElementById('collapsibleDiv1');
	
	if (collapsibleDiv1.classList.contains('collapsed')) {
		collapsibleDiv1.classList.remove('collapsed');
		collapsibleDiv1.classList.add('collapse');
	} else {
		collapsibleDiv1.classList.remove('collapse');
		collapsibleDiv1.classList.add('collapsed');
	}

	// Toggle the button color on click
	if (this.textContent === '-') {
		this.textContent = '+';
	} else {
		this.textContent = '-';
	}
});

document.getElementById('toggleButton2').addEventListener('click', function() {
	var collapsibleDiv2 = document.getElementById('collapsibleDiv2');
	
	if (collapsibleDiv2.classList.contains('collapsed')) {
		collapsibleDiv2.classList.remove('collapsed');
		collapsibleDiv2.classList.add('collapse');
	} else {
		collapsibleDiv2.classList.remove('collapse');
		collapsibleDiv2.classList.add('collapsed');
	}

	// Toggle the button color on click
	if (this.textContent === '-') {
		this.textContent = '+';
	} else {
		this.textContent = '-';
	}
});

document.getElementById('toggleButton3').addEventListener('click', function() {
	var collapsibleDiv3 = document.getElementById('collapsibleDiv3');
	
	if (collapsibleDiv3.classList.contains('collapsed')) {
		collapsibleDiv3.classList.remove('collapsed');
		collapsibleDiv3.classList.add('collapse');
	} else {
		collapsibleDiv3.classList.remove('collapse');
		collapsibleDiv3.classList.add('collapsed');
	}

	// Toggle the button color on click
	if (this.textContent === '-') {
		this.textContent = '+';
	} else {
		this.textContent = '-';
	}
});