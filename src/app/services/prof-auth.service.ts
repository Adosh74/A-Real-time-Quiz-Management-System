import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

export interface prof {
    username : string,
    password : string
}

@Injectable({
    providedIn: 'root'
})
export class ProfAuthService {
    ProfUsername : string = environment.ProfUsername;
    ProfPassword : string = environment.profPassword;

    constructor(private http : HttpClient) {}

    profLogin(username: string, password : string){
        if(username === this.ProfUsername && password === this.ProfPassword ) {
            console.log('Loggin in...');
        } else {
            alert('Login failed; Username or password is incorrect');
            console.log('Login failed');
        }
    }
}