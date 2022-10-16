import { NextFunction, Request, Response } from 'express';
import Create from '../services/User/create';

export default class UserController {
    public static Create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await Create(req.body);
            return res.status(201).send(
                {
                    message: 'User created Successfully',
                    data: result,
                },
            );
        } catch (error) {
            next(error);
        }
    };

}
