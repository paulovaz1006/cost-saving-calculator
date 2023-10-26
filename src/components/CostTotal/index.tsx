import InputCostTotal from "./InputCostTotal";
import TextTotalInfo from "./TextTotalInfo";
import { ICostTotal } from "./ICostTotal";

const CostTotal = ({costTotal}:ICostTotal) => (
  <div className='flex flex-col w-full justify-items-start box-cost'>
    <InputCostTotal total={costTotal}/>
    <TextTotalInfo />
  </div>
)

export default CostTotal