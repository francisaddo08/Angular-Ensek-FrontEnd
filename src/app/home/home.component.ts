import { UpLoadResponse } from './../domain/UpLoadResponse';
import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {  Observable,throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  uploadsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  fileName = '';

  constructor(public data: DataService, private http: HttpClient, private router: Router,) { }

  ngOnInit(): void {
  }

  get f(){
    return this.uploadsForm.controls;
  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      this.fileName = event.target.files[0];
      this.uploadsForm.patchValue({
        fileSource: this.fileName
      });
    }
  }

  submit(){
    const formData = new FormData();
    this.data.formData = new FormData()
    this.data.formData.append("file", this.fileName);
    formData.append("file", this.fileName);

    /* this.http.post<UpLoadResponse>('https://localhost:44372/api/Meter/meter-reading-uploads',formData)
    .subscribe(
      {
        next: (data: UpLoadResponse) => {
          this.data.responseObj = data;

            console.log(this.data.responseObj )


        },
        error: (err: any)=>{
          console.error(err)}

      }
    ); */

    this.router.navigate(['/response']);
  }



}
