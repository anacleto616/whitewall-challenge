import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactConversationComponent } from './contact-conversation.component';

describe('ContactConversationComponent', () => {
  let component: ContactConversationComponent;
  let fixture: ComponentFixture<ContactConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactConversationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
