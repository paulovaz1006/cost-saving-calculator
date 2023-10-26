import { Slider } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

type TInfosForm = {
  infosForm: any
}

const FormTab = ({infosForm}: TInfosForm) => (
  <form className="mt-6 text-sm">
    <div className="mb-8 cost-total">
      <label>{infosForm.firstInput.label}</label>  
      <input 
        type='number' 
        className="bg-slate-100 w-full h-8 p-2 b-2 border-indigo-500 border-gray-800 border-t-3 border-solid mt-2"
        value={infosForm.firstInput.value}
        onChange={(e) => infosForm.changeInputs(infosForm.firstInput.identifier, e.target.value)}
      />
    </div>
    {infosForm.inputs.map((input, index) => (
      <div className="mb-8" key={index}>
        <label>{input.label}</label>  
        <div className="flex flex-row w-full justify-between items-center gap-4">
          <span>{input.textMin}</span>
          <Slider 
            min={input.min} 
            max={input.max} 
            step={input.step} 
            barClassName="w-full"
            progress
            value={input.value}            
            onChange={(e) => infosForm.changeInputs(input.identifier, e)}
          />
          <span>{input.textMax}</span>
        </div>        
      </div>
    ))}
  </form>
)

export default FormTab;