import {Student, StudentStore} from "./student";

export class InMemoryStudentStore implements StudentStore{
    private students: Student[] = [];
    private index: number = 0;

    public async findAll(): Promise<Student[]> {
        return this.students;
    }

    public async put(student: Student): Promise<void> {
        student.id = this.index;
        this.index++;

        this.students.push(student);
    }

    public async delete(id: number): Promise<boolean> {
        const index = this.students.findIndex(student => student.id === id);

        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }

    public async change(id: number, newStudent: Student): Promise<boolean> {
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