// given a aray of object I want to create  object ;ike thisn 
let arr=[{name:"Rajeet",
    city:"Bihar",
    age:5
},
{name:"Aman",
    city:"UP",
    age:15
},
{name:"Badri",
    city:"Bihar",
    age:5
}

]

let res={}
for(let i=0;i<arr.length;i++){
let key=arr[i].city
if(!res[key]){
res[key]=[arr[i]]
}else{
    res[key].push(arr[i])
}
}
console.log(res)