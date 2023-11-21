import axios from 'axios'
// Cấu hình Axios với các tùy chọn mặc định
export const instance = axios.create({
  baseURL: 'http://localhost:5000', // Đặt baseURL của API bạn đang giao tiếp
  timeout: 5000, // Đặt thời gian chờ tối đa (ms) cho mỗi yêu cầu
  headers: {
    'Content-Type': 'application/json', // Đặt kiểu dữ liệu của yêu cầu
    // Các headers khác nếu cần
  },
});
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});