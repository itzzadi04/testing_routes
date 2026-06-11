let people = require(`./data.js`);
const express = require(`express`);
app=express();

app.use(express.json());

app.get(`/api/people`,(req,res)=>
    {res.send(people)
 })

 app.post(`/api/people/:id`,(req,res)=>
 {
    
    const  {id}= req.params
    let {name}=req.body
     for(let i=0;i<=(people.length-1);i++){
        if (Number(id)==people[i].id){
            res.send(`this id exists`)
            return;
        }

    }
    people.push({"id":Number(id),"name":name})
     res.send(`done`)
 })

 app.put(`/api/people/:id`,(req,res)=>
{
    
    let {id}=req.params
    let {name}=req.body
    
    let singlepeople= people.find((people)=>people.id==Number(id))
     if(!singlepeople){
res.send(`id is  not found`)
return
    }

    singlepeople.name=name;
   
     res.send(`done`)})

    app.delete(`/api/people/:id`,(req,res)=>
    {
         let {id}=req.params
         let singlepeople= people.filter((people)=>people.id!=Number(id))
         if(singlepeople.length==people.length){
        res.send(`id is not found`)
        
        
        }
        else{
            people=singlepeople;
           
        }
  res.send(`done`)
    
         }
)
app.listen(5000,()=>`server is on 5000`)