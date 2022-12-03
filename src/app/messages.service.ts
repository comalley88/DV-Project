import { Injectable } from '@angular/core';
import { Message } from './products';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: Message[] = [];
  getMessages(): Observable<HttpResponse<Message>> {
    return this.http.get<Message>(
      'https://jsonplaceholder.typicode.com/posts',
      { observe: 'response' }
    );
  }
  constructor(private http: HttpClient) {}
}
