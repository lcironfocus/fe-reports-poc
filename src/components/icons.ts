import { h } from 'vue'
export const progressSvg = () =>
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 32 32',
    fill: 'currentColor',
    height: "20",
    width: "20",
    style: { display: 'block' }
  }, [
    h('path', {
      d: 'M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28z'
    })
  ])

export const doneSvg = () =>
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512',
    fill: 'none',
    stroke: 'currentColor',
    style: { display: 'block' },
    width: '20',
    height: '20'
  }, [
    h('path', {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M464 128L240 384l-96-96'
    }),
    h('path', {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M144 384l-96-96'
    }),
    h('path', {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M368 128L232 284'
    }),
  ])


export const blockedSvg = () =>
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 24 24',
    fill: 'none',
    style: { display: 'block' },
    width: '20',  // adjust size here
    height: '20'
  }, [
    h('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z',
      fill: 'currentColor'
    })
  ])

export const reportSvg = () =>
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 32 32',
    fill: 'currentColor',
    style: { display: 'block' },
    width: '20',
    height: '20'
  }, [
    h('path', { d: 'M10 18h8v2h-8z', fill: 'currentColor' }),
    h('path', { d: 'M10 13h12v2H10z', fill: 'currentColor' }),
    h('path', { d: 'M10 23h5v2h-5z', fill: 'currentColor' }),
    h('path', {
      d: 'M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM12 4h8v4h-8zm13 24H7V7h3v3h12V7h3z',
      fill: 'currentColor'
    }),
  ])


export const calendarSvg = () =>
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    style: { display: 'block' },
    width: '20',  // adjust as needed
    height: '20'
  }, [
    h('path', {
      d: 'M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4z'
    }),
    h('path', {
      d: 'M32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24z'
    }),
  ])
