import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import configReducer from '../slices/configSlice'
import geolocationReducer from '../slices/geolocationSlice'
import modalReducer from '../slices/modalSlice'
import sidebarReducer from '../slices/sidebarSlice'
import { openTenderReducer } from '@open-tender/redux'

const rootReducer = combineReducers({
  config: configReducer,
  geolocation: geolocationReducer,
  modal: modalReducer,
  sidebar: sidebarReducer,
  data: openTenderReducer,
})

const persistedState = loadState()

const customizedMiddleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: customizedMiddleware,
})

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 3000)
)

export default store
