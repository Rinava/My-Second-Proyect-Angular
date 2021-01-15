import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [Validators.required, Validators.email]); // si pongo algo en '' te pone un valor por default
    /*   this.emailField.valueChanges.subscribe((value) => {}); */
    // cada vez que cambie  me suscribo  y escucho ese valor dinamicamente
  }

  ngOnInit(): void {}
  sendMail() {
    if (this.emailField.valid) {
      console.log('a');
    }
  }
}
