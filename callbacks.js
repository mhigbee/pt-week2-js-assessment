//Make the following function calls work
  giveItName('name', function(){
    alert('Your name is ' + name);
  });

  var giveItName = function(name, cb) {
  	prompt('What is your name?')
  }

  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });

var areEvens = function(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		
	}
}
