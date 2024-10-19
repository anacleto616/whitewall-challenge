import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  router = inject(Router);
  contactService = inject(ContactService);

  contacts!: Contact[];

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    const apiKey = localStorage.getItem('apiKey');

    if (!apiKey) {
      this.router.navigate(['/login']);
    }

    const apiKeyFormatted = apiKey?.split(' ')[1];

    if (apiKeyFormatted) {
      this.contactService.index(apiKeyFormatted).subscribe((response) => {
        this.contacts = response.resource.items;
      });
    }
  }
}
