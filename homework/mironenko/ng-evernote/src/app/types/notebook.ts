import Note from './note';

class Notebook {
  id: number;
  name: string;
  notes: Note[];

  constructor(id: number, name: string, notes: Note[]) {
    this.id = id;
    this.name = name;
    this.notes = notes;
  }
}

export default Notebook;
