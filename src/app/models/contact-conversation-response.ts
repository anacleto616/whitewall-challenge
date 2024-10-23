import { Message } from "./message";

export interface ContactConversationResponse {
  type: string;
  resource: {
    total: number;
    itemType: string;
    items: Message[];
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
