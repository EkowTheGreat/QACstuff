import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MetaweatherService } from '../metaweather.service';
import {MetaLocation} from '../metalocation.model';
//import { ActivatedRoute } from '@angular/router';
//import { MetaweatherService } from '../metaweather.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public searchVal= 'Manchester';
   public data: MetaLocation[];

  @Input()location = "Location";
  constructor(private router: Router,private http: HttpClient, private ms: MetaweatherService) { }
  //private aroute: ActivatedRoute,private metaweather: MetaweatherService

  ngOnInit() {

    
    // const url = decodeURIComponent(this.aroute.snapshot.params.location);
    // this.metaweather.getLocation(url).subscribe((location) => {
    //   this.location = location;
  // });
}

 
onLocationSearch(){

 
  console.log(this.searchVal);
  
  
 

  
  this.ms.getLocation(this.searchVal).subscribe((loc) => {
    console.log("info ",loc);
    this.data = loc;
    this.router.navigate(['summary',loc[0].woeid]);
    
  });
   

  
}


}
