import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FillflixService } from '../shared/services/fillflix.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    email = new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]) //eve.holt@reqres.in
    password = new FormControl('cityslicka', Validators.required) //cityslicka
    constructor(private router: Router,private fb:FormBuilder,private fillflix:FillflixService,
        private toaster:ToastrService) { }

    ngOnInit() { 
    }

    getEmailErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter email';
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    checkDisable(){
        if(this.email.invalid || this.password.invalid) return true;
        return false;
    }
    onLogin() {
        let user = {
            email : this.email.value,
            password : this.password.value,
        }
        this.fillflix.login(user).subscribe(res=>{
            this.toaster.success('Login successfully','Great')
            localStorage.setItem('token', res.token);
            this.router.navigate(['/features/phone']);
        },err=>{
            this.toaster.error(err.error,'Error')
        })
    }
}
