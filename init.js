

//Function to collect and validate our data when the submit button is pressed
function initializeData(){

    //grab 
    const topStart = document.getElementById('topStart').value;
    const topEnd = document.getElementById('topEnd').value;
    const sideStart = document.getElementById('sideStart').value;
    const sideEnd = document.getElementById('sideEnd').value;

    if(topStart == ""|| topEnd.value == ""|| sideStart.value == ""|| sideEnd.value==""){
        resultDiv.innerHTML = '';
        error.innerHTML = `<h2>Error:</h2><p>Please Fill the Form with Valid Numbers (-75 to 75)</p>`;
        return;
    }

    //convert string values to numbers
    const topStartNum = Number(topStart);
    const topEndNum = Number(topEnd);
    const sideStartNum = Number(sideStart);
    const sideEndNum = Number(sideEnd);
    //get the div elements to access later one for error case and one for the table
    const errorDiv = document.getElementById('error')
    const resultDiv = document.getElementById('result');

    //error handling for if a non number is entered, html form also prevents this
    if (isNaN(topStartNum) || isNaN(topEndNum)|| isNaN(sideStartNum) ){
        //this code will throw a message to the error div and return 
        resultDiv.innerHTML = '';
        error.innerHTML = `<h2>Error:</h2><p>Please Enter Valid Numbers (-75 to 75)</p>`;
        return;
    }
    //Check to see if the numbers are in our specified range
    if (!(topStartNum >= -75 && topStartNum <= 75 && sideStartNum >= -75 && sideEndNum <=75)) {
        resultDiv.innerHTML = '';
        error.innerHTML = `<h2>Error:</h2><p>Please Enter Valid Numbers (-75 to 75)</p>`;
        return;
    }
    //if the end number is larger than the start number for either axis we throw an error
    if(topStartNum>topEndNum || sideStartNum > sideEndNum){
        resultDiv.innerHTML = '';
        error.innerHTML = '<h2>Error:</h2><p>Please ensure the end number is greater than the start number</p>'
        return;
    }
    //Success case, lets generate the table
     else{
        error.innerHTML = '';
        //loading message
        resultDiv.innerHTML = '<p>Valid numbers entered, generating table...<p>';
        //Added a delay for fun to do a fake loading time
        setTimeout(function(){
            const table = generateTable(topStartNum,topEndNum,sideStartNum,sideEndNum); //function returns table object
            resultDiv.innerHTML = ''; //clear html for resultdiv
            error.innerHTML = ''; // clear error inner HTML
            resultDiv.innerHTML = table; //display our newly generated table
        }, 1500);
    }
    return;
}

function generateTable(xStart, xEnd, yStart,yEnd){
    //initialize table html object
    let table = '<table><tr><th>-</th>';
    //create the top row of the table ${} allows us to include the var in our text
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
    //return our html table object
    return table;;
}