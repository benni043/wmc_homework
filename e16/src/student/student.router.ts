import {Router} from "express";
import {StudentService} from "./student.service";

export class StudentRouter {
    private readonly studentService: StudentService;
    private readonly _router: Router;

    constructor() {
        this.studentService = new StudentService();
        this._router = Router();

        this.router.get("/", (req, res) => {
            res.send(this.studentService.findAll()).status(200);
            res.end();
        });

        this.router.post("/", (req, res) => {
            let student = req.body;

            try {
                let createdStudent = this.studentService.create(student);
                res.send(createdStudent).status(200);
            } catch {
                res.status(400);
            }

            res.end();
        });

        this.router.delete("/:sid", (req, res) => {
            let idToDelete = parseInt(req.params.sid);

            try {
                this.studentService.delete(idToDelete);
                res.status(200);
            } catch {
                res.status(400);
            }

            res.end();
        });

        this.router.put("/:sid", (req, res) => {
            let idToDelete = parseInt(req.params.sid);
            let newStudent = req.body;

            try {
                this.studentService.change(idToDelete, newStudent);
                res.status(200);
            } catch {
                res.status(400);
            }

            res.end();
        });
    }

    public get router(): Router {
        return this._router;
    }
}