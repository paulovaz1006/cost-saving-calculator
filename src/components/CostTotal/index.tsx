import InputCostTotal from "./InputCostTotal";
import TextTotalInfo from "./TextTotalInfo";
import { ICostTotal } from "./ICostTotal";
import { memo } from "react";

const CostTotal = ({costTotal, infoBottom}:ICostTotal) => (
  <div className='flex flex-col w-full justify-items-start box-cost'>
    <InputCostTotal total={costTotal}/>
    <TextTotalInfo infoBottom={infoBottom}/>
  </div>
)

export default memo(CostTotal)