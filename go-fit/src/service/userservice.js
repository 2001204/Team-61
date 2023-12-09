import axios from "axios";


export async function saveUser(formData){
    try {
        const response=await axios.post("http://127.0.0.1:4200/User",formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export async function fetchUser(){
    try {
        const response=await axios.get("http://127.0.0.1:4200/User");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function deleteuser(email){
    try {
        const response=await axios.delete(`http://127.0.0.1:4200/User/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchuserByEmail(email){
    try {
        const response=await axios.get(`http://127.0.0.1:4200/User/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateuser(updatedUser,email){
    try {
        const response=await axios.put(`http://127.0.0.1:4900/User/${email}`,updatedUser);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
