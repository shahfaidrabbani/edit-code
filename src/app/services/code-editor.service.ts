import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeEditorService {
  private htmlSubject = new BehaviorSubject<string>('');
  private cssSubject = new BehaviorSubject<string>('');
  private jsSubject = new BehaviorSubject<string>('');

  public html$: Observable<string> = this.htmlSubject.asObservable();
  public css$: Observable<string> = this.cssSubject.asObservable();
  public js$: Observable<string> = this.jsSubject.asObservable();

  constructor() { }

  setHtml(html: string): void {
    this.htmlSubject.next(html);
  }

  setCss(css: string): void {
    this.cssSubject.next(css);
  }

  setJs(js: string): void {
    this.jsSubject.next(js);
  }

  getHtml(): string {
    return this.htmlSubject.value;
  }

  getCss(): string {
    return this.cssSubject.value;
  }

  getJs(): string {
    return this.jsSubject.value;
  }
}
