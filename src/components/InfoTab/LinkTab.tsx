type TLinkTab = {
  textLink: string;
  link: string; 
  click: any
}
const LinkTab = ({textLink, link, click}: TLinkTab) => (
  <button    
    className="mt-4  link-info"
    onClick={click}
  >
      {textLink} →
  </button>
)

export default LinkTab;