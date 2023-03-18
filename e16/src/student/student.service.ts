import {Student} from "./student";
import {StudentStore} from "./student.store";

export class StudentService {
    private studentStore: StudentStore;

    constructor() {
        this.studentStore = new StudentStore();
    }

    public findAll(): Student[] {
        return this.studentStore.findAll();
    }

    public create(student: Student): Student {
        if (student.age < 0 || student.firstName === "" || student.lastName === "") throw new Error("invalid student");

        this.studentStore.put(student);
        return student;
    }

    public delete(id: number) {
        let status = this.studentStore.delete(id);

        if(!status) throw new Error("could not delete student because id does not exist");
    }

    public change(id: number, newStudent: Student) {
        if (newStudent.age < 0 || newStudent.firstName === "" || newStudent.lastName === "") throw new Error("invalid student");

        let status = this.studentStore.change(id, newStudent);

        if(!status) throw new Error("could not change student because id does not exist");
    }
}