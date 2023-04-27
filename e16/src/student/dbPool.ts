import {ConnectionPool} from 'mssql';

export class DBPool{
    private static  readonly config = {
        user: 'benni043',
        password: 'benni043',
        server: '185.194.142.160', // You can use 'localhost\\instance' to connect to named instance
        port: 3306,
        database: 'wmc',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        trustServerCertificate: true
    }
    private static instance:ConnectionPool|undefined;

    static getInstance():ConnectionPool{
        if(!this.instance){
            throw "Pool not connected to DB";
        }
        return this.instance
    }

    static async connect(){
        this.instance = await (new ConnectionPool(this.config)).connect();
    }
}