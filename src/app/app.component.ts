import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-Driven-Forms';

  classes = ['Cosmic', 'Tech', 'Mutant', 'Skill', 'Science', 'Mystic'];
  classsHasErrors = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('', '', 9999999999, 'Select', '', true);

  constructor(private _enrollmentService: EnrollmentService) {}

  validateClasss(value: string){
    if (value === 'Select') {
      this.classsHasErrors = true;
    } else {
      this.classsHasErrors = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success ', data),
      error => this.errorMsg = error.statusText
      
    );
  }
}
