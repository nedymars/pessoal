/* get /users 
get /users/:uuid 
post /users 
put /users/:randomUUID 
delete /users/:uuid */

import { Router, Response, Request, NextFunction } from 'express';
import {StatusCodes} from 'http-status-codes';

const userRoute = Router();

userRoute.get('/users',(req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Renan'}];
    res.status(StatusCodes.OK).send({users});
})

userRoute.get('/users/:uuid',(req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
})

userRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
})

userRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send({modifiedUser});
})

userRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.sendStatus(StatusCodes.OK);
})

export default userRoute;