//login section

let submitBtn = document.getElementById("submit-btn");
let banking = document.getElementById("banking");
let entryList = document.getElementById("entrylist");
banking.style.display = "none";
entryList.style.display = "none";
submitBtn.addEventListener("click", function () {
    let loginDiv = document.getElementById("login");
    let account = document.getElementById("account").value;
    let password = document.getElementById("password").value;
    // loginDiv.style.display = "none";
    let text;
    if (account === "" && password === "") {
        text = "Account Number or Pasword is Required";
    } else if (account === "sujon" && password === "1234") {
        loginDiv.style.display = "none";
        banking.style.display = "block";
        entryList.style.display = "block";
    } else {
        text = "Something is Wrong !";
    }
    document.getElementById("alert-text").innerText = text;
});

//End login part


//deposit Part

// start data table info
let count = 0;

let account = document.getElementById("account");

var dayTime = new Date();
var myTime = dayTime.toLocaleString();

let depoistBtn = document.getElementById("depoistBtn");

depoistBtn.addEventListener("click", function () {
    count++;
    let depositValue = document.getElementById("depositValue");
    
    let newDepositInput = parseFloat(depositValue.value);
    
    let dTotal = document.getElementById("dTotal").innerText;
    let newTotalDeposit = parseFloat(dTotal);
    
    // total depositValue show 
    let totalNewDeposit = newTotalDeposit + newDepositInput;
    document.getElementById("dTotal").innerText = totalNewDeposit.toFixed(2);
    depositValue.value = "";
    
    //create table row and table data dynamically
    
    const tableBody = document.querySelector("#deposit-body");
    //create deposit table row
    let table_tr = document.createElement("tr");

    //create table data for serial number
    let table_sl = document.createElement("td");
    let textSl = document.createTextNode(count);
    table_sl.appendChild(textSl);
    table_tr.appendChild(table_sl);
    
    //create table data for date and time
    let table_date = document.createElement("td");
    let textDate = document.createTextNode(myTime);
    table_date.appendChild(textDate);
    table_tr.appendChild(table_date);
     
    //create table data for deposit value
    let table_td = document.createElement("td");
    let newTdValue = document.createTextNode(newDepositInput);
    table_td.appendChild(newTdValue);
    table_tr.appendChild(table_td);
    
    // create table data for account name
    let table_remark = document.createElement("td");
    let textNode = document.createTextNode(account.value);
    table_remark.appendChild(textNode);
    table_tr.appendChild(table_remark);
    
    tableBody.appendChild(table_tr);
    
    //deposit balance show
    let totalBalance = document.getElementById("totalBalance").innerText;
    let newTotalBalance = parseFloat(totalBalance);

     //add deposit balance with main balance
    let newBalance = newDepositInput + newTotalBalance;
    document.getElementById("totalBalance").innerText = newBalance.toFixed(2);
});

//deposit end

//widrown balance statrt
let count1 = 0;

let widrowBtn = document.getElementById("widrowBtn");

widrowBtn.addEventListener("click", function () {
    count1++;
    
    let widrowValue = document.getElementById("widrowValue");
    let newWidrowValue = parseFloat(widrowValue.value);
    let wTotal = document.getElementById("wTotal").innerText;
    let newWidrowTotal = parseFloat(wTotal);
    
    let totalNewWidrow = newWidrowTotal + newWidrowValue;
    document.getElementById("wTotal").innerText = totalNewWidrow.toFixed(2);
    //widrown balance end
    
    //   widrow total balance show
    let totalBalance = document.getElementById("totalBalance").innerText;
    let newTotalBalance = parseFloat(totalBalance);
    
    widrowValue.value = "";
    
    // deducting from main balance
    let growsBalance = newTotalBalance - newWidrowValue;
    document.getElementById("totalBalance").innerText = growsBalance.toFixed(2);
    
    //  widrow money table row and table data dynamically
    
    const widrowBody = document.querySelector("#widrow-body");
    
    //create table row for widrows info
    let table_tr1 = document.createElement("tr");
    // console.log(table_tr1);
    // create table data for serial number
    let table_sl1 = document.createElement("td");
    let textSl1 = document.createTextNode(count1);
    table_sl1.appendChild(textSl1);
    table_tr1.appendChild(table_sl1);
    
    // create table data for date and time
    let table_date1 = document.createElement("td");
    let textDate1 = document.createTextNode(myTime);
    table_date1.appendChild(textDate1);
    table_tr1.appendChild(table_date1);
    
    //create table data for widrow value
    let table_td1 = document.createElement("td");
    let newTdValue1 = document.createTextNode(newWidrowValue);
    table_td1.appendChild(newTdValue1);
    table_tr1.appendChild(table_td1);
    
    //create table data for widrow's account name
    let table_remark1 = document.createElement("td");
    let textNode1 = document.createTextNode(account.value);
    table_remark1.appendChild(textNode1);
    table_tr1.appendChild(table_remark1);
    
    document.getElementById("wTotal").innerText = totalNewWidrow.toFixed(2);
    widrowBody.appendChild(table_tr1);
});
