import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  onSubmit(b: boolean) {
   console.log('form submitted:', b ? 'YES' : 'NO' );
}

}