import {Student} from "./student";
import {InMemoryStudentStore} from "./inMemoryStudent.store";

export class StudentService {
    private studentStore: InMemoryStudentStore;

    constructor() {
        this.studentStore = new InMemoryStudentStore();
    }

    public async findAll(): Promise<Student[]> {
        return this.studentStore.findAll();
    }

    public async create(student: Student): Promise<Student> {
        if (student.age < 0 || student.firstName === "" || student.lastName === "") throw new Error("invalid student");

        await this.studentStore.put(student);
        return student;
    }

    public async delete(id: number): Promise<void> {
        let status = this.studentStore.delete(id);

        if(!status) throw new Error("could not delete student because id does not exist");
    }

    public async change(id: number, newStudent: Student): Promise<void> {
        if (newStudent.age < 0 || newStudent.firstName === "" || newStudent.lastName === "") throw new Error("invalid student");

        let status = this.studentStore.change(id, newStudent);

        if(!status) throw new Error("could not change student because id does not exist");
    }
}