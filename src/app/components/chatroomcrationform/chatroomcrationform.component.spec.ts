import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomcrationformComponent } from './chatroomcrationform.component';

describe('ChatroomcrationformComponent', () => {
  let component: ChatroomcrationformComponent;
  let fixture: ComponentFixture<ChatroomcrationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomcrationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomcrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
