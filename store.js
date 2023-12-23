import { create } from 'zustand';

export const useBoundStore = create((set) => {
    // Check if localStorage is available
    const isLocalStorageAvailable = typeof window !== 'undefined';

    // Read initial values from local storage if available, otherwise use defaults
    const initialGrouping = isLocalStorageAvailable ? localStorage.getItem('grouping') || 'status' : 'status';
    const initialOrdering = isLocalStorageAvailable ? localStorage.getItem('ordering') || 'priority' : 'priority';

    return {
        ordering: initialOrdering,
        setOrdering: (order) => {
            set((state) => {
                // Update local storage if available
                if (isLocalStorageAvailable) {
                    localStorage.setItem('ordering', order);
                }
                return { ordering: order };
            });
        },
        grouping: initialGrouping,
        setGrouping: (group) => {
            set((state) => {
                // Update local storage if available
                if (isLocalStorageAvailable) {
                    localStorage.setItem('grouping', group);
                }
                return { grouping: group };
            });
        },
        tickets: [],
        setTickets: (data) => set((state) => ({ tickets: data })),
        users: [],
        setUsers: (data) => set((state) => ({ users: data })),
    };
});
