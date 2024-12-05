import {create} from "zustand";

export const useUserStore = create((set) => ({
    defaultValue: false,
    setDefaultValue: () => set((state) => ({
        defaultValue: !state.setDefaultValue,

    })),

}))