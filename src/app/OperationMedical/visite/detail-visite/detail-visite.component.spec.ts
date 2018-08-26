import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVisiteComponent } from './detail-visite.component';

describe('DetailVisiteComponent', () => {
  let component: DetailVisiteComponent;
  let fixture: ComponentFixture<DetailVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
