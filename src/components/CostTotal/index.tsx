import InputCostTotal from "./InputCostTotal";
import TextTotalInfo from "./TextTotalInfo";

const CostTotal = ({costTotal}) => (
  <div className='flex flex-col w-full justify-items-start box-cost'>
    <InputCostTotal total={costTotal}/>
    <TextTotalInfo />
  </div>
)

export default CostTotal