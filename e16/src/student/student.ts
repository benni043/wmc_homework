export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    id: number
}

export interface StudentStore {
    findAll(): Promise<Student[]>,
    put(student: Student): Promise<void>,
    delete(id: number): Promise<boolean>,
    change(id: number, newStudent: Student): Promise<boolean>

}