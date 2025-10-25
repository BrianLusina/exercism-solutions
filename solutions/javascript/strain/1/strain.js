'use strict';
let strain = {
    
    create(array, filter, keepMatches){
        var results = [];
        for(var x = 0;x< array.length; x++){
            if(filter(array[x]) === keepMatches){
                results.push(array[x]);
            }
        }

        return results;
    },

    keep(array, filter){
        return this.create(array, filter, true);
    },

    discard(array, filter){
        return this.create(array, filter, false);
    }
}
module.exports = strain;