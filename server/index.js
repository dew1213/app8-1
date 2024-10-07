const express = require("express")
const app = express()
const port = 8000

app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use(express.static("public"))

app.post('/api/fromPost', (req,res) =>{
    let name = req.body.name ||''
    let email = req.body.email ||''
    let msg = req.body.message ||''
    let text = `
    <table border ="1">
    <caption>ข้อมูลที่ส่งไป</caption>
    <tr><td>ชื่อ:</td><td>${name}</td></tr>
    <tr><td>อีเมล:</td><td>${email}</td></tr>
    <tr><td>ข้อความ:</td><td>${msg}</td></tr>
    </table>
    `
    res.send(text)
})

app.listen(port,()=>{
    console.log("Server listerning on port " +port)
})