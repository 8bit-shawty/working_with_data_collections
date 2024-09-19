const data = [
    [ 'ID', 'Name', 'Occupation', 'Age' ],
    [ '42', 'Bruce', 'Knight', '41' ],
    [ '57', 'Bob', 'Fry Cook', '19' ],
    [ '63', 'Blaine', 'Quiz Master', '58' ],
    [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
]

// for(let i = 0; i < 1; i++){
//     for(let j = 0; j < 4; j++){
//         let heading = i[j].map(header => header.toLowerCase())
//     }
// }
const heading = data[0].map(header =>{
    return header.toLowerCase();
})
// console.log(heading)

let newData = data.slice(1).map(row => {
    for(let i = 0; i < data.length; i++){
        let object ={}
        heading.forEach((header, j) => {
            object[header] = row[j]
        })
        return object
    }
})
// newData.map(row => {
//     let object = {};
//     heading.forEach((header, i) => {
//         object[header] = row[i]
//     })
//     return object
//     // return newData
// })
console.log(newData)
newData.pop()
console.log(newData)