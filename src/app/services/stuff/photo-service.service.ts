import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'image/jpeg');
    return headers;
  }

  getOneByUuid(uuid:string): Observable<any>{
    return this.http.get(`http://localhost:8080/media/${uuid}`, { headers: { responseType: 'application/json'}});
  }

  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/media');
  }


  uploadPhoto(file: File): Observable<any> {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', file, file.name);
    
    return this.http.post('http://localhost:8080/uploadFile', uploadImageData, { observe: 'response' })
  }
}
