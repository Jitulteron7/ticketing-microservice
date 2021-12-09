import {useState} from "react"

const NewTick=()=>{
    const [content,setContent]=useState({
        title:'',
        price:''
    })
    const {title,price}=content;
    const handleChange=(event)=>{
        setContent({...content,[event.target.name]:event.target.value})
    }
    const onBlur=()=>{
        const value=parseFloat(price)
        if(isNaN(value)){
            return;
        }
        
        set({...content,
        price:value.toFixed(2)
        })
    }

    
    return(
    <div>
        <h1>Create a ticket</h1>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input value={title} onChange={(handleChange)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input 
                onBlur={onBlur}
                value={price} onChange={handleChange} className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>)
}