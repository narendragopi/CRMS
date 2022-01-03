import { CustomerService } from "../../Services/CustomerService";
import { APIConstants } from "../constants/APIConstants";
import { NotificationTypes } from "../constants/NotificationConstants";


export const GetCustomers = () => async (dispatch) => {

    const res = await CustomerService.GetCustomer().then(s => s.data)
    dispatch({
        type: APIConstants.CUSTOMERS.GET_CUSTOMERS,
        payload: res
    }).then(s => {
        dispatch({
            type: NotificationTypes.INFO,
            payload: 'Data fetched successfully'
        })
    })
}


export const AddCustomers = (customer,func) => async (dispatch) => {

    await CustomerService.AddCustomer(customer).then(s => {
        dispatch({
            type: APIConstants.CUSTOMERS.ADD_CUSTOMERS,
            payload: s.data
        })
    }).then(s => {
        dispatch({
            type: NotificationTypes.INFO,
            payload: 'Customer added successfully'
        })
    }).finally(() => func());

}

export const UpdateCustomers = (customer,func) => async (dispatch) => {

    await CustomerService.UpdateCustomer(customer).then(s => {
        dispatch({
            type: APIConstants.CUSTOMERS.UPDATE_CUSTOMERS,
            payload: s.data
        })
    }).then(s => {
        dispatch({
            type: NotificationTypes.INFO,
            payload: 'Customer updated successfully'
        })
    }).finally(() => func());

}
export const DeleteCustomers = (id,func) => async (dispatch) => {

     await CustomerService.DeleteCustomer(id).then(s=> {
        dispatch({
            type: APIConstants.CUSTOMERS.REMOVE_CUSTOMERS,
            payload: id
        })
      }).then(s=> {
        dispatch({  
            type: NotificationTypes.INFO,
            payload: 'Customer deleted successfully'
        })
      }).finally(() => func());
    
}


