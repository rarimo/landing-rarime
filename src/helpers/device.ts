const MOBILE_REGEX =
  /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini|Windows Phone/i

export function isMobile() {
  return (
    typeof window !== 'undefined' &&
    MOBILE_REGEX.test(window.navigator.userAgent)
  )
}
