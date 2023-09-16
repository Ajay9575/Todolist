import React, { useState } from 'react'

export const TodoApp = () => {
    // const arr = []
    const [userData, setUserData] = useState("");
    const [arr, setArr] = useState([]);
    const [editid, setEditid] = useState("");
    const [flag, setFlag] = useState(true);
    const inputHandler = (event) => {
        setUserData(event.target.value);
    }
    const formHandler = (event) => {
        event.preventDefault();
        // arr.push(userData)
        setArr([...arr, userData]);
        //console.log(arr);
        setUserData("");
    }
    const deleteTodo = (id) => {
        //alert("Testing");
        //console.log(id);
        let newarr = arr.filter((items, index)=>{
            return id !== index;
        });
        setArr(newarr);
    }
    // edit 
    const editTodo = (id) => {
        setFlag(false);
        setEditid(id);
        let newArr = arr.filter((items, index)=>{
            return id === index;
        });
        //console.log(newArr);
        setUserData(newArr);

    }

    // update 
    const updateTodo = () => {
        //alert("Testing", editid);
        //console.log(editid);
        arr[editid] = userData;
        setArr(arr);
        setUserData("");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-sm-4">
                    <form name="frm" onSubmit={formHandler}>
                        <div className='form-group'>
                            <label htmlFor="">User Name</label>
                            <input type="text" name="empname" className='form-control' onChange={inputHandler} value={userData} />
                        </div>
                        <div className='form-group'>
                         {flag === true ?   <input type="submit" name="btn" className='btn btn-info' /> : ""}
                        </div>
                    </form>
                    {flag === false ?
                    <input type="button" onClick={updateTodo} className='btn btn-primary' value="Update" /> : ""}

                </div>
                <div className="col-sm-8">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.map((items, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{items} <button onClick={()=> deleteTodo(index)} className="btn btn-danger">Delete</button>
                                            <button className='btn btn-info ml-2' onClick={()=> editTodo(index)} >Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}
export default TodoApp;