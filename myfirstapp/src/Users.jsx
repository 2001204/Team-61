import { Component } from "react";

import axios from "axios";

export class Users extends Component{
    constructor(){         //     constructor called
        super(); 
        this.state={
            Users:[] ,          //assign empty array
            isFetching:true         //for shimmer effect if page tooks too time to render
        }
    }
    render(){                             // rendering page
        return(
            <div>
                <p>Users.jsx using Class Component: </p>
                <table cellPadding="10" cellSpacing="0" border="1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {
                        this.state.Users.map((user)=>{
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
                <hr />
            </div>
        );
    }
    async componentDidMount(){         //
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');      //fetch datat from API  json placeholder
            this.setState({isFetching: true, Users:response.data});                            //this is to display content to UI
            console.log(response);
        } catch (error) {
            console.log(error);
        }
       
    }
}