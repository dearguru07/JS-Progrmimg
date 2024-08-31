// sorting()--------------

// let data=[1,2,5,'guru','charan']
// data.push('venky','nah')
// console.log(data)


// remove the Duplicate values-------------

// let number=[11,1,1,2,5,4,7,9,7]
// let res=[...new Set(number)]
// console.log(res)


// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);


// ternart operator------------

// age=20
// let result=age>19?"voter is valid":"voter is invalid"
// console.log(result)

// num=20
// let value=num>25?'truu':'Falsee'
// console.log(value)

// guru=50
// let res=guru==40?'True':guru==50?'telugu':guru==60?'kannada':guru==70?'English':'hindi'
// console.log(res)


// number=1
// let result=number==1?"telugu":number==2?"english":number==3?"hindi":number==4?"tamil":"malayalam"
// console.log(result)


// ifelse-------------------

// let number=7

// if(number==1){
//     console.log("telugu")
// }
// else if(number==2){
//     console.log("english")
// }
// else if(number==3){
//     console.log("hindi")
// }
// else if (number==4){
//     console.log("tamil")
// }
// else{
//     console.log('malaylam')
// }


// num=5
// if(num==1){
//     console.log('Telugu')
// }
// else if(num==2){
//     console.log('Tamil')
// }
// else if(num==3){
//     console.log('hindi')
// }
// else if(num==5){
//     console.log('English')
// }
// else{
//     console.log('malayam')
// }


// for loop-------------


// let values = [1, 2, 3, 4, 5, 7, 8];
// for (i = 0; i < values.length; i++) {
//   console.log(values[i] * values[i]);
// }

// map()----------------

// let newValue=[1,2,5,7,9,3]
// let res=newValue.map((x)=>{
// let valu=x+5
// console.log(valu)
// })

// console.log(res)


// let values=[3,4,9,7]
// let sqr=values.map((x)=>{
//     return x*x
// })
// console.log(sqr)


// filters()-------------------

// let values=[1,2,5,4,7,9,3,11,52,80,-25,5]
// let res=values.filter((x)=>{
//     return x>5
// })
// console.log(res)


// let values=[1,2,5,4,7,9,3,11,52,80,-25,5]
// let res=values.filter((x)=>{
//     return x>5 && x<20
// })
// console.log(res)


// chaining()------------------

// let values=[1,8,9,6,4,5,7,3]
// let cube=values.map((x)=>{
//     return x*x*x
// }).filter((x)=>{
//     return x>100
// })

// console.log(cube)


// reduces()-----------------------

// let values=[1,2,3,4,5,6,8,12,4,5,99,55,78,46,458]
// let result=values.reduce((curent,max)=>{
//     if (curent>max){
//         max=curent
//     }
//     return max
// },0)
// console.log(result)


// let values=[1,5,8,7,64,25,20,-25]
// let res=values.reduce((cur,less)=>{
//     if (cur<less){
//         cur=less
//     }
//     return less
// })
// console.log(res)


// let values=[1,2,3,4,5,6,8,12,4,5,99,55,7,2000,8,46,45]
// let res=values.reduce((cur,max)=>{
//     if(cur>max){
//         max=cur
//     }
//     return max
// },0)
// console.log(res)


console.log('amar')
console.log('basha')

let aPromise=new Promise((resolve,reject)=>{
    resolve()
    console.lo('chandan')
})
aPromise.then(()=>{
    console.log('dhanush')
    console.log('eshu')
    console.log('faarzi')
    console.log('Guruyadav')
}).catch('error will ocuured')
