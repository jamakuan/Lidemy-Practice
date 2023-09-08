function repeat(str, times) {
    var result = ''
    for(var i=0; i<times; i++) {
        result += str
    }
    return result
}

module.exports = repeat