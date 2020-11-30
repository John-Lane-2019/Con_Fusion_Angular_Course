import { Injectable } from '@angular/core';
//import { resolve } from 'dns';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
    providedIn: 'root'
})
export class LeaderService{
    constructor(){}

    getLeaders(): Observable<Leader[]>{
        return of(LEADERS).pipe( delay (2000));
        
    }
}