import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpLoadResponse } from '../domain/UpLoadResponse';

@Component({
  selector: 'app-response-data',
  templateUrl: './response-data.component.html',
  styleUrls: ['./response-data.component.css']
})
export class ResponseDataComponent implements OnInit {
  response: any =  {};
  isData :boolean = false;
  isNoData: boolean = true;
  constructor(public data: DataService, private http: HttpClient, private router:Router) {

    console.log(this.data.responseObj)

  }

  ngOnInit(): void {
    this.post(this.data.formData)


  }

  goToHome( ){
    this.router.navigate(['']);
  }

  async post(form:FormData){
    if(form )
    {
      this.http.post<any>('https://localhost:44372/api/Meter/meter-reading-uploads',form)
    .subscribe(
      {
        next: (data: any) => {
          this.data.responseObj = data;
           this.response = data;
            console.log(this.data.responseObj )
            console.log(this.response )
            console.log(data.sucessfulMeterReads)
            this.isData = true
            this.isNoData = false;
        },
        error: (err: any)=>{
          this.isNoData = true
          console.error(err)}
      }
    );
    }

  }
}




