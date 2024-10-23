export type Message = SentTextMessage | ReceivedTextMessage | ReceivedTicketMessage;

export interface BaseMessage {
  id: string;
  direction: 'sent' | 'received';
  type: string;
  date: string;
}

export interface SentTextMessage extends BaseMessage {
  direction: 'sent';
  type: 'text/plain';
  content: string;
  status: 'consumed';
}

export interface ReceivedTextMessage extends BaseMessage {
  direction: 'received';
  type: 'text/plain';
  content: string;
  status: string;
}

export interface ReceivedTicketMessage extends BaseMessage {
  direction: 'received';
  type: 'application/vnd.iris.ticket+json';
  content: {
    customerInput: {
      type: 'text/plain';
      value: string;
    };
  };
}
