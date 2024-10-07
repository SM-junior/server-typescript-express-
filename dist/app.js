"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//middleware function
const middleware = (req, res, next) => {
    console.log(req.url, req.route);
    next();
    //next()-->eta call na korle client side a loading dekhabe, je loading ses hobar na
};
//*** app.use(middleware)-->you are telling the Express application to execute middleware function for every incoming request
app.get('/', middleware, (req, res) => {
    res.send('Hello World! from app.ts');
});
//req.query
app.get('/users', middleware, (req, res) => {
    //url=http://localhost:3000/users?age=30&sort=asc
    const { age, sort } = req.query;
    console.log(age, sort);
    res.send(`age: ${age} sort: ${sort}`);
});
app.get('/name', (req, res) => {
    //url=http://localhost:3000/name?name=shahin
    const { name } = req.query;
    console.log(name);
    res.send(`name:${name}`);
});
//req.params
app.get('/:id', (req, res) => {
    // :id-->je nam dibo(ekhane id nam dici) destructure korar somoy sei same name dite hobe 
    const { id } = req.params; // upore ':id' dici tai--> {id}=req.params
    console.log('id:', id);
    res.send(`id: ${id}`);
});
//req.body
//-->client side theke data aseb. sei data 'req.body' ar maddhome server site a access kora lagbe
app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});
//................................express.Router()................................
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    res.json({
        success: true,
        message: 'user is created successfully',
        data: user
    });
});
const courseRouter = express_1.default.Router();
app.use('/api/v1/courses', courseRouter);
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: 'course is created successfully',
        data: course
    });
});
exports.default = app;
//............create server with typescript, express..............
//-->create a folder-->open with vs code
//-->install express, typescript(as dependency)
//-->npm init -y (create server)
//-->create src folder and dist folder
//-->create app folder under src folder
//-->create app.ts & server.ts file under src folder
//-->npm tsc --init(create tsconfig.json file)
//-->open tsconfig.json file
//-->rootDir:"./src/"
//-->outDir:"./dist"
//-->save tsconfig.ts file
//-->
//..........some commands..........
//-->tsc (means typescript compiler. convert ts file to js file)
//-->tsc -w (watch mode. if change anything is ts file it automatically convert into js file)
// notun vabe tsc deoa lagbe na.
// but ai terminal block hoye jabe. server automatically run hobe na
// toknon notun terminal open kore abar server k run korano lagbe
// file a kono kicu change korle jate save deoar sathe sathe server automatic run hoye
//jay se jonno nodemon user korbo. tar jonno
//-->npm i -D nodemon
//-->go to package.json file
//-->"start:dev":"nodemon ./dist/server.js" --> add this on script object and save
//-->npm run start:dev -->server run hobe
// ............req.params, req.query..............
