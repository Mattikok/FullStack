const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')

describe('when there is initially some blogs saved', () => {
  beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
  })

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(helper.initialBlogs.length)
  })

  test('a specific note is within the returned notes', async () => {
    const response = await api.get('/api/blogs')

    const titles = response.body.map((r) => r.title)
    expect(titles).toContain(
      'Go To Statement Considered Harmful',
    )
  })

  test('id field named id', async () => {
    const response = await api.get('/api/blogs')

    const blogi = response.body[0]

    expect(blogi.id.toBeDefined)
  })

  describe('addition of a new blog', () => {
    test('succeeds with valid data', async () => {
      const newBlog = {
        title: 'testi1',
        author: 'matti k',
        url: 'hmmmm.com',
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-type', /application\/json/)

      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

      const authors = blogsAtEnd.map((n) => n.author)
      expect(authors).toContain('matti k')
    })

    test('like is given default value', async () => {
      const newBlog = {
        title: 'testi12',
        author: 'matti k',
        url: 'hmmhmm.com',
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-type', /application\/json/)

      const blogsAtEnd = await helper.blogsInDb()
      const addedBlog = blogsAtEnd.filter((n) => n.author === 'matti k')[0]
      expect(addedBlog.likes).toBe(0)
    })

    test('fails with status code 400 if no url given', async () => {
      const newBlog = {
        title: 'testi12',
        author: 'mattikk',
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

      const blogsAtEnd = await helper.blogsInDb()
      expect(helper.initialBlogs.length).toBe(blogsAtEnd.length)
    })

    test('fails with status code 400 if no title given', async () => {
      const newBlog = {
        author: 'mattikk',
        url: 'hmm321hmm.com',
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

      const blogsAtEnd = await helper.blogsInDb()
      expect(helper.initialBlogs.length).toBe(blogsAtEnd.length)
    })
  })
})

afterAll(() => {
  console.log('suljettu yhteys');
  mongoose.connection.close()
})
