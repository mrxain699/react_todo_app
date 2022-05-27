import React, {useState} from 'react';
import ToDoList from './ToDoList.js';
const Todo = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [updateItemId, setUpdateItemId] = useState(-1);
    const defaultAlertInit = {
        type:"",
        message:"",
    }
    const [alert, setAlert] = useState(defaultAlertInit);
    const hideAlert = () => { 
        setAlert(defaultAlertInit);
    }
    const handleChange = (e) => {
        setItem(e.target.value.toLowerCase());
    };
    const addItem = () =>{
        if(updateItemId >= 0){
            itemList[updateItemId] = item;
            setAlert({type:"success", message:"Item Updated!"});
            setUpdateItemId(-1);
        }
        else{
            setItemList((prevState) =>{
                return [...prevState, item];
            });
            setAlert({type:"success", message:"Item Added!"});
            
        }
        
    };
    const updateItem = (id) => {
        const getItem = itemList[id];
        setItem(getItem);
        setUpdateItemId(id);
    };
    const deleteItem = (id) => {
        setItemList(itemList.filter((element, index)=>{
            return index!==id;
        }));
        setAlert({type:"error", message:"Item Deleted!"});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(item !== ""){
            addItem();           
        }
        else{
            setAlert({type:"error",  message:"Field is required!"});
        }
        setItem("");
    };

    return (
        <div className="wrapper">
            <div className="wrapper_header">
                <h1>React Todo List</h1>
            </div>
            <form className="form" noValidate onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" className="input" value={item} onChange={handleChange} placeholder="Add Item"/>
                    <button className="btn">+</button>
                </div>
                <div  className={alert.type}>{alert.message}{alert.message?<span className={`alert-${alert.type}`} onClick={hideAlert}>&times;</span>:""}</div>
            </form>
            
            <div className="todo_list">
                {
                    itemList.map((item, index) =>{ 
                        return <ToDoList key={index} index={index} item={item} deleteItem={deleteItem} updateItem={updateItem}/>
                    })
                }
            </div>
        </div>
    )
}

export default Todo
