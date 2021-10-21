import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/app.constants';
import { HttpService } from 'src/app/shared/http.service';
import { UserFormConfig } from './user.form';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  title = Constants.APP_NAME;
  public userForm: FormGroup | any;
  public hide = true;
  public validationMessages: any = {

    email: {
      required: "Email is required",
      email: "Please enter valid email"
    },
    password: {
      required: "Password is required",
    },
    confirmPassword: {
      required: "Confirm Password is required",
      mustMatch: "Password and Confirm Password must same",
    },
    hobbies: { required: "Hobbies is required", },
    status: { required: "Please agree our terms and condition", }
  }
  public formError: any = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  public countryCodesData: any;

  constructor(private fb: FormBuilder, private http: HttpService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getCountryCodes();
  }

  private getCountryCodes() {
    this.http.getJSON().subscribe((res: any) => {
      console.log('res', res);
      this.countryCodesData = res.data;
    });
  }
  private initForm() {
    this.userForm = UserFormConfig(this.fb);
  }

  public onSubmit() {
    if (this.userForm.valid) {
      alert(JSON.stringify(this.userForm.value));
    } else {
      this.logValidationErrors();
    }
  }
  public showPassword() {
    this.hide = !this.hide;
  }
  public logValidationErrors(group: FormGroup = this.userForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formError[key] = "";
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        if (!abstractControl?.valid) {
          const message = this.validationMessages[key];
          for (const errorKey in abstractControl?.errors) {
            if (errorKey) {
              this.formError[key] += message[errorKey] + " ";
            }
          }
        }
      }
    });
  }
}
