import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm(); // importante linea porque sino se ve todo re raro
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      username: [
        '',
        [Validators.required],
        [Validators.minLength(6)],
        [Validators.maxLength(24)],
      ],
      password: [
        '',
        [Validators.required],
        [Validators.minLength(6)],
        [Validators.maxLength(24)],
      ],
    });
  }
  get passwordField(){ // para que si tengo que hacer una validacion y despues cambio tengo consistencia de datos
    return this.form.get('password');
  }

  get usernameField(){ // para que si tengo que hacer una validacion y despues cambio tengo consistencia de datos
    return this.form.get('username');
  }
}
