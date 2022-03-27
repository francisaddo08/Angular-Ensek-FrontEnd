import { SuccessfulData, UpLoadResponse, FailedData } from './domain/UpLoadResponse';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public responseObj: UpLoadResponse = new UpLoadResponse();
  public successData: SuccessfulData[] = []
  public FailedData: FailedData[] = []
  public successDataAny: any[] = []
  public FailedDataAny: any[] = []
  public  formData = new FormData();

  constructor(private http: HttpClient) { }

  postForm(form:FormData):Observable<UpLoadResponse>{
    return this.http.post<UpLoadResponse>('https://localhost:44372/api/Meter/meter-reading-uploads', form, {
    })
  }

  post(form: FormData) {
    return this.http.post(`https://localhost:44372/api/Meter/meter-reading-uploads`,form).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return ( 'Something went wrong!' );
           })
        )
    }
   // to handle errors from the http requset we create a method on the service useing HttpErrorRespose obj as a para

}
