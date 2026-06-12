const express=require(`express`);
const router = express.Router();
let people= require(`../data.js`)
router.get(`/`,(req,res)=>
    {res.json(people)
 })

 router.post(`/:id`,(req,res)=>
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

 router.put(`/:id`,(req,res)=>
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

    router.delete(`/:id`,(req,res)=>
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


module.exports= router;