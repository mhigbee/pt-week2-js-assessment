//create an array called family which has your family members in order of their age

var family = ['Jared', 'Matt' , 'Rachelle', 'Ben', 'Jon'];
  //code here



//Remove the oldest member of your family

family.splice(0,1);

  //code here



//Add a new family member as the youngest member

family.push('Sarah');
  //code here


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

for (var i = 0 ; i < family.length; i++) {
	if (family[i] === 'Tyler') {
		alert('I have a Tyler');
	}
	else {
		alert('I have no Tylers');	
	} 
}

  //Code here


// Remove the second oldest member of your family

  //Code here
family.splice(1,1);



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

var reverse = function(string) {
	string.reverse();
}
  //Function definition here

  //Call the function here

  reverse(happy);