import { create } from 'zustand'
import { createStatusSlice } from './slices/createStatusSlice'
import { createOrderSlice } from './slices/createOrderSlice'
import { createTicketSlice } from './slices/createTicketSlice'
import { createUsersSlice } from './slices/createUsersSlice'

export const useBoundStore = create((...a) => ({
    ...createStatusSlice(...a),
    ...createOrderSlice(...a),
    ...createTicketSlice(...a),
    ...createUsersSlice(...a),
}))

