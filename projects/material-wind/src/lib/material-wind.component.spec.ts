import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWindComponent } from './material-wind.component';

describe('MaterialWindComponent', () => {
  let component: MaterialWindComponent;
  let fixture: ComponentFixture<MaterialWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialWindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
