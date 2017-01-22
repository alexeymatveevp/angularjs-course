import {Component, Inject, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import * as fileSaver from 'file-saver';

import Notebook from '../../types/notebook';
import {CreateNotebookComponent} from '../create-notebook/create-notebook.component';

@Component({
  selector: 'app-notebook-list',
  template: `
    <md-tab-group>
      <md-tab *ngFor="let notebook of getNotebooks()" label="{{notebook.name}}">
        <app-note-list [notebookId]="notebook.id" [notebookName]="notebook.name"></app-note-list>
      </md-tab>
    </md-tab-group>
    
    <hr/>
    
    <button id="showCreateNotebookDialog-btn" (click)="showCreateNotebookDialog()" md-button>Add notebook</button>
    <button (click)="exportNotebooks()" md-button>Export notebooks to JSON</button><br/>
    
    <label for="importNotebooks-input">Import notebooks from JSON</label>
    <input id="importNotebooks-input" type="file" (change)="importNotebooks($event)">
  `
})
export class NotebookListComponent implements OnInit {

  private notebooks: Notebook[];

  constructor(@Inject('evernote') private evernote, private createNoteBookDialog: MdDialog) {
  }

  /**
   * Loads the list of the available notebooks.
   */
  ngOnInit(): void {
    this.notebooks = this.evernote.getNotebooks();
  }

  /**
   * Returns the list of available notebooks.
   * @returns see description.
   */
  getNotebooks(): Notebook[] {
    return this.notebooks;
  }

  /**
   * Shows Create Notebook panel.
   */
  showCreateNotebookDialog(): void {
    this.createNoteBookDialog.open(CreateNotebookComponent);
  }

  /**
   * Exports all the notebooks to JSON file and forces browser to save it.
   */
  exportNotebooks(): void {
    fileSaver.saveAs(new Blob([JSON.stringify(this.notebooks)], {type: 'text/json'}), 'notebooks.json');
  }

  /**
   * Imports the notebooks from JSON file and refreshes the notebooks list.
   * @param event input[file] change event.
   */
  importNotebooks(event): void {
    let fileReader = new FileReader();
    let self = this;

    fileReader.onloadend = function (e) {
      self.evernote.replaceNotebooks(JSON.parse(fileReader.result));
      self.notebooks = self.evernote.getNotebooks();
    };

    fileReader.readAsText(event.target.files[0]);
  }

}
