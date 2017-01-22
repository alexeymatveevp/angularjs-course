import {Component, Inject} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-notebook',
  template: `
    <input id="newNotebookName-txt" #notebookName type="text" placeholder="Name your notebook" class="note-title"><br/>
    <button id="createNotebook-btn" (click)="createNotebook(notebookName.value);" md-button>
        Submit
    </button>
    <button (click)="hideDialog()" md-button>
        Cancel
    </button>
  `
})
export class CreateNotebookComponent {

  constructor(@Inject('evernote') private evernote, private dialogRef: MdDialogRef<CreateNotebookComponent>) {
  }

  /**
   * Creates new notebook with the specified name
   * @param name name of the new notebook.
   */
  createNotebook(name): void {
    this.evernote.addNotebook(name);
    this.hideDialog();
  }


  /**
   * Hides the dialog.
   */
  hideDialog(): void {
    this.dialogRef.close();
  }

}
