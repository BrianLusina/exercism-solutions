module.exports = (array, func) => {
    var res = [];
    for(var x = 0; x < array.length; x++){
        res.push(func(array[x]));
    }
    return res;
}