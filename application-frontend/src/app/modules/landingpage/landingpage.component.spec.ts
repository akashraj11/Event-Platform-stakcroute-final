import { TestBed, async } from '@angular/core/testing';
import { LandingComponent } from './landingpage.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'showFirstPage'`, () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('showFirstPage');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to showFirstPage!');
  });
});
