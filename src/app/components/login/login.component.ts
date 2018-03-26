import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  onSubmit(b: boolean) {
    console.log('form submitted:', b ? 'YES' : 'NO' );
}
}
