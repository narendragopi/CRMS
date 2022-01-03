import axios from "axios";

export const CustomerService ={

    GetCustomer:async() =>{
        return await  axios.get('http://localhost:5001/customers');
    },
    AddCustomer:async (customer) => {
       return await axios.post(`http://localhost:5001/customers`,customer);
    },
    UpdateCustomer: async (customer) => {
        return await axios.put(`http://localhost:5001/customers/${customer.id}`,customer)
    },
    DeleteCustomer:async (id) => {
        return await axios.delete(`http://localhost:5001/customers/${id}`);
    }
}