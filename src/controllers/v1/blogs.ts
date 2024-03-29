import { Request, Response } from 'express'
import messages from '@constants/messages'
import BlogFactory from '@factory/BlogFactory'

export default class BlogContoller {
    /**
     * Get Blogs
     * @static
     * @memberof BlogController
     */
    static async getBlogs(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            const blog = await BlogFactory.getBlog(id)
            if (!blog) return res.status(400).send(messages.notFound)

            return res.status(200).json(blog)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Get all Blogs
     * @static
     * @memberof BlogController
     */
    static async getAllBlogs(req: Request, res: Response) {
        try {
            const blogs = await BlogFactory.getAllBlogs()

            return res.status(200).json(blogs)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Add Blog
     * @static
     * @memberof BlogController
     */
    static async addBlog(req: Request, res: Response) {
        try {
            const blogData = req.body

            if (!blogData.title || !blogData.description || !blogData.tenure) return res.status(400).send(messages.badReq)

            const blog = await BlogFactory.addBlog(blogData)

            return res.status(200).json(blog)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete Blog
     * @static
     * @memberof BlogController
     */
    static async deleteBlog(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            await BlogFactory.deleteBlog(id)

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
