import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim === '' ||
            !message ||
            message.trim === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = { email, name, message };

        log(newMessage);
        res.status(201).json({
            status: 'successfully stored message!',
            message: newMessage,
        });
    }
};
