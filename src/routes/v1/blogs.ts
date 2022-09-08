import express from 'express'
import blogContoller from '@controllers/v1/blogs'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * Get blogs
 */
router.get('/:id', blogContoller.getBlogs)

/**
 * Get all blogs
 */
router.get('/all', blogContoller.getAllBlogs)

/**
 * Add blogs
 */
router.post('/', isAuthenticated, authorizeAdmin, blogContoller.addBlog)

/**
 * Delete a blog
 */
router.delete('/:id', isAuthenticated, authorizeAdmin, blogContoller.deleteBlog)

/**
 * Update a blog
 */
router.put('/:id', isAuthenticated, authorizeAdmin)

export default router
