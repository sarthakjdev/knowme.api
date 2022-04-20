import express from 'express'
import blogContoller from '@controllers/v1/blogs.controller'

const router = express.Router()

router.get('/', blogContoller.getBlogs)
router.post('/', blogContoller.addBlog)
router.get('/:id', blogContoller.getBlogById)
router.delete('/delete', blogContoller.deleteBlog)


export default router