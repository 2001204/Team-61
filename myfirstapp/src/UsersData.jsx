import { useEffect, useState } from "react";
import axios from "axios";


export function UsersData(){                       //function Component  are no predefined lifecycle function but using hooks to inplement life cycle
    const[users, setUsers]=useState([]);    //state initialize   //useState is hook use here 
    
    async function fetchUsers(){        //fetch data from API
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }
   
    useEffect((async)=>{
        fetchUsers();
    }, []);               //replicate lifecyacle behavior of function component 
    
    return( 
        <div>
            <p>UsersData.jsx using Function Component: </p>
            <table cellPadding="10" cellSpacing="0" border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {
                    users.map((user)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );

}