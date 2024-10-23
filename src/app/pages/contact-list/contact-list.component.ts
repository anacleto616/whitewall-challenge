import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';
import { AuthService } from '../../services/auth/auth.service';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  private router = inject(Router);
  contactService = inject(ContactService);
  authService = inject(AuthService);

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
      this.contactService.getContacts(apiKeyFormatted).subscribe((response) => {
        this.contacts = response.resource.items;
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
