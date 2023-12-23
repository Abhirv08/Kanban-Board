import { create } from 'zustand'

export const useBoundStore = create((set) => {
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';

    // Read initial values from local storage if available, otherwise use defaults
    const initialGrouping = isLocalStorageAvailable ? localStorage.getItem('grouping') || 'status' : 'status';
    const initialOrdering = isLocalStorageAvailable ? localStorage.getItem('ordering') || 'priority' : 'priority';

    return {
        ordering: initialOrdering,
        setOrdering: (order) => {
            set(() => {
                localStorage.setItem('ordering', order);
                return { ordering: order };
            });
        },
        grouping: initialGrouping,
        setGrouping: (group) => {
            set(() => {
                localStorage.setItem('grouping', group);
                return { grouping: group };
            });
        },
        tickets: [],
        setTickets: (data) => set(() => ({ tickets: data })),
        users: [],
        setUsers: (data) => set(() => ({ users: data })),
    };
});

