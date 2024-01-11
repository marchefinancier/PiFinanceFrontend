import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
   API_URL="http://localhost:8089/chatbot/generate-text";
 apiUrl = 'http://localhost:3000/api/pluscours';

  constructor( private httpClient:HttpClient) { 
  }

  generateResponse(question: string):Observable<any> {
    return this.httpClient.post<string>(this.API_URL, question);
  }
  getVideos(params: string): Observable<any[]> {
    // Set the params as query parameters

    return this.httpClient.post<any>(`${this.apiUrl}/${params}`, {});
  }
}
