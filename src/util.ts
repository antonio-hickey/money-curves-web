
/* Join multiple tailwind class strings */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
