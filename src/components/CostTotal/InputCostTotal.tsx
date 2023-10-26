import { ICostTotal } from "./ICostTotal";

const InputCostTotal = ({total}: ICostTotal) => (
  <form className="cost-total">
    <label className="text-base block">Cost of phone tag per year*</label>
    <input 
      type='text' 
      disabled 
      placeholder="$0" 
      className="bg-transparent w-full h-8 p-2 b-2 border-indigo-500 border-gray-800 border-t-3 border-solid"
      value={total}
    />
  </form>
)

export default InputCostTotal;