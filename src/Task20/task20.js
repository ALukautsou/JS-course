//Task20
//Numbers again

//Regular Expression to use
    var number = /^(\+|-)?((\d+(\.\d*)?)|(\.\d+))(((e|E)(\+|-)?)\d+)?$/;

//function doTestNumbers receive array of numbers
// to test and matches only JavaScript-style numbers
    function doTestNumber() {
        ['1', '-1', '+15', '1.55', '.5', '5.', '1.3e2', '1E-4',
         '1e+12'].forEach(function(s) {
             if (!number.test(s)) {
                 return false;
             }
         });
        ['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5',
         '.'].forEach(function(s) {
             if (number.test(s)) {
                 return false;
             }
         });
     return true;
    }
