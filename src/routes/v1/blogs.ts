import express from 'express'
import blogContoller from '@controllers/v1/blogs'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * Get blogs
 */
router.get('/:id', blogContoller.getBlogs)

/**
 * Add blogs
 */
router.post('/', isAuthenticated, authorizeAdmin, blogContoller.addBlog)

/**
 * Get all blogs
 */
router.get('/all', blogContoller.getAllBlogs)

/**
 * Delete a blog
 */
router.delete('/delete', isAuthenticated, authorizeAdmin, blogContoller.deleteBlog)

export default router
