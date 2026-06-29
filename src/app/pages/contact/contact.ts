import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Icon } from '../../shared/icon';
import { Eyebrow } from '../../shared/eyebrow';
import { SITE } from '../../shared/site-data';

const STAGES = ['Idea', 'MVP', 'Scaling', 'Live', 'Not sure yet'];

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, Eyebrow],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  protected readonly site = SITE;
  protected readonly stages = STAGES;
  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    stage: [STAGES[0]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    keepUpdated: [false],
  });

  protected invalid(control: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend (GitHub Pages): compose a pre-filled email in the visitor's
    // mail client so the enquiry actually reaches us.
    const { name, email, stage, message } = this.form.getRawValue();
    const subject = `New project enquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Stage: ${stage}`,
      '',
      message,
    ].join('\n');
    const mailto = `mailto:${this.site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    this.sent.set(true);
  }
}
