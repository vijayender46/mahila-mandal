import {connectMongoDB} from '../../../lib/mongodb';
import {NextResponse} from 'next/server';
import Post from '../../../models/post';

export async function POST(req) {

    try {
        const {title, content} = await req.json();
        await connectMongoDB();
        await Post.create({title, content});

        return NextResponse.json(
            {
                message: 'Post updated'
            },
            {
                status: 201
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Error occured while posting Article!'
            },
            {
                status: 500
            }

        );
    }
}