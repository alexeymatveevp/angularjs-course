import {Injectable} from '@angular/core';
import Note from '../types/note';
import Notebook from '../types/notebook';

@Injectable()
export class EvernoteService {

  private initialId: number = 0;

  private notebooks: Notebook[] = [
    new Notebook(0, 'Test Notebook', [new Note(0, 'Initial note', 'Some content')])
  ];

  /**
   * Returns a list of all the available notebooks.
   * @returns see description.
   */
  getNotebooks(): Notebook[] {
    return this.notebooks;
  }

  /**
   * Adds new notebook with the specified name
   * @param name name of the new notebook.
   */
  addNotebook(name: string) {
    this.notebooks.push(new Notebook(++this.initialId, name, []));
  }

  /**
   * Replaces the notebooks by the specified array.
   * @param notebooks new array of the notebooks.
   */
  replaceNotebooks(notebooks: Notebook[]) {
    this.notebooks = notebooks;
  }

  /**
   * Deletes a notebook with the specified id.
   * @param notebookId id of the notebook that will be deleted.
   * @returns true in case of success.
   */
  deleteNotebook(notebookId: number): boolean {
    let index = this.notebooks.findIndex(notebook => notebook.id === notebookId);

    if (index === -1) {
      return false;
    }

    this.notebooks.splice(index, 1);
    return true;
  }

  /**
   * Returns an array of all the notes for the specified notebook id.
   * @param notebookId notebook identifier.
   * @returns array or undefined.
   */
  getNotes(notebookId: number): Note[] | undefined {
    let notebook = this.notebooks.find(n => n.id === notebookId);
    return this.isUndefined(notebook) ? undefined : notebook.notes;
  }

  /**
   * Adds new note with the specified criteria.
   * @param notebookId notebook identifier.
   * @param title note title
   * @param text note text.
   * @returns true in case of success.
   */
  addNote(notebookId: number, title: string, text: string): boolean {
    let notes = this.getNotes(notebookId);

    if (this.isUndefined(notes)) {
      return false;
    }

    notes.push(new Note(++this.initialId, title, text));
    return true;
  }

  /**
   * Deletes a note with the specified notebook id and note id.
   * @param notebookId notebook identifier.
   * @param noteId note identifier.
   * @returns true in case of success.
   */
  deleteNote(notebookId: number, noteId: number): boolean {
    let notes = this.getNotes(notebookId);

    if (this.isUndefined(notes)) {
      return false;
    }

    let index = notes.findIndex(note => note.id === noteId);

    if (index === -1) {
      return false;
    }

    notes.splice(index, 1);
    return true;
  }

  /**
   * Updates a note with the specified data.
   * @param notebookId notebook identifier.
   * @param noteId note identifier.
   * @param title new note title.
   * @param text new note text.
   * @returns true in case of success.
   */
  updateNote(notebookId: number, noteId: number, title: string, text: string): boolean {
    let notes = this.getNotes(notebookId);

    if (this.isUndefined(notes)) {
      return false;
    }

    let note = notes.find(n => n.id === noteId);

    if (this.isUndefined(note)) {
      return false;
    }
    note.title = title;
    note.text = text;
    return true;
  }

  private isUndefined(object: any): boolean {
    return object === undefined;
  }

}
