import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;

  @Input() showState!: any;

  @Output() buttonClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.buttonClick.emit();
    this.showState = !this.showState;
  }
}
