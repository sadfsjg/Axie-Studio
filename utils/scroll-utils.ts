export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId)

  if (section) {
    // Check if the browser supports smooth scrolling
    if ("scrollBehavior" in document.documentElement.style) {
      section.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback for browsers that don't support smooth scrolling
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }
}

export function isElementInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  return scrollTop / scrollHeight
}

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
