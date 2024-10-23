import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  Message,
  ReceivedTextMessage,
  ReceivedTicketMessage,
  SentTextMessage,
} from '../../models/message';
import { AuthService } from '../../services/auth/auth.service';
import { ContactService } from '../../services/contact/contact.service';
import {
  isReceivedTextMessage,
  isReceivedTicketMessage,
  isSentTextMessage,
} from '../../utils/type-message';

@Component({
  selector: 'app-contact-conversation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-conversation.component.html',
})
export class ContactConversationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactService);
  private authService = inject(AuthService);
  contactId: string | null = null;
  messages: Message[] = [];

  isSentTextMessage = isSentTextMessage;
  isReceivedTextMessage = isReceivedTextMessage;
  isReceivedTicketMessage = isReceivedTicketMessage;

  ngOnInit(): void {
    this.getConversation();
  }

  getConversation() {
    this.contactId = this.route.snapshot.paramMap.get('id');

    if (this.contactId) {
      this.contactService.getConversation(this.contactId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.messages = response.resource.items;
          }
        },
        error: (err) => {
          console.error('Error fetching conversation', err);
        },
      });
    }
  }

  isTextMessage(
    message: Message
  ): message is SentTextMessage | ReceivedTextMessage {
    return message.type === 'text/plain';
  }

  isTicketMessage(message: Message): message is ReceivedTicketMessage {
    return message.type === 'application/vnd.iris.ticket+json';
  }

  logout() {
    this.authService.logout();
  }
}
