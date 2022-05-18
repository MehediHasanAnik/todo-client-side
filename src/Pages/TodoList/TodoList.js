import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [todo])


    const handleSubmit = event => {
        event.preventDefault();
        const AddData = {
            name: event.target.name.value,
            description: event.target.description.value,
        }
        fetch("http://localhost:5000/todo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(AddData)
        })
            .then(response => response.json())
            .then(data => {

                console.log(data);
                alert('user added successfully');
                event.target.reset()
            })
    }
    const handleUserDelete = id => {

        const proccessed = window.confirm('ary you sure')
        if (proccessed) {
            console.log('deleting', id)
            const url = `http://localhost:5000/todo/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = todo.filter(t => t._id !== id)
                        setTodo(remaining);
                    }
                });
        }





    }
    return (
        <div className="container pt-4">
            <div className='row justify-content-center'>
                <div className="col-lg-7">
                    <form action="" onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlFor="name" class="form-label">Name </label>
                            <input type="text" name="name" class="form-control" id="name" placeholder="ENter name" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="des" class="form-label">Description</label>
                            <textarea class="form-control" name="description" id="des" rows="3"></textarea>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Add todo </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h1 className='text-center'>Avaible Users : {todo.length}</h1>

                    {<Table striped bordered hover>

                        <tbody>
                            {
                                todo.map(user => {
                                    return <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.description}</td>
                                        <Button variant="primary" onClick={() => handleUserDelete(user._id)} >Delete</Button>
                                    </tr>
                                })
                            }

                        </tbody>
                    </Table>}






                </div>
            </div>
        </div >
    );
};

export default TodoList;