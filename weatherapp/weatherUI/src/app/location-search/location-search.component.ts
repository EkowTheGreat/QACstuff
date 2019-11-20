import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
//import { MetaweatherService } from '../metaweather.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  @Input()location = "London";
  constructor(private router: Router,) { }
  //private aroute: ActivatedRoute,private metaweather: MetaweatherService

  ngOnInit() {

    
    // const url = decodeURIComponent(this.aroute.snapshot.params.location);
    // this.metaweather.getLocation(url).subscribe((location) => {
    //   this.location = location;
  // });
}

 
onLocationSearch(){
  document.getElementById('searchVal')
  console.log('clicked',document.getElementById('searchVal').value);
  this.router.navigate(['summary',]);
  
}


}
