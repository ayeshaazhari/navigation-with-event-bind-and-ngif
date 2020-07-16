import { Component, OnInit, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
feature;
@Output() featureSelected = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  onselect(feature:string) {
    this.featureSelected.emit(feature);
  }



}