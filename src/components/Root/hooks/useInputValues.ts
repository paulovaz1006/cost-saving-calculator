import { sumTotalCost, sumTotalCostPhoneTag } from "@/utils";
import { useState } from "react";

export const useInputValues = () => {
    const [inputValues, setInputValues] = useState<{[key: string]:{[key: string]: number}}>({
      phoneTag: {
        quantityPatient:0,
        average: 0,
        percentageSpeakingClient: 0,
        hourlyRate: 10,
        total: 0
      },
      abandonedCalls: {
        quantityPatient: 0,      
        itemPercent1: 0,
        itemPercent2: 0,
        hourlyRate: 12,
        total: 0
      },
      noShows: {
        quantityPatient: 0,      
        itemPercent1: 0,      
        hourlyRate: 12,
        total: 0
      }
    });

  function handleChangeValuesInputs(this: {[key: string]: string}, identifier: string, value: number): object { 
    const tabIdentifier = this.tabIdentifier.trim();
    const currentValues = inputValues
    const newValues = {
      ...inputValues[tabIdentifier],
      [identifier]: value
    }

    currentValues[tabIdentifier] = {
      ...newValues,
      total: tabIdentifier === 'phoneTag' ? sumTotalCostPhoneTag(newValues) : sumTotalCost(newValues)
    }

    setInputValues({
      ...currentValues,      
    })

    return currentValues
  }

  return [handleChangeValuesInputs, inputValues]

}