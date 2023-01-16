import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPokeComponent } from './header-poke.component';

describe('HeaderPokeComponent', () => {
  let component: HeaderPokeComponent;
  let fixture: ComponentFixture<HeaderPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
