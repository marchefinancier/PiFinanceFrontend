import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationserviceService {
  private apiUrl = 'http://localhost:8089/Formation/afficherAll';
  private baseUrl = 'http://localhost:8089/Formation'; 
  private participateUrl = 'http://localhost:8089/user'; 

  constructor(private httpclient:HttpClient) { 

  }

  getFormations(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiUrl);
  }
 
  getImageByFormationId(formationId: number): Observable<any> {
    const url = `${this.baseUrl}/getImageByFormationId/${formationId}`;
    return this.httpclient.get(url, { responseType: 'arraybuffer' });
  }
  participateFormation(fid: number, uid: number): Observable<any> {
    const endpoint = `${this.participateUrl}/participate/${fid}/${uid}`;
    return this.httpclient.post<any>(endpoint, {});
  }

  getFormationsByOwnerId(userId: number): Observable<any[]> {
    const url = `${this.baseUrl}/afficherFormationByOwnerId/${userId}`;
    return this.httpclient.get<any[]>(url);
  }
  deleteFormationById(formationId: number): Observable<any> {
    return this.httpclient.delete<any>(`${this.baseUrl}/SupprimerFormationById/${formationId}`);
  }
  addFormation(formation: any, userId: number): Observable<any> {
    const url = `${this.baseUrl}/ajouterFormation/${userId}`;
    return this.httpclient.post<any>(url, formation, { responseType: 'text' as 'json' });
  }

  uploadImage(formationId: number, imageFile: File) {
    const formData = new FormData();
    formData.append('imageFile', imageFile);

    const uploadUrl = `${this.baseUrl}/uploadImage/${formationId}`; 

    return this.httpclient.post(uploadUrl, formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }
  updateFormationWithImage( formationId: number,updatedFormation: any, newImage: File) {
    const formData = new FormData();
    formData.append('updatedFormation', JSON.stringify(updatedFormation));
    formData.append('newImage', newImage);

    return this.httpclient.put<any>(`http://localhost:8089/Formation/updateWithImage/${formationId}`, formData, {
     
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    
    });
  }
  getFormationById(formationId: number): Observable<Formation> {
    const url = `${this.baseUrl}/afficherFormationById/${formationId}`;
    return this.httpclient.get<Formation>(url);
  }

  addFormationWithImage(formationData: any,  imageFile: File,userId: number,) {
    const formData = new FormData();
    formData.append('formation', JSON.stringify(formationData)); 
    formData.append('image', imageFile, imageFile.name); 

    return this.httpclient.post<any>(`http://localhost:8089/Formation/ajouterFormationImage/${userId}`, formData);
  }
}
