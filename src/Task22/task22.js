function buildTable(data) {
    var resultTable = document.createElement("table");
    var firstRow = document.createElement("tr");
    resultTable.appendChild(firstRow);
    var keyArray = Object.keys(data[0]);

    for (var i = 0; i < keyArray.length; i++) {
        var heading = document.createTextNode(keyArray[i]);
        var headRow = document.createElement("th");
        headRow.appendChild(heading);
        firstRow.appendChild(headRow);
    }
 
    for (var j = 0; j < data.length; j++) {
        var row = document.createElement("tr");
        resultTable.appendChild(row);

        for (var k = 0; k < keyArray.length; k++) {
            var info = data[j][keyArray[k]];
            var dataInfo = document.createTextNode(info);
            var cell = document.createElement("td");
            cell.appendChild(dataInfo);
            row.appendChild(cell);
            
            if (typeof info === "number") {
                cell.style.textAlign = "right";
            }
        }
    }
     
    return resultTable;
}