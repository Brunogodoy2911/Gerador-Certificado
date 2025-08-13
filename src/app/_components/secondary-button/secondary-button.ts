import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css',
})
export class SecondaryButton {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
