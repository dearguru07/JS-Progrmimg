// alert('hello world')
// document.write('vanakam')

// console.log(guru);
// var guru = 5;

// console.log(ygur)
// var ygur="gurucharan"

// console.log(name)
// var name=4523

// console.log(Home)
// var Home="gurucha"

// hoisting-------------------

Hello()
function Hello(){
    x=25
    console.log(x)
}

// function Decleration vs function Expression---------------

var hello= function Helloo(){
    x=28
    console.log(x)
}
hello()



// hellov()
// var hellov= function Hello(){
//     x=54
//     console.log(x)
// }


// let hobbies=[1,2,"guru","charan"]
// hobbies[2]="name"
// console.log(hobbies)


// let hobbies=["mrng","afternoon","eve","night","bye"]
// hobbies.splice(0,2,"nice")   
// console.log(hobbies)


// let hobbies=["mrng","afternoon","eve","night","bye"]
// hobbies.splice(2,0,"good")
// console.log(hobbies)


// let hobbies=["mrng","afternoon","eve","night","bye"]
// hobbies.splice(2,1,"good")
// console.log(hobbies)

// const array=[]
// array[0]="guru"
// array[1]="charan"
// array[2]="hemant"
// array[3]="virat"
// array[4]=5
// array[5]="raaju"
// array[6]=58
// array[7]="charan"
// console.log(array)

// Objects---------------

// let hobbies={name:"guru",age:21,addr:"rcb",mbl:"oppo"}
// hobbies.gamil="pangalaguru@gmail"
// console.log(hobbies)


let hobbies={name:"guru",age:21,addr:"rcb",mbl:"oppo"}
hobbies.gamil="pangalaguru@gmail"
delete hobbies.addr
console.log(hobbies)


let couples = [
  {
    name: "guru",
    gfname: "kiyara",
  },
  { name: "dinesh", gfname: "pooja" },
  { name: "ganesh", gfname: "rooja" },
  { name: "hari", gfname: "siri" },
];
couples.push({name:'maahi',gfname:'saritha'})
console.log(couples)

// let rondomWinners=Math.floor(Math.random*length(couples))
// let input = document.getElementById("output");

// function winnerOne(){
// let res=input.innerHTML(couples.name+"❤️"+gfname)
// }