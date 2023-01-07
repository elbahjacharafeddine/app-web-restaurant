import {Serie} from "../Serie/Serie";
import {Zone} from "../Zone/Zone";

export class Restaurant {
    id : number;
    adresse :string;
    heureClose :number;
    heureOpen :number;
    latitude :number;
    longitude :number;
    nom :string;
    rank:string;
    serie:Serie;
    zone:Zone;
    etat:string;
    URL:string;


}

