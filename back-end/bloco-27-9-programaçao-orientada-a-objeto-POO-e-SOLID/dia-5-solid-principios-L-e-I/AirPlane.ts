import { IVehicle_Fly } from './interfaces';

export default class AirPlane implements IVehicle_Fly {


  fly(): void {
    console.log('Fly a airplane');
  }
}