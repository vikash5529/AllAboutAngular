import { async, ComponentFixture, TestBed ,fakeAsync,tick} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import {By} from '@angular/platform-browser'



describe('UserComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports:[ReactiveFormsModule]
    });

  });
  it('should Create App', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should display original title', () => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'vikas';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('newvalue');
    });
  })
  
  
  });
});