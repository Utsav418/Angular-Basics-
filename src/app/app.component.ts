import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count=0;
  name: string;
  username : string;
  private _customerName: string
  nameElemetRef: ElementRef;
  @ViewChild('nameRef') nameElementRef : ElementRef;

  ngAfterViewInit(): string{
    return this.nameElementRef.nativeElement.focus();
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName =value;
    if( value === 'Utsav'){
      alert(' hello Utsav');
      }
  
  }


  incrementCount(){
    this.count += 1 ;
  }

  greetUtsav(updatedValue){
    this.username = updatedValue;
    if( updatedValue === 'Utsav'){
    alert(' Welcome back Utsav ');
    }
  }

}
