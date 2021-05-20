import { log } from 'console';
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

        try {
            const client = await MongoClient.connect(
                `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gls1t.mongodb.net/block-blog?retryWrites=true&w=majority`
            );
            const newMessage = { email, name, message };

            const result = await client
                .db()
                .collection('messages')
                .insertOne(newMessage);
            const id = result.insertedId;

            client.close();

            res.status(201).json({
                status: 'successfully stored message!',
                message: { id, ...newMessage },
            });
        } catch (error) {
            res.status(500).json({
                message: 'Problem with collection to the database',
            });
        }
    }
};
