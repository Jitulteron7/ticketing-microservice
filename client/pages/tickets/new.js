import {useState} from "react";
import  useRequest from "../../hooks/use-request"
import Router from 'next/router';

 const NewTickets=()=>{
    const [content,setContent]=useState({
        title:"",
        price:""
    })

    const {title,price}=content;

    const handleChange=(e)=>{
        setContent({...content,[e.target.name]:e.target.value})
  
    }

    const {doRequest,errors}=useRequest({
        url:"/api/tickets",
        method:'post',
        body:{
            title,price
        },
        onSuccess:()=>Router.push('/')
    })

    const onBlur=()=>{
        const value =parseFloat(price);
        if(isNaN(value)){
            return;
        }
        setContent({
            ...content,
            price:value.toFixed(2)
        })

    }

    const handleSubmit=(event)=>{
        
        event.preventDefault();
        doRequest()
    }

    return(
    <div>
    <h1>Create a ticket</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input
                    value={title}
                    name="title"
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={"form-control"}
                />
            </div>

            <div className="form-group">
                <label>Price</label>
                <input
                    value={price}
                    name="price"
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={"form-control"}
                />
            </div>
            {errors}
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>)
}

export default NewTickets