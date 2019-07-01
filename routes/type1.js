const express=require('express')
const route=express();
route.post('/',(req,res)=>{
    let arr=req.body.arr;
    console.log('the arr is',typeof(arr))
     arr = arr.split(" ");
    if(arr.length<=0){
        res.send("bad request")
    }
    else{
        let result=sort(arr);
        res.send({data:result});
    }
   
})
function sort(arr){
    let even=[]
    let odd=[]
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)
        even.push(arr[i]);
        else
        odd.push(arr[i]);
    }
    even.sort(function(a, b){return a - b});
    odd.sort(function(a, b){return b- a});
    console.log(even)
    console.log(odd)
    if(even.length>=odd.length){
        let i=0
        while(odd.length>i){
            res.push(odd[i])
            res.push(even[i])
            i++;
        }
        while(i<even.length){
            res.push(even[i])
            i++;
        }
        
    }
    if(even.length<odd.length){
        let i=0
        while(even.length>i){
            res.push(odd[i])
            res.push(even[i])
            i++
        }
        while(i<odd.length){
            res.push(odd[i])
            i++;
        }
        
    }
    console.log(res)
    return res;
}
module.exports=route;