import CostTotal from "../CostTotal";
import FormTab from "../FormTab";
import InfoTab from "../InfoTab";

const SectionCalculator = ({infosTab, costTotal, changeTab, infoBottom}) => (
  <div className="z-10 flex flex-col w-full justify-between font-mono text-sm lg:flex gap-6" data-ref="Phone Tag">
    <div className="flex gap-20 justify-between box-calculator">
      <InfoTab infosTab={infosTab.infoTab} changeTab={changeTab}/>
      <FormTab infosForm={infosTab.infoForm}/>
    </div>
    <CostTotal costTotal={costTotal} infoBottom={infoBottom}/>
  </div>
)

export default SectionCalculator;