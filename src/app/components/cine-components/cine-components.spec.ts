import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CineComponents } from './cine-components';

describe('CineComponents', () => {
  let component: CineComponents;
  let fixture: ComponentFixture<CineComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CineComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(CineComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
