import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {EvernoteService} from './services/evernote.service';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NotebookListComponent} from './components/notebook-list/notebook-list.component';
import {CreateNotebookComponent} from './components/create-notebook/create-notebook.component';
import {NoteDialog} from './components/note/note.dialog';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NotebookListComponent,
    CreateNotebookComponent,
    NoteDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [
    CreateNotebookComponent,
    NoteDialog
  ],
  providers: [{provide: 'evernote', useClass: EvernoteService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
