/**
 * MASTER WORK-SECTION CONFIG
 * Drives the homepage's 3D "WORK" tile field (src/components/SWork.astro).
 * Each key must be "Dummy" + a number 1-14 (matches the video-loop logic) —
 * add up to 14 entries. `site` is the click destination; use '#' for none.
 *
 * images: optional list of pictures for this project's planes. Each project
 *   gets 4 planes, which cycle through this list (so 1 image = all 4 planes
 *   show it, 4 images = one each). Leave out to keep the placeholder video.
 *   Planes are 1082×636 (about 17:10) — images get center-cropped to that.
 * video: optional looping video (path under /public, e.g.
 *   '/videos/work/rc-car.mp4') shown on all 4 planes instead of the
 *   placeholder. `images` wins if both are set. Also center-cropped to the
 *   plane shape, and plays muted.
 */

export interface WorkProject {
  title: string
  site: string
  images?: string[]
  video?: string
}

export const workInfo: Record<string, WorkProject> = {
  Dummy1: {
    title: 'RC Car',
    site: '#',
    video: '/videos/work/rc-car-assembly.mp4',
  },
  Dummy2: {
    title: 'Nerf Turret',
    site: '#',
  },
  Dummy3: {
    title: 'Beach Cleaner',
    site: '#',
  },
  Dummy4: {
    title: 'Robotic Arm (ft. Rhys)',
    site: '#',
  },
  Dummy5: {
    title: 'Wake Up Device',
    site: '#',
  },
  Dummy6: {
    title: "WET 'Quest'",
    site: '#',
  },
  Dummy7: {
    title: 'FRC',
    site: '#',
  },
  Dummy8: {
    title: 'FTC',
    site: '#',
  },
  Dummy9: {
    title: 'UCLA Rovers',
    site: '#',
  },
  Dummy10: {
    title: '3D Printing Fail',
    site: '#',
  },
  Dummy11: {
    title: 'Blog #1',
    site: '/blog/blog-1',
    images: ['/images/work/blog-1.jpg'],
  },
  Dummy12: {
    title: 'Blog #2',
    site: '/blog/blog-2',
    images: ['/images/work/blog-2.jpg'],
  },
  Dummy13: {
    title: 'Blog #3',
    site: '/blog/blog-3',
    images: ['/images/work/blog-3.jpg'],
  },
  Dummy14: {
    title: 'Blog #4',
    site: '/blog/blog-4',
    images: ['/images/work/blog-4.jpg'],
  },
}
