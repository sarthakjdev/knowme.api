import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class BlogContoller {
    /**
     *  Get Blogs
     */
    static async getBlogs(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get Blog By Id
     */
         static async getBlogById(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }

    /**
     *  Add Blog
    */
         static async addBlog(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }

    /**
     *  Delete Blog
    */
             static async deleteBlog(req: Request, res:Response) {
                try {
                    return res.status(200).send(messages.basic)
                } catch (error) {
                    return res.status(500).send(messages.serverError)
                }
            }
}
