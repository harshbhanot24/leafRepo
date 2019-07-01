const express=require('express')
const route=express();
route.post('/',(req,res)=>{
    let arr=req.body.arr;
     arr = arr.split(" ");
    if(arr.length<=0){
        res.send("bad request")
    }
    else{
        let result=missing(arr);
        res.json({data:result});
    }
   
    
   
})
function missing(arr){
    let res=[]
    let index=0;
    let resindex=0;
    for(let i=arr[0];i<arr[arr.length-1];i++){
        if(i==arr[index]){
            index++;
        }
        else{
            res.push(i)
        }
    }
   return res;
}
module.exports=route;