const LinkTab = ({textLink, link, click}) => (
  <a 
    href={link} 
    className="mt-4  link-info"
    onClick={click}
  >
      {textLink} →
  </a>
)

export default LinkTab;