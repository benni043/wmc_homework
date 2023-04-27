import {Student, StudentStore} from "./student";
import {DBPool} from "./dbPool";
import {Int, VarChar} from "mssql";

export class DBStudentStore implements StudentStore {

    private connectionPool = DBPool.getInstance();

    async change(id: number, newStudent: Student): Promise<boolean> {
        try {
            await this.connectionPool
                .request()
                .input('id', Int, id)
                .input('firstname', VarChar, newStudent.firstName)
                .input('lastname', VarChar, newStudent.lastName)
                .input('age', Int, newStudent.age)
                .query('UPDATE student SET firstname=@firstname, lastname=@lastname, age=@age WHERE id=@id');
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.connectionPool
                .request()
                .input('id', Int, id)
                .query('UPDATE student SET recordState=2 WHERE id=@id');
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async findAll(): Promise<Student[]> {
        try {
            let result1 = await this.connectionPool
                .request()
                .input('input_parameter', Int)
                .query<Student>('select id, firstname, lastname, age from student WHERE recordState <> 2')
            return result1.recordset;
        } catch (e) {
            console.log(e);
            throw new Error("failed to get the student")
        }
    }

    async create(student: Student): Promise<void> {
        try {
            await this.connectionPool
                .request()
                .input('firstname', VarChar, student.firstName)
                .input('lastname', Int, student.lastName)
                .input('age', Int, student.age)
                .query('INSERT INTO STUDENT (firstname, lastname, AGE) VALUES (@firstname, @lastname, @age);');
        } catch (e) {
            console.log(e);
            throw new Error("failed to insert the product with");
        }
    }

}