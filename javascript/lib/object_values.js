Object.prototype.values = function Object_values(object) {
    var values = [];
    Object.keys(object).forEach(function(key){
        values.push(object[key]);
    });
    return values;
};