import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ContactConversationResponse } from '../../models/contact-conversation-response';
import { ContactsResponse } from '../../models/contacts-reponse';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}`;
  private httpClient = inject(HttpClient);

  getContacts(apiKey: string): Observable<ContactsResponse> {
    const key = localStorage.getItem('apiKey');

    if (key) {
      const apiKeyFormatted = key?.split(' ')[1];

      if (apiKeyFormatted === apiKey) {
        const headers = new HttpHeaders({ Authorization: key });

        return this.httpClient.post<ContactsResponse>(
          this.apiUrl,
          {
            method: 'get',
            uri: '/contacts',
            id: `${environment.apiId}`,
          },
          { headers: headers }
        );
      } else if (apiKeyFormatted !== apiKey) {
        localStorage.setItem('apiKey', `Key ${apiKey}`);

        const headers = new HttpHeaders({ Authorization: `Key ${apiKey}` });

        return this.httpClient.post<ContactsResponse>(
          this.apiUrl,
          {
            method: 'get',
            uri: '/contacts',
            id: `${environment.apiId}`,
          },
          { headers: headers }
        );
      }
    }

    localStorage.setItem('apiKey', `Key ${apiKey}`);

    const headers = new HttpHeaders({ Authorization: `Key ${apiKey}` });

    return this.httpClient.post<ContactsResponse>(
      this.apiUrl,
      {
        method: 'get',
        uri: '/contacts',
        id: `${environment.apiId}`,
      },
      { headers: headers }
    );
  }

  getConversation(id: string) {
    const apiKey = localStorage.getItem('apiKey');

    const apiKeyFormatted = apiKey?.split(' ')[1];

    const headers = new HttpHeaders({ Authorization: `Key ${apiKeyFormatted}` });

    return this.httpClient.post<ContactConversationResponse>(
      this.apiUrl,
      {
        method: 'get',
        uri: `/threads/${id}?refreshExpiredMedia=true`,
        id: `${environment.apiId}`,
      },
      { headers: headers }
    );
  }
}
