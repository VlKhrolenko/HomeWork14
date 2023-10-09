//Вам необхідно написати додаток Todо list, використовуючи синтаксис класів.
// У списку нотаток повинні бути методи для додавання нової нотатки,
// видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього,
// у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те,
// скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.
class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        if (noteText.trim() !== '') {
            const note = {
                text: noteText,
                completed: false
            };
            this.notes.push(note);
            return { message: `Нотатка "${noteText}" була додана.` };
        } else {
            return { error: 'Нотатка не може бути порожньою.' };
        }
    }

    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            if (newText.trim() !== '') {
                this.notes[index].text = newText;
                return { message: 'Нотатку було відредаговано.' };
            } else {
                return { error: 'Нотатка не може бути порожньою.' };
            }
        } else {
            return { error: 'Нотатка з вказаним індексом не існує.' };
        }
    }

    removeNote(index) {
        if (index >= 0 && index < this.notes.length) {
            const removedNote = this.notes.splice(index, 1);
            return { message: `Нотатка "${removedNote[0].text}" була видалена.` };
        } else {
            return { error: 'Нотатка з вказаним індексом не існує.' };
        }
    }

    markAsCompleted(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = true;
            return { message: 'Нотатку було позначено як виконану.' };
        } else {
            return { error: 'Нотатка з вказаним індексом не існує.' };
        }
    }

    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            const note = this.notes[index];
            return {
                text: note.text,
                status: note.completed ? 'Виконано' : 'Не виконано'
            };
        } else {
            return { error: 'Нотатка з вказаним індексом не існує.' };
        }
    }

    getNoteList() {
        return noteList = this.notes.map((note, index) => ({
            index: index + 1,
            text: note.text,
            status: note.completed ? 'Виконано' : 'Не виконано'
        }));

    }

    getTotalNotes() {
        return { total: this.notes.length };
    }

    getRemainingNotes() {
        const remaining = this.notes.filter(note => !note.completed).length;
        return { remaining };
    }
}

const todoList = new TodoList();

todoList.addNote('Приклад нотатки 1');
todoList.addNote('Приклад нотатки 2');
todoList.addNote(''); // Спроба додати порожню нотатку
todoList.getNoteList();

todoList.editNote(0, 'Новий текст нотатки 1');
todoList.editNote(3, 'Спроба редагування нотатки з неіснуючим індексом');

todoList.markAsCompleted(1);
todoList.markAsCompleted(4); // Спроба позначити неіснуючу нотатку

todoList.getNoteInfo(1);
todoList.getNoteInfo(2); // Спроба отримати інформацію про неіснуючу нотатку

todoList.removeNote(2); // Спроба видалити неіснуючу нотатку
todoList.removeNote(0);

todoList.getRemainingNotes();
todoList.getTotalNotes();