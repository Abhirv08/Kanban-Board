
export const useOrderingStore = (set) => ({
    ordering: "priority",
    setOrder: () => set((state) => ({ ordering: state.order })),
})