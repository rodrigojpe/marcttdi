import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps/maps.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = '';
  log = '';
  location: Object;
  constructor(private map: MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.log = data.longitude; 
    });
  }

}
