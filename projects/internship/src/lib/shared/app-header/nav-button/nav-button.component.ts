import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-button[selected][description]',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() description!: string
  constructor() { }

  ngOnInit() {
  }

}
