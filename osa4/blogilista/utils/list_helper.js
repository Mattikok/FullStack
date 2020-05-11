// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => sum + blog.likes
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (!blogs.length) {
    return 0
  }

  const reducer = (prevBlog, blog) => (prevBlog.likes > blog.likes ? prevBlog : blog)

  return blogs.reduce(reducer, blogs[0])
}

const mostBlogs = (blogs) => {
  if (!blogs.length) {
    return 0
  }

  const distinctAuthors = [...new Set(blogs.map((blog) => blog.author))]

  const authorsWithBlogs = distinctAuthors.map((author) => ({
    author,
    blogs: blogs.filter((n) => author === n.author).length,
  }))

  const reducer = (prev, now) => (prev.blogs > now.blogs ? prev : now)

  return authorsWithBlogs.reduce(reducer, authorsWithBlogs[0])
}

const mostLikes = (blogs) => {
  if (!blogs.length) {
    return 0
  }

  const distinctAuthors = [...new Set(blogs.map((blog) => blog.author))]
  const summer = (likes, comp) => likes + comp.likes

  const authorsWithLikes = distinctAuthors.map((author) => ({
    author,
    likes: blogs.filter((n) => n.author === author).reduce(summer, 0),
  }))

  const reducer = (prev, comp) => (prev.likes > comp.likes ? prev : comp)
  return authorsWithLikes.reduce(reducer, authorsWithLikes[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
