import Hapi from 'hapi'
import Path from 'path'
import serialize from 'serialize-javascript'

import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {createMemoryHistory, match, RouterContext} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {configureStore} from '../views/store'
import routes from '../views/routes'

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../client')
      }
    }
  }
})

server.connection({
  port: process.env.PORT || 3001
})

const HTML = ({content, store}) => (
  <html>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__initialState__=${serialize(store.getState())};`
        }}
      />
      <script src='resources/bundle.js' />
    </body>
  </html>
)

server.register(require('inert'), (err) => {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/resources/bundle.js',
    handler: function (request, reply) {
      reply.file('bundle.js')
    }
  })

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
      const memoryHistory = createMemoryHistory(request.path)
      const store = configureStore(memoryHistory)
      const history = syncHistoryWithStore(memoryHistory, store)

      match({
        history,
        routes,
        location: request.path
      }, (error, redirectLocation, renderProps) => {
        if (error) {
          reply(error.message).code(500)
        } else if (redirectLocation) {
          reply.redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )

          const html = '<!doctype html>' + renderToString(
            <HTML content={content} store={store} />
          )

          reply(html)
        }
      })
    }
  })

  server.start(error => {
    if (error) {
      throw error
    }

    console.log(`Server is running at ${server.info.uri}`)
  })
})
