import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Icon } from '../../shared/icon';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, Icon],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  protected readonly site = SITE;
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false],
  });

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: wire to auth API when the backend exists.
    // Frontend-only for now — log the attempt and stop here.
    console.log('Sign-in stub (no backend yet):', this.form.getRawValue().email);
  }

  protected invalid(control: 'email' | 'password'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }
}
