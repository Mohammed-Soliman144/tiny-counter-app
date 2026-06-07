import { create } from "zustand"

interface IModalStore {
    isResetOpenned: boolean,
    setReset: () => void,
    isSettingsOpenned: boolean,
    setSettings: () => void,
    isInfoOpenned: boolean,
    setInfo: () => void,
    isAnimatedEnd: boolean,
    setAnimated: () => void,
    isIntroOpenned: boolean,
    setIntro: () => void,
}

const useModalStore = create<IModalStore>((set)=> ({
    isResetOpenned: false,
    setReset: () => set(state => ({isResetOpenned: state.isResetOpenned? false : true})),
    isInfoOpenned: false,
    setInfo: () => set(state => ({isInfoOpenned: state.isInfoOpenned? false : true})),
    isSettingsOpenned: false,
    setSettings: () => set(state => ({isSettingsOpenned: state.isSettingsOpenned? false : true})),
    isAnimatedEnd: false,
    setAnimated: () => set(state => ({isAnimatedEnd: state.isAnimatedEnd? false: true})),
    isIntroOpenned: true,
    setIntro: () => set(state => {
        const newState =  state.isIntroOpenned ? false : true
        console.log(newState)
        return {isIntroOpenned: newState}
    })
}))

// console.log(useModalStore.getInitialState())
// console.log(useModalStore.getState().isIntroOpenned)

export {useModalStore, type IModalStore}