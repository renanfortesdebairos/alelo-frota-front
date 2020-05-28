import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class VehicleModel {
    plate: string;
    model: string;
    manufacturer: string;
    color: string;
    active: boolean;
}