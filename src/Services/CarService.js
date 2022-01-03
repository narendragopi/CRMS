import axios from "axios";

export const CarService = {
    GetCars: async () => {
       return await axios.get('http://localhost:5001/cars');
    },
    AddCar:async (car) => {
       return await axios.post(`http://localhost:5001/cars`,car);
    },
    UpdateCar: async (car) => {
        return await axios.put(`http://localhost:5001/cars/${car.id}`,car)
    },
    DeleteCar:async (id) => {
        return await axios.delete(`http://localhost:5001/cars/${id}`);
    }
}