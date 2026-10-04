/**
 * MASTER LIFE PHOTOS CONFIG
 * Photos scattered across the side walls of the About section's 3D grid.
 * SAbout.astro renders whatever's in this list and lays them out
 * automatically (alternating left/right wall, no overlaps, never touching
 * the center column), so add, remove, or reorder photos here.
 *
 * src: path to a square image — the wall crops it to a circle, so center
 *   the subject. Existing ones are 360×360 JPEGs in /public/images/life.
 * label: for your reference only; not displayed (the photos are decorative)
 */

export interface LifePhoto {
  src: string
  label: string
}

export const lifePhotos: LifePhoto[] = [
  { src: '/images/life/01.jpg', label: 'Dominance watercolor tile' },
  { src: '/images/life/02.jpg', label: 'Phantom mask with violin' },
  { src: '/images/life/03.jpg', label: 'Digital logic protoboard' },
  { src: '/images/life/04.jpg', label: 'Force sensor impulse graph' },
  { src: '/images/life/05.jpg', label: 'Jet engine cycle simulation' },
  { src: '/images/life/06.jpg', label: 'Physics notes: metric ladder' },
  { src: '/images/life/07.jpg', label: 'Cardboard marble run' },
  { src: '/images/life/08.jpg', label: 'NOR gate circuit sketch' },
  { src: '/images/life/09.jpg', label: 'NAND gate circuit sketch' },
  { src: '/images/life/10.jpg', label: 'Karnaugh maps and AOI circuit' },
  { src: '/images/life/11.jpg', label: 'Dominance tile description' },
  { src: '/images/life/12.jpg', label: 'Lab partners at the protoboard' },
  { src: '/images/life/13.jpg', label: 'Mountain hike in Taiwan' },
  { src: '/images/life/14.jpg', label: 'Selfie with friends' },
  { src: '/images/life/15.jpg', label: 'Violin duo recital' },
  { src: '/images/life/16.jpg', label: 'River tracing' },
  { src: '/images/life/17.jpg', label: 'Heal the Bay beach cleanup' },
  { src: '/images/life/18.jpg', label: 'Monument Valley with family' },
  { src: '/images/life/19.jpg', label: 'Surfrider beach cleanup' },
  { src: '/images/life/20.jpg', label: 'Heal the Bay at the pier' },
  { src: '/images/life/21.jpg', label: 'Beach cleanup find' },
  { src: '/images/life/22.jpg', label: 'Reading To Kill a Mockingbird' },
  { src: '/images/life/23.jpg', label: 'Jumping in Chinatown' },
  { src: '/images/life/24.jpg', label: 'Bodyboarding' },
  { src: '/images/life/25.jpg', label: 'UCLA engineering trophies' },
  { src: '/images/life/26.jpg', label: 'Mariachi on Third Street Promenade' },
  { src: '/images/life/27.jpg', label: 'Orchestra rehearsal nap' },
  { src: '/images/life/28.jpg', label: 'Phantom costume' },
  { src: '/images/life/29.jpg', label: 'Orchestra peace sign' },
  { src: '/images/life/30.jpg', label: 'Piggyback ride' },
  { src: '/images/life/31.jpg', label: 'Building a machine in the shop' },
]
