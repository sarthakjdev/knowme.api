import prisma from '@lib/prisma'
import { Blogs } from '@prisma/client'

export default class BlogFactory {
    /**
     * Add Blog
     * @static
     * @memberof BlogFactory
     */
    static async addBlog(blogData: Blogs): Promise<Blogs> {
        const blog = await prisma.blogs.create({
            data: {
                ...blogData,
            },
        })

        return blog
    }

    /**
     * Get Blog
     * @static
     * @memberof BlogFactory
     */
    static async getBlog(id: string): Promise<Blogs> {
        const blog = await prisma.blogs.findFirst({
            where: {
                id,
            },
        })

        return blog
    }

    /**
    * Get all Blog
    * @static
    * @memberof BlogFactory
    */
    static async getAllBlogs(): Promise<Blogs[]> {
        const blogs = await prisma.blogs.findMany()

        return blogs
    }

    /**
     * Delete Blog
     * @static
     * @memberof BlogFactory
     */
    static async deleteBlog(id: string): Promise<void> {
        await prisma.blogs.delete({
            where: {
                id,
            },
        })
    }
}
