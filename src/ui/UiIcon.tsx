import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'

const supportedIcons = [faFacebook, faFacebookF, faLinkedinIn, faYoutube]

library.add(...supportedIcons)

type Props = {
  icon: string
  className?: string
}

export default function UiIcon({ icon, ...rest }: Props) {
  const iconName = useMemo(
    () => supportedIcons.find(el => el.iconName === icon),
    [icon],
  )

  return <FontAwesomeIcon {...rest} icon={iconName!} />
}
