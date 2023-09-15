import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLinksComponent } from './css-links.component';

describe('CssLinksComponent', () => {
  let component: CssLinksComponent;
  let fixture: ComponentFixture<CssLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssLinksComponent]
    });
    fixture = TestBed.createComponent(CssLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
