const express=require('express')
const route=express();
route.post('/',(req,res)=>{
    const str=req.body.str;
    if(str.length<=0){
        res.send("bad request")
    }
    else{
        let result=reverse(str);
        console.log('the result is',result)
        res.send({res:result});
    }
   
})
function reverse(str){
    let r = str.length - 1, l = 0;
 
    while (l < r)
    {
        if (!isLetter(str.charAt(l)))
            l++;
        else if(!isLetter(str.charAt(r)))
            r--;
 
        else 
        {
            str=swapStr(str,l,r) 
            l++;
            r--;
        }
    }
   return str;
}


function swapStr(str, first, last) {
    if (first == last) {
      return str;
    }
    
    if (last < first) {
      var temp = last;
      last = first;
      first = temp;
    }
    
    if (first >= str.length) {
      return str;
    
    }
    return str.substring(0, first) +
      str[last] + str.substring(first + 1, last) +str[first] + str.substring(last + 1);
    }
    
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  module.exports=route;