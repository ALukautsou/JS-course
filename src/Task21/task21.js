//Task21
//Months names

//function month represents Month module.
//
var month = function() {
    var months = [  'January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];
    return {
        number : function(nm) {
            return months.indexOf(nm);
        },
        name : function(num) {
            return months[num];
        }
    };
}();
