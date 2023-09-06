function double(n) {
    return n*2
}

var obj = {
    double: double, 
    triple: function (n) {
        return n * 3
    }
}

module.exports =  obj //想要輸出什麼