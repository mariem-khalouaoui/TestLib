import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavButton } from './models/nav-button';

@Component({
  selector: 'app-header[actionButtonDescription]',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() actionButtonDescription!: string;
  @Output() actionButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output() navButtonClickedEvent: EventEmitter<string> = new EventEmitter<string>()

  onActionButtonClick() {
    this.actionButtonClicked.emit()
  }

  buttonList: NavButton[] = [
    new NavButton('Home', true),
    new NavButton('About', false),
    new NavButton('Services', false),
    new NavButton('Works', false),
    new NavButton('Blog', false),
    new NavButton('Contact', false),
  ]


  constructor() { }

  ngOnInit() {
  }


  onButtonClicked(index: number) {
    this.buttonList.forEach((el, i) => {
      if (i == index) {
        el.selectButton();
        this.navButtonClickedEvent.emit(el.description);
      }
      else
        el.deselectButton();
    })
  }
}
