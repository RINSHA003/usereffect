import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';



export default function App() {
  const [todos, setTodo] = useState([]);
  

  useEffect(() => {
    getData();

  },[]);
  
  
  const [check,setCheck] = useState(true);
  
  
  const getData =async () => {
    try {
      const incomingData = await fetch (
        "https://jsonplaceholder.typicode.com/"
      );

      const formattedData = await incomingData.json();
      setTodo(formattedData);
      console.log(formattedData);
  
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container className = "my-5">
     <h1 className="my-5 text-center display-2">Todo List</h1>
      <Table striped bordered hover>
      <thead>
      </thead>
      <tbody>
        
        {todos.map((todo,i) => (
          <tr key={todo.id}>
            <td>{i+1}</td>
            <td >{todo.title}</td>
            {
              /*<td>todo.completed</td>*/
            }
          </tr>
        ))}
        </tbody>
    </Table>
 </Container>
    </div>
  )
}

        

