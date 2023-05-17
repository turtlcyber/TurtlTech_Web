import axios from "axios"
let ipAddress = '192.168.1.218';
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

export const getAllImages = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/images`,
  })
}

export const uploadImageFn = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/image`,
      data:data,
  })
}

export const saveTestimonialApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/testimonial`,
      data:data,
  })
}

export const saveCertificatelApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/certificate`,
      data:data,
  })
}

export const getAllCertificateApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/certificates`,
  
  })
}
export const getAllTestimonialApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/testimonials`,
      
  })
}


export const saveEventsApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/event`,
      data:data,
  })
}
export const getAllPageImages = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/allpageimages`,
  })
}
export const getAllSeosApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/getallseos`,
  })
}
export const getSeoByPageName = (pageName) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/turtlseo/${pageName}`,
  })
}
export const saveCompanyInfoApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/info`,
      data:data,
  })
}
export const savePageImageApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/pageimages`,
      data:data,
  })
}

export const saveTurtlSeoDataApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/turtlseo`,
      data:data,
  })
}