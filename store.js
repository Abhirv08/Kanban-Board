import { create } from 'zustand'

export const useBoundStore = create((set) => ({
    ordering: "priority",
    setOrdering: (order) => set((state) => ({ ordering: order })),
    grouping: "status",
    setGrouping: (group) => set((state) => ({ grouping: group })),
    tickets: [],
    setTickets: (data) => set((state) => ({ tickets: data })),
    users: [],
    setUsers: (data) => set((state) => ({ users: data })),
}))

