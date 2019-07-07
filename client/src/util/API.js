import axios from 'axios'

export default {

  loginRedirect() {
    return axios.get('/login')
  }

}