import {ProductService} from "./product.service";
import {Bulk, Product} from "./product";
import {Router} from "express";

export class ProductRouter {
    private readonly productService: ProductService;
    private readonly _router: Router;

    constructor() {
        this.productService = new ProductService();
        this._router = Router();

        this.router.get("/", (req, res) => {
            const products: Product[] = this.productService.findAll();
            res.status(200).send(products);
        });

        this.router.get("/:sid", (req, res) => {
            const sid: number = parseInt(req.params.sid, 10);

            const product: Product = this.productService.find(sid);

            if (product) {
                return res.status(200).send(product);
            }

            res.status(404).send("item not found");
        });

        this.router.post("/", (req, res) => {
            const product: Product = req.body;

            if(product === undefined || product.price < 0) {
                res.status(400).send("price negative or product null");
                return;
            }

            const newProduct = this.productService.create(product);
            res.status(201).json(newProduct);
        });

        this.router.post("/bulk", (req, res) => {
            const products: Product[] = req.body;
            let newProducts: Product[] = [];
            let productCount: number = 0;

            for (let product of products) {
                if(product === undefined || product.price < 0) {
                    res.status(400).send("price negative or product null");
                    continue;
                }

                const newProduct = this.productService.create(product);
                newProducts.push(newProduct);
                productCount++;
            }

            let bulk = {
                productCount: productCount,
                products: newProducts
            }

            res.status(201).json(bulk);
        })

        this.router.post("/delete", (req, res) => {

        })

        /** Add new Sub-Routes for Main-Route 'api/product' here (i.e. delete, update, search) */
    }

    public get router(): Router {
        return this._router;
    }
}