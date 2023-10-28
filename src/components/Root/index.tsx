'use client'

import InfoPage from '@/components/InfoPage'
import ListTab from '@/components/ListTab'
import SectionCalculator from '@/components/SectionCalculator'
import { TInfoTab } from '@/types/TInfoTab'
import { formatCurrency } from '@/utils'
import { useSelectTab } from './hooks/useSelectTab'
import ButtonCopyIframe from '../ButtonCopyIframe'
import { useInputValues } from './hooks/useInputValues'
import { useInfoTab } from './hooks/useInfoTab'

export default function Root() {
  const [tabSelected, changeTabHandler] = useSelectTab()
  const [handleChangeValuesInputs, inputValues] = useInputValues()
  const [infoTabSelected] = useInfoTab(inputValues, handleChangeValuesInputs, tabSelected)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6 p-12">
      {/* <InfoPage /> */}
      <section className="max-w-7xl w-full" id="calculator">
        <ListTab 
          clickHandler={changeTabHandler} 
          tabSelected={tabSelected.toString()}
        />
        <SectionCalculator 
          infosTab={infoTabSelected} 
          costTotal={formatCurrency(inputValues[tabSelected.toString()].total)}
          changeTab={changeTabHandler}
          infoBottom={infoTabSelected.infoTab.infoBottom}
        />
      </section>      
      <ButtonCopyIframe />
    </main>
  )
}
