import InfoSection from "./InfoSection";
import LinkTab from "./LinkTab";

type TInfoTab = {
  infosTab: {
    title: string,
    info: string,
    links: [{
      link: string;
      text: string;
      showTab: string;
    }]
  },
  changeTab: any
}
const InfoTab = ({infosTab, changeTab}:TInfoTab) => (
  <section className='max-w-xl'>
    <InfoSection 
      title={infosTab.title}
      info={infosTab.info}
    />
    {infosTab.links.map((link, index) => {
      return (
      <LinkTab 
        key={index}
        link={link.link}
        textLink={link.text}
        click={() => changeTab(link.showTab)}
      />
    )})}
  </section>
)
  
export default InfoTab;