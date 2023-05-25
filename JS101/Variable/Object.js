var student = []
var peter = {
    name: 'peter',
    score: 100,
    address: 'taipei city',
    phone: "0101110",
    father:{
        name: 'nick',
        phone: '12345'
    }
}
console.log(peter)
console.log(peter['father']['name'])


student.push(peter)
console.log(student[0])
console.log(student[0].name)
console.log(peter['name'])

var key = 'score'
console.log(peter[key])
