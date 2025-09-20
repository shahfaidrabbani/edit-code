import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() heading: string = '';
  @Input() language: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() color: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  isOpen = true;
  editor: any;

  ngOnInit() {
    this.initializeEditor();
  }

  initializeEditor() {
    // Monaco Editor will be initialized here
    // For now, we'll use a simple textarea
    setTimeout(() => {
      this.setupMonacoEditor();
    }, 100);
  }

  setupMonacoEditor() {
    // This will be implemented with Monaco Editor
    // For now, using a simple textarea approach
  }

  onValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

  toggleEditor() {
    this.isOpen = !this.isOpen;
  }
}
