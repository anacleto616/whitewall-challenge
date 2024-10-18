import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ContactsResponse } from '../../models/contacts-reponse';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}`;
  private headers = { Authorization: environment.apiKey };
  private httpClient = inject(HttpClient);

  index(): Observable<ContactsResponse> {
    return this.httpClient.post<ContactsResponse>(
      this.apiUrl,
      {
        method: 'get',
        uri: '/contacts',
        id: `${environment.apiId}`,
      },
      { headers: this.headers }
    );
  }
}
