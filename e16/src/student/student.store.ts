import {Student} from "./student";

export class StudentStore {
    private readonly studentIndex: { [id: number]: Student } = {}
    private index: number = 0;

    public findAll(): Student[] {
        return Object.values(this.studentIndex);
    }

    public put(student: Student) {
        student.id = this.index;
        this.index++;

        this.studentIndex[student.id] = student;
    }

    public delete(id: number): boolean {
        if (this.studentIndex[id] === undefined) return false

        delete this.studentIndex[id];
        return true;
    }

    public change(id: number, newStudent: Student): boolean {
        if (this.studentIndex[id] === undefined) return false;

        this.studentIndex[id].firstName = newStudent.firstName;
        this.studentIndex[id].lastName = newStudent.lastName;
        this.studentIndex[id].age = newStudent.age;

        return true;
    }
}