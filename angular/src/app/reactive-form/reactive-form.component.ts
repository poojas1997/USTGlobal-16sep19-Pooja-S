import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  get movie(){
    return this.form.get('movie');
  }

  get title(){
    return this.form.get('title');
  }

  get img(){
    return this.form.get('image');
  }

  get desc(){
    return this.form.get('desc');
  }
  constructor() { }

  form = new FormGroup({
    movie : new FormControl('' , [Validators.required]),
    title: new FormControl('', [Validators.required]),
    image: new FormControl('' , [Validators.required]),
    desc : new FormControl('' , [Validators.required])
  })

  ngOnInit() {
  }

  login(form) {
    console.log(form.value);
  }
}
