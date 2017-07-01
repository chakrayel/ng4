import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  reactiveForm: FormGroup;
  post: any; // property the represents the submitted reactiveForm
  description: string;
  name: string;
  titleAlertName: string = "This field is required";

  constructor(private fb: FormBuilder) {
    this.reactiveForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validateCheckbox' : ''
    })
  }

  ngOnInit() {
   this.reactiveForm.get('validateCheckbox').valueChanges.subscribe(
     (validateCheckbox)=> {
       if (validateCheckbox == 1) {
         // if checkbox is checked then value=1, so add new minLength validation to name field
         this.reactiveForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
         this.titleAlertName = "Min 3 chars required";
       } else {
         // if checkbox isn't checked set it to original validation as set in c'tor
         this.reactiveForm.get('name').setValidators([Validators.required]);
         this.titleAlertName = "This field is required";
       }
       this.reactiveForm.get('name').updateValueAndValidity();
     }
   );
  }
  addPost(post) {
    this.name = post.name;
    this.description = post.description;
  }

  isValidName(): boolean {
    return (!this.reactiveForm.controls['name'].valid && this.reactiveForm.controls['name'].touched);
  }
  isValidDesc(): boolean {
    return (!this.reactiveForm.controls['description'].valid && this.reactiveForm.controls['description'].touched);
  }
}
