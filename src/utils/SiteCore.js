import Emitter from './Emitter'
import Ticker from './Ticker'

import Lenis from 'lenis'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * Shared page bootstrap: OS/browser detection, smooth scroll, resize/scroll
 * emitters, and viewport intersection tracking. Used on every page.
 */
export default class SiteCore {
  /**
   * Constructor
   */
  constructor() {
    this.timeouts = {
      resizeThrottle: null,
    }

    // OS class
    let os = 'unknown'
    if (navigator.userAgent.indexOf('Win') !== -1) {
      os = 'windows'
    } else if (navigator.userAgent.indexOf('Android') !== -1) {
      os = 'android'
    } else if (navigator.userAgent.indexOf('Mac') !== -1) {
      os = 'mac'
    } else if (navigator.userAgent.indexOf('Linux') !== -1) {
      os = 'linux'
    }
    document.documentElement.classList.add(`is-${os}`)

    // Browser class
    let browser = 'unknown'
    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      browser = 'firefox'
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
      browser = 'chrome'
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      browser = 'safari'
    }
    document.documentElement.classList.add(`is-${browser}`)

    this.bindEvents()
  }

  /**
   * Init
   */
  init() {
    this.initLenis()

    Ticker.init()

    this.onResize()
  }

  /**
   * Bind events
   */
  bindEvents() {
    window.addEventListener('resize', this.resizeThrottle.bind(this))
    window.addEventListener('scroll', this.onScroll.bind(this), {
      passive: true,
    })
    window.addEventListener('mousemove', this.onMouseMove.bind(this), {
      passive: true,
    })

    Emitter.on('updateViewport', this.onResize, this, true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dispatchEvent(
            new CustomEvent('intersect', {
              detail: { isIntersecting: entry.isIntersecting },
            })
          )

          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view')
            entry.target.classList.remove(
              'is-out-of-view',
              'is-out-of-view-top',
              'is-out-of-view-bottom'
            )
          } else {
            entry.target.classList.remove('is-in-view')
            entry.target.classList.add('is-out-of-view')

            entry.target.classList.toggle(
              'is-out-of-view-top',
              entry.boundingClientRect.top < 0
            )
            entry.target.classList.toggle(
              'is-out-of-view-bottom',
              entry.boundingClientRect.top > 0
            )
          }
        })
      },
      {
        threshold: 0,
      }
    )

    document.querySelectorAll('[data-intersect]').forEach((el) => {
      observer.observe(el)
    })

    // Site loaded event
    if (document.readyState === 'complete') {
      this.siteLoaded()
    } else {
      window.addEventListener('load', this.siteLoaded, { once: true })
    }

    this.onScroll()
  }

  /**
   * Init lenis
   */
  initLenis() {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    window.lenis = lenis
    this.lenis = lenis
  }

  /**
   * Set loaded class
   */
  siteLoaded() {
    document.documentElement.classList.add('is-loaded')

    Emitter.emit('siteLoaded')
  }

  /**
   * Resize throttle
   */
  resizeThrottle() {
    clearTimeout(this.timeouts.resizeThrottle)

    this.timeouts.resizeThrottle = setTimeout(() => {
      Ticker.nextTick(this.onResize, this)
    }, 200)
  }

  /**
   * Resize handler
   */
  onResize() {
    const newWidth = window.innerWidth
    let widthChanged = false
    if (this.windowWidth !== newWidth) {
      if (this.windowWidth !== undefined) {
        widthChanged = true
      }

      this.windowWidth = newWidth
      this.clientWidth = document.body.clientWidth
    }

    const newHeight = window.innerHeight
    let heightChanged = false
    if (this.windowHeight !== newHeight) {
      if (this.windowHeight !== undefined) {
        heightChanged = true
      }

      this.windowHeight = newHeight
      this.clientHeight = document.body.clientHeight
    }

    window.safeWidth = newWidth
    window.safeHeight = newHeight

    window.maxScrollTop = document.body.scrollHeight - window.safeHeight

    this.setScrollProgress()

    Emitter.emit('resize', widthChanged, heightChanged)
  }

  /**
   * Scroll handler
   */
  onScroll() {
    this.setScrollProgress()

    Ticker.nextTick(() => {
      Emitter.emit('scroll', window.scrollY)
    })
  }

  /**
   * Set scroll progress
   */
  setScrollProgress() {
    window.scrollProgress = window.scrollY / window.maxScrollTop
  }

  /**
   * Mouse move handler
   */
  onMouseMove(e) {
    Emitter.emit('mousemove', e.clientX, e.clientY)
  }
}
