import { create } from 'zustand'

export const useBoundStore = create((set) => {

    let initialGrouping = 'status';
    let initialOrdering = 'priority';

    if (typeof window !== undefined) {
        initialGrouping = localStorage.getItem('grouping');
        initialOrdering = localStorage.getItem('ordering');
    }

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

