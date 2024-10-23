import { Message, SentTextMessage, ReceivedTextMessage, ReceivedTicketMessage } from "../models/message";

export function isSentTextMessage(message: Message): message is SentTextMessage {
  return message.direction === 'sent' && message.type === 'text/plain';
}

export function isReceivedTextMessage(message: Message): message is ReceivedTextMessage {
  return message.direction === 'received' && message.type === 'text/plain';
}

export function isReceivedTicketMessage(message: Message): message is ReceivedTicketMessage {
  return message.direction === 'received' && message.type === 'application/vnd.iris.ticket+json';
}
