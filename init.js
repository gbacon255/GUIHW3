//Function to collect and validate our data when the submit button is pressed
function initializeData(){

    //grab 
    const topStart = document.getElementById('topStart').value;
    const topEnd = document.getElementById('topEnd').value;
    const sideStart = document.getElementById('sideStart').value;
    const sideEnd = document.getElementById('sideEnd').value;

    //convert string values to numbers
    const topStartNum = Number(topStart);
    const topEndNum = Number(topEnd);
    const sideStartNum = Number(sideStart);
    const sideEndNum = Number(sideEnd);
    const resultDiv = document.getElementById('result');
    if (isNaN(topStartNum) || isNaN(topEndNum)|| isNaN(sideStartNum) ){
        resultDiv.textContent = `Please Enter Valid Numbers (-75 to 75)`;
        return;
    }
    if (!(topStartNum >= -75 && topStartNum <= 75 && sideStartNum >= -75 && sideEndNum <=75)) {
        resultDiv.textContent = `Please Enter Valid Numbers (-75 to 75)`;
        return;
    }
    if(topStartNum>topEndNum || sideStartNum > sideEndNum){
        resultDiv.textContent = 'Please ensure the end number is greater than the start number'
    }
     else{
        resultDiv.textContent = 'valid numbers, generating table';
        const table = generateTable(topStartNum,topEndNum,sideStartNum,sideEndNum);
        resultDiv.innerHTML = ''; //clear html for resultdiv
        resultDiv.innerHTML = table; //display our newly generated table
    }
    return;
}

function generateTable(xStart, xEnd, yStart,yEnd){
    let table = '<table><tr><th>-</th>';
    for (i = xStart; i <= xEnd; i++){
        table += `<th> ${i} </th>`;
    }
    table+='</tr>';
    //double for loop to generate the inside of the table
    //first loop creates the y axis
    for(i = yStart; i <= yEnd; i++){
        table+=`<tr><th>${i}</th>`;
        //second loop creates the multiplied number inside the table
        for(j = xStart; j<=xEnd; j++){
            table += `<td>${i*j}</td>`;
        }
        //terminate the row
        table +='</tr>'
    }
    //return our html object table
    return table;;
}