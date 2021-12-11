
function reverseArray(elementsArray){
	
	let newArray = [];
	
	while (elementsArray.length > 0){
		newArray.push(elementsArray.pop());
	}	
	return newArray;
}

function reverseArrayInPlace(array) {
	
	for (let i = 0; i < Math.floor(array.length/2); i++){
		
		let nextElement = array[i];		
		array[i] = array[array.length - 1 - i];		
		array[array.length - 1 - i] = nextElement;
		
		nextElement = 0;
	}
	return array;
}

