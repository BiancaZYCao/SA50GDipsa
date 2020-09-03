import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  @Input() message:string;
  @Output() onFontSize = new EventEmitter<number>();
  fontSize: string = '1em';
  fontSizeField: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() { 
    console.log("fontSizeField >" + this.fontSizeField);
  }

  fontSizeChange($event){
    console.log(">>> " + this.fontSizeField);
    console.log($event.target.value);
    const fontSize = parseInt($event.target.value);
    console.log(fontSize);
    this.fontSize = `${fontSize}em`;
    this.onFontSize.next(fontSize);
  }

}
