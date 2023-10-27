import InputCostTotal from "./InputCostTotal";
import TextTotalInfo from "./TextTotalInfo";
import { ICostTotal } from "./ICostTotal";

const CostTotal = ({costTotal, infoBottom}:ICostTotal) => (
  <div className='flex flex-col w-full justify-items-start box-cost'>
    <InputCostTotal total={costTotal}/>
    <TextTotalInfo infoBottom={infoBottom}/>
  </div>
)

export default CostTotal