import { Link, type LinkProps } from 'react-router-dom'

type InternalLinkProps = Omit<LinkProps, 'to'> & {
  href: string
}

export default function InternalLink({ href, ...props }: InternalLinkProps) {
  return <Link to={href} {...props} />
}
