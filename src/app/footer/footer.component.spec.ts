import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyseFooterComponent } from './wyse-footer.component';

describe('WyseFooterComponent', () => {
  let component: WyseFooterComponent;
  let fixture: ComponentFixture<WyseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyseFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
