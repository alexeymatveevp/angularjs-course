import {Component, Inject, Input, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import * as fileSaver from 'file-saver';

import Note from '../../types/note';
import {NoteDialog} from '../note/note.dialog';

@Component({
  selector: 'app-note-list',
  template: `
    <table id="note-tbl">
      <thead>
        <tr>
          <th>ID</th> 
          <th>Name</th>
          <th>
            <button id="triggerMenu-btn" md-icon-button [mdMenuTriggerFor]="menu">
              <md-icon>more_vert</md-icon>
            </button>
            <md-menu #menu="mdMenu">
              <button id="showCreateNoteDialog-btn" (click)="createNote()" md-menu-item>
                <md-icon>add</md-icon>
                <span>Add New Note</span>
              </button>
              <button (click)="exportNotes()" md-menu-item>
                <md-icon>backup</md-icon>
                <span>Export Notes to JSON</span>
              </button>
              <button (click)="deleteNotebook(notebookId)" md-menu-item>
                <md-icon>delete</md-icon>
                <span>Delete Notebook</span>
              </button>
            </md-menu>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let note of notes">
          <td>{{note.id}}</td>
          <td>{{note.title}}</td>
          <td><button (click)="showNote(note)" md-icon-button><md-icon>edit</md-icon></button></td>
          <td><button (click)="deleteNote(note.id)" md-icon-button><md-icon>delete</md-icon></button></td>
        </tr>        
      </tbody>
    </table>
  `
})
export class NoteListComponent implements OnInit {

  @Input() notebookId: number;
  @Input() notebookName: string;

  notes: Note[];

  constructor(@Inject('evernote') private evernote, private dialog: MdDialog) {
  }

  /**
   * Loads the list of the available notes for the current notebookId.
   */
  ngOnInit(): void {
    this.notes = this.evernote.getNotes(this.notebookId);
  }

  createNote(): void {
    let dialogRef: MdDialogRef<NoteDialog> = this.dialog.open(NoteDialog);

    let self = this;

    function createNote(result: any | undefined) {
      if (result !== undefined) {
        self.evernote.addNote(self.notebookId, result.title, result.text);
      }
    }

    dialogRef.afterClosed().subscribe(res => createNote(res));
  }

  /**
   * Shows a note.
   * @param note note.
   */
  showNote(note: Note): void {
    let dialogRef: MdDialogRef<NoteDialog> = this.dialog.open(NoteDialog);
    dialogRef.componentInstance.title = note.title;
    dialogRef.componentInstance.text = note.text;

    let self = this;

    function updateNote(result: any | undefined) {
      if (result !== undefined) {
        self.evernote.updateNote(self.notebookId, note.id, result.title, result.text);
      }
    }

    dialogRef.afterClosed().subscribe(res => updateNote(res));
  }

  /**
   * Deletes the notes with the specified id.
   * @param id id of the note to be deleted.
   */
  deleteNote(id: number): void {
    this.evernote.deleteNote(this.notebookId, id);
  }

  /**
   * Exports all the notes to JSON file and forces browser to save it.
   */
  exportNotes(): void {
    fileSaver.saveAs(new Blob([JSON.stringify(this.notes)], {type: 'text/json'}), this.notebookName + '.json');
  }

  /**
   * Deletes the current notebook.
   */
  deleteNotebook(): void {
    this.evernote.deleteNotebook(this.notebookId);
  }
}
