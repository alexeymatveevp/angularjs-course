class Note {
  id: number;
  title: string;
  text: string;

  constructor(id: number, title: string, text: string) {
    this.id = id;
    this.title = title;
    this.text = text;
  }

  static clone(note: Note): Note {
    return new Note(note.id, note.title, note.text);
  }
}

export default Note;
