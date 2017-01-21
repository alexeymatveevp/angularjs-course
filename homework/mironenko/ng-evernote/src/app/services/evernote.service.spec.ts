/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {EvernoteService} from './evernote.service';

describe('EvernoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvernoteService]
    });
  });

  it('should assert that there is 1 predefined notebook...', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.getNotebooks().length).toBe(1);
  }));

  it('should add new notebook', inject([EvernoteService], (service: EvernoteService) => {
    let notebookName = 'newNotebook';

    service.addNotebook(notebookName);
    let notebooks = service.getNotebooks();
    expect(notebooks.findIndex(n => n.name === notebookName)).toBeGreaterThanOrEqual(0);
  }));

  it('should delete the predefined notebook', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.deleteNotebook(0)).toBe(true);
    expect(service.getNotebooks().length).toBe(0);
  }));

  it('should assert that there is 1 predefined note...', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.getNotes(0).length).toBe(1);
  }));

  it('should return undefined for non-existent note', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.getNotes(-1)).toBeUndefined();
  }));


  it('should add new note and return true', inject([EvernoteService], (service: EvernoteService) => {
    let title = 'someTestTitle';
    let text = 'someTestText';
    expect(service.addNote(0, title, text)).toBe(true);

    let createdNote = service.getNotes(0).find(n => n.title === title);
    expect(createdNote).toBeDefined();
    expect(createdNote.text).toEqual(text);
  }));

  it('should not add new note and return false, because notebook does not exist', inject([EvernoteService], (service: EvernoteService) => {
    let title = 'someTestTitle';
    let text = 'someTestText';
    expect(service.addNote(42, title, text)).toBe(false);

    expect(service.getNotes(42)).toBeUndefined();
  }));

  it('should delete a note and return true', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.deleteNote(0, 0)).toBe(true);

    expect(service.getNotes(0).length).toBe(0);
  }));

  it('should not delete a note and return false, because notebook does not exist', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.deleteNote(42, 0)).toBe(false);
  }));

  it('should not delete a note and return false, because note does not exist', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.deleteNote(0, 42)).toBe(false);
  }));

  it('should update a note and return true', inject([EvernoteService], (service: EvernoteService) => {
    let title = 'someTestTitle';
    let text = 'someTestText';
    expect(service.updateNote(0, 0, title, text)).toBe(true);

    let updatedNote = service.getNotes(0).find(n => n.title === title);
    expect(updatedNote).toBeDefined();
    expect(updatedNote.text).toEqual(text);
  }));

  it('should not update a note and return false, because notebook does not exist', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.updateNote(42, 0, 'someTestTitle', 'someTestText')).toBe(false);
  }));

  it('should not update a note and return false, because note does not exist', inject([EvernoteService], (service: EvernoteService) => {
    expect(service.updateNote(0, 42, 'someTestTitle', 'someTestText')).toBe(false);
  }));
});
