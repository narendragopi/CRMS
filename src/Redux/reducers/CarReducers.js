import { APIConstants } from '../constants/APIConstants';
const initialState = []

const CarConstants = APIConstants.CARS;
function Cars (cars = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case CarConstants.GET_CARS:
            return [...payload];    
        case CarConstants.ADD_CAR:
            return [...cars, payload]
        case CarConstants.UPDATE_CAR:
            return cars.map((car) => {
                if(car.id === payload.id) {
                    return {
                        ...car,
                        ...payload
                    }
                } else {
                  return car
                }
            })
        case CarConstants.REMOVE_CAR: 
          return cars.filter(s => s.id !== payload)

        default: return cars
    }

}

export default Cars;