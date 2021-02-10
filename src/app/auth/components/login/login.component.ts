import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { Auth } from '../../models/auth.model';
import * as AuthActions from '../../state/auth.actions'


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/**
 * Login Page
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  /**
   * @param store app state
   */
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  /** Auth login */
  submit() {
    const credentials: Auth = { email: this.emailFormControl.value, password: this.passwordFormControl.value };
    this.store.dispatch(AuthActions.login({ credentials }));
  }

}
