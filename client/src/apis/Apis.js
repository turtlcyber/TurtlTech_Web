import axios from "axios"
let ipAddress = '192.168.29.133';
// let ipAddress = "localhost";
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

export const portfolioPostApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/portfolio`,
      data: data
  })
}

export const allAllPortfoliosApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/portfolios`,
  })
}
export const portfolioBySlugApi = (slug) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/services/${slug}`,
  })
}

export const portfoliosByFieldApi = (field) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/services/portfolios/${field}`,
  })
}


export const serviceCategoryBySlugApi = (slug) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/servicecategory/${slug}`,
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
export const getPageImagesByPageName = (pageName) => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/pageImage/${pageName}`,
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
export const updateSeoBySeoId = (id,data) => {
   return axios({
      method: 'PUT',
      url: `http://${ipAddress}:${port}/turtlseo/${id}`,
      data:data
  })
}
export const getTurtlsInfoApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/turtlinfo`,
  })
}
export const getAllFaqApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/turtlfaqs`,
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
export const saveServiceCategoryApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/servicecategory`,
      data:data,
  })
}
export const getAllServiceCategoryApi = () => {
   return axios({
      method: 'GET',
      url: `http://${ipAddress}:${port}/servicecategories`,
  })
}
export const saveFaqApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/turtlfaq`,
      data:data,
  })
}

export const updateFaqApi = (data, id) => {
   return axios({
      method: 'PUT',
      url: `http://${ipAddress}:${port}/turtlfaq/${id}`,
      data:data,
  })
}

export const sendQueryApi = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/contactus`,
      data:data,
  })
}

export const loginAdmin = (data) => {
   return axios({
      method: 'POST',
      url: `http://${ipAddress}:${port}/login`,
      data:data,
  })
}