import React,{useState} from 'react';
function UseStateDem(){
    const [item,setItem]=useState("");
    const [items,setItems]=useState([]);
    const handleAddItem=()=>{
        setItems([...items,item]);
        setItem('');
    }
    const handleDelete=(item)=>{
        const fitems=items.filter((it)=>it!==item);
        setItems(fitems);
    }
    const data=items.map((it,index)=>(
        <tr key={index}>
            <td cellpadding="20px">
                <span>{it}</span>
            </td>
            <td>
                <button onClick={()=>handleDelete(it)}>
                    Delete
                </button>
            </td>
        </tr>
    ),[]);
    return(
        <div>
            <input type="text" size="20" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={()=>handleAddItem()}>
                Add
            </button>
            <h1>useState() Demo</h1>
            <h1>Add User List</h1>
            <table border="1" align="center">{data}</table>
        </div>
    )
}
export default UseStateDem;
