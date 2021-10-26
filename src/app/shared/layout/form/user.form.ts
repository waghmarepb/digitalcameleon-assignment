import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './password-match.validation';
export function formGroup(fb: FormBuilder): FormGroup {

    const formGroupObject = {
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
        mobile: [null],
        mobilePrefix: [0],
        city: [null],
        userImg: [null],
        gender: [null],
        hobbies: [null, Validators.required],
        status: [null, Validators.required],
    };

    return fb.group(formGroupObject, { validator: MustMatch('password', 'confirmPassword') });
}

export function UserFormConfig(fb: FormBuilder): FormGroup {
    return formGroup(fb);
}



