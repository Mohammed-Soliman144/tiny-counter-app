import { Counter } from '@/components/pages/Counter'
import { Navbar } from "@/components/layouts/Navbar"
import { useModalStore, type IModalStore } from '@/store/modalStore'
import { Reset } from '@/components/pages/Reset'
import { Settings } from '@/components/pages/Settings'
import { useCounter } from '@/hooks/useCounter'
import { useEffect } from 'react'
import { Welcome } from '@/components/pages/Welcome'
import { Intro } from './components/pages/Intro'

/* Extract Selectors from store must be outside function component (pure logic) */
const isResetOpenned = (state: IModalStore) => state.isResetOpenned
const isInfoOpenned = (state: IModalStore) => state.isInfoOpenned
const isSettingsOpenned = (state: IModalStore) => state.isSettingsOpenned
const isIntro = (state: IModalStore) => state.isIntroOpenned

function App() {
  const isOpennedReset = useModalStore(isResetOpenned)
  const isInfo = useModalStore(isInfoOpenned)
  const isOpennedSettings = useModalStore(isSettingsOpenned)
  const isIntroOpenned = useModalStore(isIntro)
  const {theme} = useCounter()

  // Change Theme by dataset theme
  useEffect(()=> {
      if(typeof window === "undefined") return
      const rootElement = document.documentElement
      rootElement.dataset.theme = theme.toLowerCase()
  }, [theme])
  
  return (
    <>
      <main className="page-wrapper container">
        <Navbar />
        <Counter />
        { isOpennedReset && <Reset />   }
        { isOpennedSettings && <Settings /> }
        { isInfo && <Welcome /> }
        {isIntroOpenned && <Intro />}
      </main>
    </>
  )
}

export default App
