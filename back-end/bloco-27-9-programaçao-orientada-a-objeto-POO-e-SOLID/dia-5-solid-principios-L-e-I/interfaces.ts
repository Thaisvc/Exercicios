/* export interface IVehicle {
    drive(): void;
    fly(): void;
  } */

  export interface IVehicle_Drive {
    drive(): void;
  }

  export interface IVehicle_Fly {
    fly(): void;
  }

  export interface IFuturisticCar extends IVehicle_Drive, IVehicle_Fly {}