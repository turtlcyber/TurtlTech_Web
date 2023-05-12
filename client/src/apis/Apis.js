import axios from "axios"
let ipAddress = '192.168.1.167';
let port = 4001;

export const blogPost = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/blog`,
      data: data
  })
}

export const blogBySlug = (slug) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/blog/${slug}`,
  })
}
export const allBlogs = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/blogs`,
  })
}