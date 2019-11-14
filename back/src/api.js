'use strict'
import Axios from 'axios'

const api = {
  base: 'https://api.github.com/users',
  repos: '/repos'
}

export default class ApiGit {
  constructor (param) {
    this.input = param
    this.output = undefined
    this.api = api.base
    this.repos = api.repos
    this.check = false
  }

  status () {
    return this.check
  }

  async getList () {
    const reqList = {
      params: {
        since: this.input
      }
    }
    await Axios.get(this.api, reqList).then(response => {
      const next = response.headers.link.replace(/<|>/g, '').replace(/"/g, "'").split(';')
      this.check = true
      this.output = {
        nextpage: next[0],
        users: response.data
      }
    }).catch(error => {
      this.output = { message: error.message }
    })
    return this.output
  }

  async apiDetails () {
    await Axios.get(this.api + '/' + this.input).then(response => {
      this.check = true
      this.output = response.data
    }).catch(error => {
      this.output = { message: error.message }
    })
    return this.output
  }

  async apiRepos () {
    await Axios.get(this.api + '/' + this.input + this.repos).then(response => {
      this.check = true
      this.output = response.data
    }).catch(error => {
      this.output = { message: error.message }
    })
    return this.output
  }
}
