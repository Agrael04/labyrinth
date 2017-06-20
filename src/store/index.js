import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import auth from './reducers/auth'

const store = (client) => createStore(
  combineReducers({
    auth,
    apollo: client.reducer(),
    form: formReducer
  }),
  {},
  compose(
      applyMiddleware(client.middleware(), thunk),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
)

export default store
