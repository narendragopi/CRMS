import { CarService } from "../../Services/CarService"
import { APIConstants } from "../constants/APIConstants";
import { NotificationTypes } from "../constants/NotificationConstants";

export const GetCars = () => async (dispatch) => {

    const res = await CarService.GetCars().then(s => s.data);
    dispatch({
        type: APIConstants.CARS.GET_CARS,
        payload: res
    });
}

export const AddCar = (car,func) => async (dispatch) => {
    await CarService.AddCar(car).then(s => {
        dispatch({
            type: APIConstants.CARS.ADD_CAR,
            payload: s.data
        })
    }).then(s => {
        dispatch({
            type: NotificationTypes.INFO,
            payload: 'Car added successfully'
        })
    }).finally(() => func());

}

export const UpdateCar = (car,func) => async (dispatch) => {
    await CarService.UpdateCar(car).then(s => {
        dispatch({
            type: APIConstants.CARS.UPDATE_CAR,
            payload: s.data
        })
    }).then(s => {
        dispatch({
            type: NotificationTypes.INFO,
            payload: 'Car updated successfully'
        })
    }).finally(() => func());

}
export const DeleteCar = (id,func) => async (dispatch) => {
     await CarService.DeleteCar(id).then(s=> {
        dispatch({
            type: APIConstants.CARS.REMOVE_CAR,
            payload: id
        })
      }).then(s=> {
        dispatch({  
            type: NotificationTypes.INFO,
            payload: 'Car deleted successfully'
        })
      }).finally(() => func());
    
}


