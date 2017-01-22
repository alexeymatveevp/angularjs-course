import {Component, Input} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-note-dialog',
  template: `
<input placeholder="Title your note" class="note-title" [(ngModel)]="title"/><br/>
<textarea placeholder="Start typing..." class="note-area" [(ngModel)]="text"></textarea><br/>
<button id="saveAndClose-btn" (click)="hideDialog(true)" md-button>Save and Close</button>
<button id="close-btn" (click)="hideDialog(false)" md-button>Close</button>
`
})
export class NoteDialog {

  @Input() title: string;
  @Input() text: string;

  constructor(private dialogRef: MdDialogRef<NoteDialog>) {
  }

  hideDialog(saveNote: boolean) {
    this.dialogRef.close(saveNote ? {title: this.title, text: this.text} : undefined);
  }

}
