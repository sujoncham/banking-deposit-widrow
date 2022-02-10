
//widrown section


   //widrown balance statrt
   let widrowBtn = document.getElementById('widrowBtn');
   widrowBtn.addEventListener('click', function(){
       let widrowValue = document.getElementById('widrowValue').value;
       let newWidrowValue = parseFloat(widrowValue);
       let wTotal = document.getElementById('wTotal').innerHTML;
       let newWidrowTotal = parseFloat(wTotal);

       let totalNewWidrow = newWidrowTotal + newWidrowValue;
       document.getElementById('wTotal').innerHTML = totalNewWidrow.toFixed(2);

        //widrown balance end

       let totalBalance = document.getElementById('totalBalance').innerHTML;
       let newTotalBalance = parseFloat(totalBalance);

       let growsBalance = newTotalBalance - newWidrowValue;
       document.getElementById('totalBalance').innerHTML = growsBalance.toFixed(2);

   });