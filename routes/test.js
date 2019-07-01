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
}
sort([21,324,35,56,46,3,2,23,4,4,6,7,8,8,8])
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
    console.log(res)
}
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
    console.log(str);
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
  reverse('Ab@cd')