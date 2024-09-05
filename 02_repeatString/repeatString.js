const repeatString = function(string, num) {
    var newstring = '';
    if (num<0) {
        return 'ERROR';
    } else {
        for (let i=0; i<num; i++) {
            newstring += string;
          }
          return newstring;
    }
};

repeatString('goodbye', -1);

// Do not edit below this line
module.exports = repeatString;
