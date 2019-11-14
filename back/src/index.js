'use strict'

// IMPORTS
import http from 'http'
import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import ApiGit from './api'

// Server instance and settings
const app = express()
const setup = {
  path: 'public/',
  port: process.env.PORT || 3030,
  api: '/api/users/',
  repos: ':user/repos',
  details: ':user/details',
  list: ':since',
  method: 'GET',
  headers: {
    type: 'application/json'
  },
  banner: '\nExpress server on\n',
  favicon: 'favicon.ico'
}

app.use(favicon(setup.favicon))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(setup.path)))
app.get(setup.api, async (request, response) => {
  let statusCode = request.query.since ? 200 : 400
  let api, data
  if (statusCode === 200) {
    api = new ApiGit(request.query.since)
    data = await api.getList()
    statusCode = api.status() ? 200 : 404
  }
  response
    .status(statusCode)
    .type(setup.headers.type)
    .json(data || { message: 'Bad request' })
    .end()
})

app.get(setup.api + setup.repos, async (request, response) => {
  const api = new ApiGit(request.params.user)
  const data = await api.apiRepos()
  const code = api.status() ? 200 : 404
  response
    .status(code)
    .type(setup.headers.type)
    .json(data)
    .end()
})

app.get(setup.api + setup.details, async (request, response) => {
  const api = new ApiGit(request.params.user)
  const data = await api.apiDetails()
  const code = api.status() ? 200 : 404
  response
    .status(code)
    .type(setup.headers.type)
    .json(data)
    .end()
})

app.get('/*', (request, response) => {
  const error = {
    code: 400,
    message: 'bad request'
  }
  response
    .status(error.code)
    .type(setup.headers.type)
    .json(error)
    .end()
})

// Start Serve
const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(setup.banner)
})
