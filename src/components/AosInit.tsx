'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      offset: 0,
      once: true,
      mirror: false,
      anchorPlacement: 'center-bottom',
    })
  }, [])

  return null
}
