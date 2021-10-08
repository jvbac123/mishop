import axios from './axios'


// 登录接口
export const a_login = (postData) => axios.post('/api/admin/login.do', postData);
