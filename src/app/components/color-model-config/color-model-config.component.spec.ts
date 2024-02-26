import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorModelConfigComponent } from './color-model-config.component';

describe('ColorModelConfigComponent', () => {
  let component: ColorModelConfigComponent;
  let fixture: ComponentFixture<ColorModelConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorModelConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorModelConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
