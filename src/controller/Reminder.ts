import { NextFunction, Request, Response } from 'express';
import Create from '../services/Reminder/create';
import getAll from '../services/Reminder/getAll';
import Get from '../services/Reminder/getOne';

export default class ReminderController {
    public static Create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await Create(req.body);
            return res.status(201).send(
                {
                    message: 'Successful',
                    data: result,
                },
            );
            
        } catch (error) {
            next(error);
        }
    };

    public static Get = async (req: Request, res: Response, next: NextFunction) => {
        const {id} = req.params;
        try {
            const result = await Get({id});
            return res.status(200).send(
                {
                    message: 'Successful',
                    data: result,
                },
            );
            
        } catch (error) {
            next(error);
        }
    };

    public static GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await getAll({
                user: (req.query.user) as string,
                after: (req.query.after) as string,
            });

            return res.status(200).send(
                {
                    message: 'Successful',
                    data: result,
                },
            );

        } catch (error) {
            next(error);
        }
    };

    public static notAllowed = async (req: Request, res: Response, next: NextFunction) => {
        try {
            return res.status(405).send({
                status: 405,
                error: "Method not allowed"
            });

        } catch (error) {
            next(error);
        }
    };

}
