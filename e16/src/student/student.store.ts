import {Student} from "./student";

export class StudentStore {
    private students: Student[] = [];
    private index: number = 0;


    public findAll(): Student[] {
        return this.students;
    }

    public put(student: Student) {
        student.id = this.index;
        this.index++;

        this.students.push(student);
    }

    public delete(id: number): boolean {
        const index = this.students.findIndex(student => student.id === id);

        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }

    public change(id: number, newStudent: Student): boolean {
        const index = this.students.findIndex(student => student.id === id);

        if (index !== -1) {
            this.students[index].firstName = newStudent.firstName;
            this.students[index].lastName = newStudent.lastName;
            this.students[index].age = newStudent.age;
            return true;
        }
        return false;
    }
}