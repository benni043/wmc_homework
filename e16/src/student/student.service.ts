import {Student, StudentStore} from "./student";
import {DBStudentStore} from "./DBStudentStore";

export class StudentService {
    private studentStore: StudentStore;

    constructor() {
        this.studentStore = new DBStudentStore();
    }

    public async findAll(): Promise<Student[]> {
        return this.studentStore.findAll();
    }

    public async create(student: Student): Promise<Student> {
        if (student.age < 0 || student.firstName === "" || student.lastName === "") throw new Error("invalid student");

        await this.studentStore.create(student);
        return student;
    }

    public async delete(id: number): Promise<void> {
        let status = await this.studentStore.delete(id);

        if(!status) throw new Error("could not delete student because id does not exist");
    }

    public async change(id: number, newStudent: Student): Promise<void> {
        if (newStudent.age < 0 || newStudent.firstName === "" || newStudent.lastName === "") throw new Error("invalid student");

        let status = await this.studentStore.change(id, newStudent);

        if(!status) throw new Error("could not change student because id does not exist");
    }
}