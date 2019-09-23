import { Component, OnInit } from '@angular/core';
// declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoTtd';

ngOnInit() {
  // init_plugins();
}
onActivate(e, scrollContainer) {
    scrollContainer.scrollTo = 0;
    window.scroll(0,0);
    console.log('holasss');
}




}
