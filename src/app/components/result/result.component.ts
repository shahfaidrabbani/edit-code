import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodeEditorService } from '../../services/code-editor.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  src: string = '';
  private subscriptions: Subscription[] = [];

  constructor(private codeEditorService: CodeEditorService) { }

  ngOnInit() {
    // Subscribe to all code changes
    this.subscriptions.push(
      this.codeEditorService.html$.subscribe(() => this.updateSrc()),
      this.codeEditorService.css$.subscribe(() => this.updateSrc()),
      this.codeEditorService.js$.subscribe(() => this.updateSrc())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  updateSrc() {
    const html = this.codeEditorService.getHtml();
    const css = this.codeEditorService.getCss();
    const js = this.codeEditorService.getJs();

    this.src = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `;
  }

  get hasContent(): boolean {
    return !!(this.codeEditorService.getHtml() || 
              this.codeEditorService.getCss() || 
              this.codeEditorService.getJs());
  }
}
