import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomcreationformComponent } from './chatroomcreationform.component';

describe('ChatroomcrationformComponent', () => {
  let component: ChatroomcreationformComponent;
  let fixture: ComponentFixture<ChatroomcreationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomcreationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomcreationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
