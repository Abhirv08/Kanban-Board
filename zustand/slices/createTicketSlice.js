
export const createTicketSlice = (set) => ({
    tickets: [],
    setTickets: () => set((state) => ({ tickets: state.tickets })),
})