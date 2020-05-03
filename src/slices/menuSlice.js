import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMenu } from '../services/menu'

export const fetchMenu = createAsyncThunk('menu/getMenu', async (menuVars) => {
  const [locationId, serviceType, requestedAt] = menuVars
  try {
    return await getMenu(locationId, serviceType, requestedAt)
  } catch (err) {
    throw Error(err.detail || err.message)
  }
})

const menuSlice = createSlice({
  name: 'menu',
  initialState: { entities: [], error: null, loading: 'idle' },
  extraReducers: {
    [fetchMenu.fulfilled]: (state, action) => {
      state.entities = action.payload
      state.loading = 'idle'
    },
    [fetchMenu.pending]: (state, action) => {
      state.loading = 'pending'
    },
    [fetchMenu.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = 'idle'
    },
  },
})

export const selectMenuLoading = (state) => state.menu.loading === 'pending'
export const selectMenuError = (state) => state.menu.error
export const selectMenu = (state) => state.menu

export default menuSlice.reducer
