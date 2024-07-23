export const sidebarAnimation = {
  open: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'easeInOut',
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    y: '-100%',
    opacity: 0,
    transition: {
      type: 'easeInOut',
      duration: 0.3,
      when: 'afterChildren',
    },
  },
};
export const itemAnimation = {
  open: {
    opacity: 0.4,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};
