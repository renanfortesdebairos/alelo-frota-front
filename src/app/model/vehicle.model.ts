import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class VehicleModel {
    plate: string;
    model: string;
    manufacture: string;
    isAtivo: boolean;
}