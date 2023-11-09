import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';

@Component({
  selector: 'app-fan-item',
  templateUrl: './fan-item.component.html',
  styleUrls: ['./fan-item.component.css']
})
export class FanItemComponent implements OnInit{
  @Input("fanProp")
  fan: Fan;

  @Input()
  index: number;

  @Output()
  removeFanEvent: EventEmitter<number>;

  constructor() {
    this.fan = new Fan("", 0, "");
    this.index = 0;
    this.removeFanEvent = new EventEmitter<number>();    
  }
  
  ngOnInit(): void {
    console.log("OnInit method inside fan-item component");    
  }

  removeFan(): void {
    console.log("deleting fan..." + this.index);
    this.removeFanEvent.emit(this.index);
  }

}
