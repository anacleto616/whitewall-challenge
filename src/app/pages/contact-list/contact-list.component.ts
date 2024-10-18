import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contactService = inject(ContactService);

  contacts!: Contact[];

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.index().subscribe((response) => {
      this.contacts = response.resource.items;
    });
  }
}
