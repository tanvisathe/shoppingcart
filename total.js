

var sumTotal = 0;
function CalcTotal(value){

	 
	
    sumTotal = sumTotal + value;
     document.getElementById("Total").value=sumTotal;
}


    
   function Clear(){
   	var tots = document.getElementById("Total");
   	tots.value="";
   	sumTotal=0;
   }



