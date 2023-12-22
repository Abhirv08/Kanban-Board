
export const useStatusStore = (set) => ({
    grouping: "status",
    setGrouping: () => set((state) => ({ grouping: state.group })),
})
