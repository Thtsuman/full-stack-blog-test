export function createClassNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
