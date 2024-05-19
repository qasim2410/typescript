// let marks = [91,88,50,60,true,"not present","mango,orange"]         // syntax of an array
// console.log(marks)                               // indexing concept
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6])
// console.log(marks[7])    // undefined because index 7 is not exist

// length concept
// console.log("length of marks", marks.length)
// marks[7] = 89   // Adding a new value to the array
// marks[0] = 96   // changing the value of an array
// console.log(marks)
// console.log(typeof marks)
 
// Arrays Method(Main Method);-
// 1) To String 
// let num = [1,2,3,34,4]            //convets array in to the string
// let b = num.toString()
// console.log(b)

// 2) join method 
// let num = [1,2,3,34,4]          // joins element using the seperator("-")
// let c = num.join("_")
// console.log(c)
// console.log(c, typeof c)

// // 3) Pop Method
// let num = [1,2,3,34,4]
// num.pop()                     // remove the element  from the last
// console.log(num)
// let r = num.pop()             // pop returns the pop element
// console.log(num, r) 

// 4) Push Method
// let num = [1,2,3,34,4]
// let a = num.push(32)         // add the element  and also return the length
// console.log(num, a)

// 5) shift method
// let num = [1,2,3,34,4]
// let b = num.shift()           // remove first element from the start of the array
// console.log(b, num)           // (act as pop)

// 6) unshift method 
// let num = [1,2,3,34,4]
// let c = num.unshift(78)        // add first element and also return the length
// console.log(c, num)            // (act as push)

// Some more array methods
// 7) delete method
// let num = [2,45,66,55,70,88,100]
// delete num[0]
// console.log(num)
// console.log(num.length)

// 8) Concat method                  //add both arrays
// let num1 = [1,2,3,4,5,6,7,8,9]
// let num2 = [11,33,55,78,8999,180]
// let newArray = num1.concat(num2) 
// console.log(newArray)

// 9) Sort method
// let num = [551,33,44,1220,1,23,4]      //alphabetically sequence order
// let a = num.sort()
// console.log(a)

// 10) Reverse method
// let num = [1,5,77,88,22]
// num.reverse()
// console.log(num)

// 11) Splice Method
// let num = [22,34,754,33,33,33222,26567]              //add,remove,replace      //pehlei jahan sei add karna hei uska index number
// num.splice(2,4,55,66,77,55,44,33)                                             //phir jitnei elements remove karnei hein uska number
// console.log(num)

// 12) Slice Method
// let num = [22,66,77,44,55,55,3]                       //jahan sei count karna hei uska number jahan tak uska index no 
// let newarray = num.slice(1,3)                        //akhri index count nahi hota
// console.log(newarray)                                // start index and last index of number which you want