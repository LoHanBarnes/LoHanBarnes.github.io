/**
 * MASTER AWARDS CONFIG
 * Add, remove, or reorder awards here — the grid in SAbout.astro renders
 * whatever's in this list automatically, sized/positioned by `size`.
 *
 * icon: one of the keys rendered by src/components/AAwardIcon.astro
 * size: 'lg' (4 cols x 2 rows), 'md' (2 cols x 2 rows), 'sm' (2 cols x 1 row)
 * description: shown in the hover panel instead of `detail`, if you want
 *   something longer — falls back to `detail` when left out
 * image: optional path (e.g. '/images/awards/rover.jpg') shown in the
 *   hover panel — leave out for no image
 * video: optional path (e.g. '/videos/awards/rover.mp4') shown instead of
 *   `image` if both are set — plays muted/looped in the hover panel
 */

export type AwardSize = 'lg' | 'md' | 'sm'
export type AwardIcon = 'trophy' | 'medal' | 'lightbulb' | 'star' | 'gear' | 'book'

export interface Award {
  id: string
  name: string
  detail: string
  year: string
  icon: AwardIcon
  size: AwardSize
  description?: string
  image?: string
  video?: string
}

export const awards: Award[] = [
  {
    id: 'student-of-year',
    name: 'Student of the Year',
    detail: 'Nominee',
    year: '2024',
    icon: 'star',
    size: 'lg',
  },
  {
    id: 'ucla-rover-creative',
    name: 'UCLA Rover',
    detail: 'Most Creative',
    year: '2025',
    icon: 'lightbulb',
    size: 'md',
    image: '/images/awards/ucla-rover.png',
  },
  {
    id: 'ucla-rover-2nd',
    name: 'UCLA Rover',
    detail: '2nd Place',
    year: '2025',
    icon: 'medal',
    size: 'md',
    video: '/videos/awards/ucla-rover-2nd.mp4',
  },
  {
    id: 'esports-clash-royale',
    name: 'Samohi Esports',
    detail: 'Clash Royale — 1st',
    year: '2026',
    icon: 'trophy',
    size: 'md',
    image: '/images/awards/esports-clash-royale.png',
  },
  {
    id: 'olympiad-cad',
    name: 'Science Olympiad',
    detail: 'Engineering CAD — 5th',
    year: '2026',
    icon: 'medal',
    size: 'sm',
  },
  {
    id: 'olympiad-dynamic-planet',
    name: 'Science Olympiad',
    detail: 'Dynamic Planet — 9th',
    year: '2026',
    icon: 'medal',
    size: 'sm',
  },
  {
    id: 'olympiad-entomology',
    name: 'Science Olympiad',
    detail: 'Entomology — 12th',
    year: '2026',
    icon: 'medal',
    size: 'sm',
  },
  {
    id: 'lincoln-engineering',
    name: 'Lincoln Middle School',
    detail: 'Engineering Excellence Award',
    year: '2022',
    icon: 'gear',
    size: 'sm',
  },
  {
    id: 'million-word-club',
    name: 'Million Word Club',
    detail: '',
    year: '2022',
    icon: 'book',
    size: 'sm',
  },
]
