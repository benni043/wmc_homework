import {Router} from "express";
import {StudentService} from "./student.service";

export class StudentRouter {
    private readonly studentService: StudentService;
    private readonly _router: Router;

    constructor() {
        this.studentService = new StudentService();
        this._router = Router();

        this.router.get("/", async (req, res) => {
            res.send(await this.studentService.findAll()).status(200);
            res.end();
        });

        this.router.post("/", async (req, res) => {
            let student = req.body;

            try {
                let createdStudent = await this.studentService.create(student);
                res.send(createdStudent).status(200);
            } catch {
                res.status(400);
            }

            res.end();
        });

        this.router.delete("/:sid", async (req, res) => {
            let idToDelete = parseInt(req.params.sid);

            try {
                await this.studentService.delete(idToDelete);
                res.status(200);
            } catch {
                res.status(400);
            }

            res.end();
        });

        this.router.put("/:sid", async (req, res) => {
            let idToDelete = parseInt(req.params.sid);
            let newStudent = req.body;

            try {
                await this.studentService.change(idToDelete, newStudent);
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