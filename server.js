let data = [{id:1, nombre:"pepito", apellido:"paga doble"},
{id:2, nombre:"andres", apellido:"mujica"},
{id:3, nombre:"petronila", apellido:"Sinforosa"},
{id:4, nombre:"macandalla", apellido:"ramona"},
{id:5, nombre:"elvis", apellido:"tek"},
{id:6, nombre:"Elsa", apellido:"Payo blanco"},
{id:7, nombre:"Elsa", apellido:"Capunta"},
{id:8, nombre:"Jacinta", apellido:"Lopez"},
{id:9, nombre:"Armando", apellido:"Casas"},
{id:10, nombre:"elmer", apellido:"melao"},
{id:11, nombre:"Clark", apellido:"Kent"},
{id:12, nombre:"Elro", apellido:"Dolfo"},
];

import express from "express";
import hbs from "hbs";
const app = express();
app.set("view engine","hbs");
app.use(express.static("public"))


app.get("/", (req,res)=>{
    console.log(data);
    res.render("index", {data})
})


app.delete("/eliminar/:id", (req,res)=>{
    try{
        const id = req.params.id;
        const data2 = data.filter((objeto) => objeto.id != id);
        data=data2 
    }catch{
        console.log('error')
    }
    


})

app.listen(4000, ()=>{console.log("http://localhost:4000")})



