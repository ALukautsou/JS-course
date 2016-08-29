//Task22
//Build a table

//function buildTable(data) bulds up a table
// based on array of objects got as argument
// for appending it to HTML document
function buildTable(data){
//creating table node
    var node = document.createElement('table');
//creating table headers
    node.appendChild(buildRow('th', Object.keys(data[0])));
//filling in table data
    for (var i = 0; i < data.length; i++) {
        node.appendChild(buildRow('td',objToArr(data[i])));
    };
    return node;
}

//function buildCell uses 1st argument to identify
//type of cell(header/data cell) to create
// a table cell and fill it with text of 2nd argument
function buildCell(type, text) {
    var cell = document.createElement(type);
    var childText = document.createTextNode(text);
    cell.appendChild(childText);
//Right-alignment for number cells
    if ( typeof text === 'number' ) {
        cell.style.textAlign = 'Right';
    }
    return cell;
}

//function buildRow uses 1st argument to identify
// type of cells(header/data cell) to create a row
// of cells and fill these cells with text of 2nd
// argument
function buildRow(cellType, cellTextArray){
    var line = document.createElement('tr');
    for (var i = 0; i < cellTextArray.length; i++) {
        var cell = buildCell(cellType, cellTextArray[i]);
        line.appendChild(cell);
    }
    return line;
}

//function objToArr - uses an object got as argument
// to build an array based on object values (equivalent)
// to Object.values method - not defined currently
function objToArr(obj){
    var res = [];
    var values = Object.keys(obj);
    for (var i = 0; i < values.length; i++){
        res.push(obj[values[i]]);
    }
    return res;
}
