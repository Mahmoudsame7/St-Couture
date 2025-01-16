import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundpageComponent } from './foundpage.component';

describe('FoundpageComponent', () => {
  let component: FoundpageComponent;
  let fixture: ComponentFixture<FoundpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
