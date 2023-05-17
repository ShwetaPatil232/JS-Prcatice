const student = [
    {
        name: 'Student 1',
        marks: 50
    },
    {
        name: 'Student 2',
        marks: 60
    },
    {
        name: 'Student 3',
        marks: 70
    },
    {
        name: 'Student 4',
        marks: 80
    },
    {
        name: 'Student 5',
        marks: 30
    },
]

// 1) Use of filter method

const failedStudent = student.filter((student) => {

    if(student.marks < 35){
        return true;
    }
})


const failedStudent2 = student.filter((student) => student.marks <35 )
console.log(failedStudent2)

// 2) Use of map method

const user = [
    {
        fname : 'FirstName1',
        lname : 'LastName1'
    },
    {
        fname : 'FirstName2',
        lname : 'LastName2'
    },
    {
        fname : 'FirstName3',
        lname : 'LastName3'
    },
    {
        fname : 'FirstName4',
        lname : 'LastName4'
    },
    {
        fname : 'FirstName5',
        lname : 'LastName5'
    }
]

const map1 = user.map((i) => {

    return {
        fullName : `${i.fname} ${i.lname}`
    }
})
console.log(map1)

// 3) Use of reduce method : forEach loop Sample

const movie = [
    {
        name: 'Movie1',
        budget : 100
    },
    {
        name: 'Movie2',
        budget : 200
    },
    {
        name: 'Movie3',
        budget : 300
    },
    {
        name: 'Movie4',
        budget : 400
    },
    {
        name: 'Movie5',
        budget : 500
    },
]

let totalCost = 0 ;
movie.forEach((movie) => {

    totalCost = totalCost + movie.budget;

})
console.log(` Total Cost of All Movie : ${totalCost}`)

const totalLast = movie.reduce((sum, element) => {
    sum = sum + element.budget;
}, 0)

console.log(totalLast)

// 4) indexOf()  && includes()  Method

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.indexOf(5))
console.log(arr.indexOf(22))
console.log(arr.includes(5))

// 5) find() method
 const user1 = [
    {
        name : 'User1',
        id : 1
    },
    {
        name : 'User2',
        id : 2
    },
    {
        name : 'User3',
        id : 3
    },
    {
        name : 'User4',
        id : 4
    },
    {
        name : 'User5',
        id : 5
    }
 ]

 const searchUser = user1.find((element) => {
    if(element.id === 2 ){
        return true
    }
    else{
        return false
    }
 })

 console.log(searchUser)

 // 6) Sorting 

 const arr1 = [10,20,30,40,50,80,90,44,21]
 const arr2 = ['XCODE', 'VSCODE', 'APPLE', 'ECLIPSE', 'SUBLIME TEXT'];
 const arr3 = [true , false, false, false, true, true]
 console.log(arr1.sort())
 console.log(arr2.sort())
 console.log(arr3.sort())

 // 7) Splice : Deleting elemnt from array

 console.log(arr1.splice(2,2)) // startIndex, HowManyElementDelete
 console.log(arr1)

