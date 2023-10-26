import InfoSection from "./InfoSection";
import LinkTab from "./LinkTab";

const InfoTab = ({infosTab, changeTab}) => (
  <section className='max-w-xl'>
    <InfoSection 
      title={infosTab.title}
      info={infosTab.info}
    />
    {infosTab.links.map((link, index) => (
      <LinkTab 
        key={index}
        link={link.link}
        textLink={link.text}
        click={() => changeTab(link.showTab)}
      />
    ))}
  </section>
)
  
export default InfoTab;