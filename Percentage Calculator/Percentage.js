var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var result = document.getElementById('result');
var form = document.getElementById('pecentageCalculator');

function mySelection() {
    var a = document.getElementById('list').value;
    console.log(a);
    return a;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if(!input1.value || !input2.value)
        {
        alert('Please inter X and Y');
        }
    else if(mySelection()==='1')
        {
            
        var x= parseFloat(input1.value); 
        var y= parseFloat(input2.value);   
        var answer= (x*y)/100;
        result.innerText = "Result: "+ answer;
            event.preventDefault();
        }
      else if(mySelection()==='2')
        {
            
        var x= parseFloat(input1.value); 
        var y= parseFloat(input2.value);   
        var answer= (y/x)*100;
        result.innerText = "Result: "+ answer+ "%";
            event.preventDefault();
        }
    else if(mySelection()==='3')
        {
            
        var x= parseFloat(input1.value); 
        var y= parseFloat(input2.value);   
        var answer=(x/y)*100 ;
        result.innerText = "Result: "+ answer;
            event.preventDefault();
        }
    
});