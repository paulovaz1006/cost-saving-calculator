type TLinkTab = {
  textLink: string;
  link: string; 
  click: any
}
const LinkTab = ({textLink, link, click}: TLinkTab) => (
  <a 
    href={link} 
    className="mt-4  link-info"
    onClick={click}
  >
      {textLink} →
  </a>
)

export default LinkTab;