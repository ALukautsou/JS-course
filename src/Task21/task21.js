var month = function() {
    var names = ["January", "February", "March", 
                "April", "May", "June", 
                "July", "August", "September", 
                "October", "November", "December"];

    return {
        name: function(namber) {
            return names[namber];
        },
        number: function(name) {
            return names.indexOf(name);
        }
    }
}();