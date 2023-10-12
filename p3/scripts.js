
//To calculate average
function calculateAverage() {
    var firstValue = parseFloat(document.getElementsByName('finput')[0].value);
    var secondValue = parseFloat(document.getElementsByName('sinput')[0].value);
    var lastValue = parseFloat(document.getElementsByName('linput')[0].value);
    var out = (parseFloat(firstValue) + parseFloat(secondValue) + parseFloat(lastValue))/3;
        //const sum = num1 + num2;
        
    document.getElementsByName('output')[0].value= out;   
}

//To calculate maximum   
function calcMax(maximum){
    
    var firstValue = parseFloat(document.getElementsByName('finput')[0].value);
    var secondValue = parseFloat(document.getElementsByName('sinput')[0].value);
    var lastValue = parseFloat(document.getElementsByName('linput')[0].value);
    var maximum = Math.max(parseFloat(firstValue), parseFloat(secondValue), parseFloat(lastValue));
    //finds the maximum value of the list
        
    document.getElementsByName('maxOut')[0].value= maximum;     
}
    
//To calculate mimimum
function calcMin(minimum){
    
    var firstValue = parseFloat(document.getElementsByName('finput')[0].value);
    var secondValue = parseFloat(document.getElementsByName('sinput')[0].value);
    var lastValue = parseFloat(document.getElementsByName('linput')[0].value);
    var minimum = Math.min(parseFloat(firstValue), parseFloat(secondValue), parseFloat(lastValue));
    //find the minmum of the list
        
    document.getElementsByName('minOut')[0].value= minimum; 
}
 
//To calculate range
function calcRang(){
    
    var firstValue = parseFloat(document.getElementsByName('finput')[0].value);
    var secondValue = parseFloat(document.getElementsByName('sinput')[0].value);
    var lastValue = parseFloat(document.getElementsByName('linput')[0].value);
    var maxElement = Math.max(parseFloat(firstValue), parseFloat(secondValue), parseFloat(lastValue));
    var minElement = Math.min(parseFloat(firstValue), parseFloat(secondValue), parseFloat(lastValue));
    //var minElement = calcMin(Math.min);
    
    var range = maxElement - minElement; //takes the inputs and subtracts them after finding the min and max
    document.getElementsByName('range')[0].value= range; 
    
}
  
//gathers all the inputs to calculate and output the median
function myFunction() {
    
        var myArray = []; //takes inputs and puts them into an array
    
        myArray[0] = parseFloat(document.getElementById("finput").value); 
        myArray[1] = parseFloat(document.getElementById("sinput").value);
        myArray[2] = parseFloat(document.getElementById("linput").value);
        calc(myArray)
    
}

//To calculate median
function median(arr) {
    
    //var concatArray = arr.sort(function(a,b) {return a - b;}); 
    
    arr.sort(function(a,b) {return a - b;}); //sorts the array
    
    var mid = Math.floor(arr.length / 2); //now is calculating the median
    
    if (arr.length % 2) { 
            return arr[mid]; 
    }
    return (arr[mid - 1] + arr[mid]) / 2.0;

}
  
//prints the results of the median
function calc(arr) {
    
    var med = median(arr);
    
    // document.getElementByName("medOut")[0].textContent = med;
    document.getElementsByName('medOut')[0].value = med;
    //prints the results of the median
}
  
//gathers all the functions so the button in the html can trigger the display of their outputs
function allTogt(){
    calcMax();
    calculateAverage();
    calcMin();
    calcRang();
    myFunction();
}
    
    
    