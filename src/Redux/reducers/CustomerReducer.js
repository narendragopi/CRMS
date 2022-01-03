import { APIConstants } from "../constants/APIConstants";

const initialState = []
const CustomerConstants = APIConstants.CUSTOMERS;

function CustomerReducer(customers = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CustomerConstants.GET_CUSTOMERS:
            return [...payload];

        case CustomerConstants.ADD_CUSTOMERS:
            return [...customers, payload]

        case CustomerConstants.UPDATE_CUSTOMERS:
            return customers.map((customer) => {
                if (customer.id === payload.id) {
                    return {
                        ...customer,
                        ...payload
                    }
                } 
                else {
                    return customer
                }
            })

        case CustomerConstants.REMOVE_CUSTOMERS:
            return customers.filter(s => s.id !== payload)

        default:
            return customers
    }
}

export default CustomerReducer;
