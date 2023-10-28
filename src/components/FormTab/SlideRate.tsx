import { memo } from "react";
import { Slider } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

const SlideRate = ({input, infosForm}) => {
  return (
    <Slider 
      min={input.min} 
      max={input.max} 
      step={input.step} 
      barClassName="w-full"
      progress
      value={input.value}            
      onChange={(e) => infosForm.changeInputs(input.identifier, e)}
    />
  )
}

export default memo(SlideRate);