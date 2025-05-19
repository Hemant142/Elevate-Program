let arr=[1,2,3]

Array.prototype.myMap=function(cb){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        let temp=cb(this[i],i,this)
        newArr.push(temp)
    }
    return newArr
}

// let res= arr.myMap((ele)=>ele*2)
// console.log(res,"res")

Array.prototype.MyReducer=function(cb,initalState){
    let acc=initalState
}