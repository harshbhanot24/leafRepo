const express=require('express')
const app=express()
app.use(express.json());
const type1=require("./routes/type1")
const type2=require("./routes/type2")
const type3=require("./routes/type3")
app.use('/type1',type1)
app.use('/type2',type2)
app.use('/type3',type3)
app.listen((process.env.PORT || 4000),()=>{
    console.log('connected')  
  })
  