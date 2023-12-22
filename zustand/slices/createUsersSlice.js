

export const useUsersStore = (set) => ({
    users: [],
    setUsers: () => set((state) => ({ users: state.users })),
})