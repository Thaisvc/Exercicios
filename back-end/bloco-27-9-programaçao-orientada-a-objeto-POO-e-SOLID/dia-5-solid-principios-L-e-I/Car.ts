import { IVehicle_Drive } from "./interfaces";

export default class Car implements IVehicle_Drive {
    drive(): void {
        console.log('Drive a car');
    }

    
}