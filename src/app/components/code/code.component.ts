import { Component, OnInit } from '@angular/core';
import { CodeEditorService } from '../../services/code-editor.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  html: string = '';
  css: string = '';
  js: string = '';

  constructor(private codeEditorService: CodeEditorService) { }

  ngOnInit() {
    // Subscribe to changes
    this.codeEditorService.html$.subscribe(html => this.html = html);
    this.codeEditorService.css$.subscribe(css => this.css = css);
    this.codeEditorService.js$.subscribe(js => this.js = js);
  }

  onHtmlChange(html: string) {
    this.codeEditorService.setHtml(html);
  }

  onCssChange(css: string) {
    this.codeEditorService.setCss(css);
  }

  onJsChange(js: string) {
    this.codeEditorService.setJs(js);
  }
}
