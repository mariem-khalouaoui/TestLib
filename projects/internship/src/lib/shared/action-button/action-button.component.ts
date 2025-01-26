import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-button[description]',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() description!: string
  constructor() { }

  ngOnInit() {
  }

}
