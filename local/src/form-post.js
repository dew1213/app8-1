import React from "react"

export default  function FormPost(){
    let [postData,setPostedData] = React.useState('')
    const form = React.useRef()

    const onSubmitForm = (event) =>{
        event.preventDefault()
        const formData = new FormData(form.current)
        const formEnt = Object.fromEntries(formData.entries())
    
        fetch('/api/fromPost',{
            method:"POST",
            body:JSON.stringify(formEnt),
            headers:{"Content-Type":"application/json"}
        }).then(Response=>Response.text())
        .then(result=>setPostedData(result))
        .catch(err=>alert(err))
    }
    
    const inputStyle = {
        margin:"5px 0",
    }
    return(
        <div style={{margin:"30px"}}>
            <form ref={form} onSubmit={onSubmitForm}>
                <div>ติดต่อเรา</div>
                <input type="text" name="name" size="43" placeholder="ชื่อ"
                style={inputStyle}/><br/>
                <input type="email" name="email" size="43" placeholder="อีเมล"
                style={inputStyle}/><br/>
                <textarea name="message" col="40" rows="4" placeholder="ข้อความ"
                style={inputStyle}/><br/>
                <button>ตกลง</button>
            </form>
            <br/>
            <div dangerouslySetInnerHTML={{__html:postData}}></div>
        </div>
        

    )
}