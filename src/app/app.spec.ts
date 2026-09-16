import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('debe crear el componente correctamente', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe mostrar el título principal "Dojo Doryokukan" en el h1', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Dojo Doryokukan');
  });

  it('debe contener el eslogan "El camino del esfuerzo"', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('El camino del esfuerzo');
  });

  it('debe incluir el enlace a la sección de Inscripciones en el menú', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="#inscripciones"]')).toBeTruthy();
  });

  it('debe incluir la sección de Atletas', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#atletas')).toBeTruthy();
  });

  it('debe incluir el enlace directo de WhatsApp en el botón flotante', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const html = compiled.innerHTML;
    expect(html).toContain('wa.me/573052403346');
  });

  it('debe incluir todos los enlaces a redes sociales en el pie de página', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const html = compiled.innerHTML;
    expect(html).toContain('instagram.com/dojodoryokukan');
    expect(html).toContain('facebook.com/dojodoryokukancolombia');
    expect(html).toContain('youtube.com/@dojodoryokukan3237');
    expect(html).toContain('wa.me/573052403346');
  });

  it('debe incluir los enlaces de afiliación a SKIF y WKF', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const html = compiled.innerHTML;
    expect(html).toContain('skifworld.com');
    expect(html).toContain('wkf.net');
  });

  it('debe renderizar el componente sin errores y quedar estable', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.isStable()).toBe(true);
  });
});