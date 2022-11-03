function buildTable(data) {
    var resultTable = document.createElement("table");
    var firstRow = document.createElement("tr");
    var keyArray = Object.keys(data[0]);

    keyArray.forEach(function(array) {
      var headRow = document.createElement("th");
      headRow.textContent = array;
      firstRow.appendChild(headRow);
      resultTable.appendChild(firstRow);
    });

    data.forEach(function(mountains) {
        var row = document.createElement("tr");

        keyArray.forEach(function(array) {
            var cell = document.createElement("td");
            cell.textContent = mountains[array];
            row.appendChild(cell);

            if (typeof mountains[array] === "number") {
                cell.style.textAlign = "right";
            }
        });
        resultTable.appendChild(row);
    });

    return resultTable;
}