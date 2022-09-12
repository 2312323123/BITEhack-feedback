import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import NavBar from '../components/commonComponents/NavBar'
import RuchomeTlo from '../components/commonComponents/RuchomeTlo'
import MainFrame from '../components/commonComponents/MainFrame'
import BlurScreen from '../components/mainPageComponents/BlurScreen'
import ElectronicScreen from '../components/mainPageComponents/ElectronicScreen'
import OrganizatorContent from '../components/organizatorPageComponents/OrganizatorContent'

export default ({ location }) => {
  const [turnedOn, setTurnedOn] = useState(
    location.state ? location.state.turnedOn : false
  )
  const [blurOn, setBlurOn] = useState(
    location.state ? location.state.blurOn : false
  )
  const [electronicOn, setElectronicOn] = useState(
    location.state ? location.state.electronicOn : false
  )
  const lastWindowY = useRef(
    location.state ? location.state.lastWindowY : window.scrollY
  )
  const [newWindowY, setNewWindowY] = useState(
    location.state ? location.state.newWindowY : window.scrollY
  )
  const [contentScrolled, setContentScrolled] = useState(
    location.state ? location.state.contentScrolled : false
  )

  // console.log('turnedOn: ' + turnedOn.toString())

  useEffect(() => {
    window.onscroll = () => {
      lastWindowY.current = newWindowY
      setNewWindowY(window.scrollY)
      console.count('UseEffect entered')
    }
  }, [newWindowY, setNewWindowY, lastWindowY.current])

  return (
    <>
      <NavBar
        turnedOn={turnedOn}
        setTurnedOn={setTurnedOn}
        lastWindowY={lastWindowY}
        newWindowY={newWindowY}
        blurOn={blurOn}
        setBlurOn={setBlurOn}
        electronicOn={electronicOn}
        setElectronicOn={setElectronicOn}
        contentScrolled={contentScrolled}
        setContentScrolled={setContentScrolled}
      />

      <RuchomeTlo newWindowY={newWindowY} lastWindowY={lastWindowY} />
      <MainFrame
        turnedOn={turnedOn}
        setTurnedOn={setTurnedOn}
        lastWindowY={lastWindowY}
        newWindowY={newWindowY}
      />
      {/* <BlurScreen blurOn={blurOn} setBlurOn={setBlurOn} /> */}
      <OrganizatorContent
        contentScrolled={contentScrolled}
        setContentScrolled={setContentScrolled}
      />
      {/* <ElectronicScreen
        electronicOn={electronicOn}
        setElectronicOn={setElectronicOn}
      /> */}
    </>
  )
}

export { Head } from './index'
