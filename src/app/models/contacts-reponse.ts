import { Contact } from './contact';

export interface ContactsResponse {
  type: string;
  resource: {
    total: number;
    itemType: string;
    items: Contact[];
  };
  method: string;
  status: string;
  id: string;
  from: string;
  to: string;
  metadata: {
    traceparent: string;
    '#command.uri': string;
  };
}
