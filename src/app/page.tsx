'use client'

import InfoPage from '@/components/InfoPage'
import ListTab from '@/components/ListTab'
import SectionCalculator from '@/components/SectionCalculator'
import { useEffect, useLayoutEffect, useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Arglist {
  [index: string]: object;
  0: Function;
}

export default function Home() {
  const [tabSelected, setTabSelected] = useState('phoneTag')  
  const [inputValues, setInputValues] = useState<{[key: string]:{[key: string]: number}}>({
    phoneTag: {
      numberPatient:0,
      average: 0,
      percentageSpeakingClient: 0,
      hourlyStaffWage: 0,
      total: 0
    },
    abandonedCalls: {
      quantityPatient: 0,      
      itemPercent1: 0,
      itemPercent2: 0,
      appointmentRevenue: 0,
      total: 0
    },
    noShows: {
      quantityPatient: 0,      
      itemPercent1: 0,      
      appointmentRevenue: 0,
      total: 0
    }
  })  

  const sumTotalCost = (items: {[key: string]: number}): number => {
    delete items['total']
    const isValuEmpty = Object.values(items).indexOf(0) > -1;

    if (isValuEmpty) return 0;
    
    const quantityPercent1 = (items['quantityPatient'] * items['itemPercent1']) / 100;
    const quantityPercent2 = items['itemPercent2'] ? (quantityPercent1 * items['itemPercent2']) / 100 : quantityPercent1;
    const resultAvenue = quantityPercent2 * items['appointmentRevenue'];
    const result = (resultAvenue * 20) * 12;

    return result;
  }
  const sumTotalCostPhoneTag = (costs) => {
    console.log(costs)
    delete costs['total']
    const isValuEmpty = Object.values(costs).indexOf(0) > -1;

    if (isValuEmpty) return 0;

    
    const custoPorMinutoDaEquipe = costs['hourlyStaffWage'] / 60; 
    const custoChamadasBemSucedida = custoPorMinutoDaEquipe * costs['percentageSpeakingClient']
    
    const quantidadeLigacaoBemSucedida = (costs['numberPatient'] * costs['average']) / 100;
    const custoDiárioLigaçõesBemSucedidas = custoChamadasBemSucedida * quantidadeLigacaoBemSucedida
    const result = custoDiárioLigaçõesBemSucedidas * 365
    
    return result;
  }

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

  const costTotal = inputValues[tabSelected].total;
  const convertCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'});
  const formatTotal = convertCurrency.format(costTotal)
  
  const changeTabHandler = (tabSelected: string) => {    
    setTabSelected(tabSelected)
  }

  type TInfo = {
    [key: string]: {
      infoTab: {
        title: string,
        info: string,
        infoBottom: string,
        links: object
      },
      infoForm: object,
    }
  }
  const infosTab: TInfo = {
    phoneTag: {
      infoTab: {
        title: "How much is phone tag costing your practice?",
        info: "Playing phone tag with your patients is extremely frustrating for your medical practice’s staff — and even worse, it wastes time and money. Use this free calculator to uncover just how much revenue phone is costing your practice. If you don’t know the exact numbers for some or all of the inputs, use your best estimate.",
        infoBottom: "*Results are based on the information you have provided in the Cost Calculator and cannot be guaranteed.",
        links: [
          {
            text: 'Calculate abandoned calls cost',
            link: '#',
            showTab: 'abandonedCalls'
          },
          {
            text: 'Calculate no-shows cost',
            link: '#',
            showTab: 'noShows'
          }
        ],
      },
      infoForm: {
        firstInput: {
          label: "How many outbound patient calls does your site make per day?",
          value: inputValues.phoneTag.numberPatient,
          placeholder: "Number Patient",
          identifier: 'numberPatient'
        },
        inputs: [
          {
            label: "What percentage of those calls result in speaking with the patient?",
            value: inputValues.phoneTag.average,
            min: 0,
            textMin: '0',
            max: 100,
            textMax: '100%',
            identifier: 'average',
            step: 0.5
          },
          {
            label: "What is your average call length?",
            value: inputValues.phoneTag.percentageSpeakingClient,
            min: 1,
            textMin: '1min',
            max: 10,
            textMax: '10min',
            identifier: 'percentageSpeakingClient',
            step: 0.5
          },
          {
            label: "What is your hourly staff wage?",
            value: inputValues.phoneTag.hourlyStaffWage,
            min: 10,
            textMin: '$10',
            max: 30,
            textMax: '$30',
            identifier: 'hourlyStaffWage',
            step: 1
          }
        ],
        changeInputs: handleChangeValuesInputs,
        tabIdentifier: 'phoneTag'
      }
    },
    abandonedCalls: {
      infoTab: {
        title: "How much is your practice losing from abandoned calls?",
        info: "If your staff is too busy to answer all incoming calls, your practice may be losing revenue due to patients abandoning calls. Use this free calculator to uncover just how much revenue abandoned calls are costing your practice. If you don’t know the exact numbers for some or all of the inputs, use your best estimate.",
        infoBottom: "Cost of Abandoned Calls per Year*",
        links: [
          {
            text: 'Calculate phone tag cost',
            link: '#',
            showTab: 'phoneTag'
          },
          {
            text: 'Calculate no-shows cost',
            link: '#',
            showTab: 'noShows'
          }
        ],
      },
      infoForm: {
        firstInput: {
          label: "How many outbound patient calls does your clinical trial site make per day?",          
          value: inputValues.abandonedCalls.quantityPatient,
          placeholder: "Number Patient",
          identifier: 'quantityPatient'
        },
        inputs: [
          {
            label: "What percentage of these calls are answered?",
            value: inputValues.abandonedCalls.itemPercent1,
            min: 0,
            textMin: '0',
            max: 50,
            textMax: '50%',
            identifier: 'itemPercent1',
            step: 0.5
          },
            {
            label: "How many of the outbound calls need to be prescreened?",
            value: inputValues.abandonedCalls.itemPercent2,
            min: 0,
            textMin: '0',
            max: 50,
            textMax: '50%',
            identifier: 'itemPercent2',
            step: 0.5
          },
          {
            label: "What is the average hourly wage you pay your team?",
            value: inputValues.abandonedCalls.appointmentRevenue,
            min: 12,
            textMin: '$12',
            max: 30,
            textMax: '$30',
            identifier: 'appointmentRevenue',
            step: 1
          }
        ],
        changeInputs: handleChangeValuesInputs,
        tabIdentifier: 'abandonedCalls'
      }
    },
    noShows: {
      infoTab: {
        title: "How much revenue are no-show appointments costing you?",
        info: "When patients don’t show up for their appointment, your practice is losing both revenue and time. Use this free calculator to uncover just how much revenue your practice is losing due to no-show appointments. If you don’t know the exact numbers for some or all of the inputs, use your best estimate.",
         infoBottom: "*Results are based on the information you have provided in the Cost Calculator and cannot be guaranteed.",
        links: [
          {
            text: 'Calculate phone tag cost',
            link: '#',
            showTab: 'phoneTag'
          },
          {
            text: 'Calculate abandoned calls cost',
            link: '#',
            showTab: 'phoneTag'
          }
        ],
      },
      infoForm: {
        firstInput: {
          label: "How many patients on average does your practice see each day?",
          value: inputValues.noShows.quantityPatient,
          placeholder: "Number Patient",
          identifier: 'quantityPatient'
        },
        inputs: [
          {
            label: "How many patients on average does your site schedule?",
            value: inputValues.noShows.itemPercent1,
            min: 0,
            textMin: '0',
            max: 50,
            textMax: '50%',
            identifier: 'itemPercent1',
            step: 0.5
          },
          {
            label: "How much do you pay your staff an hour to try to reach out to them again? ",
            value: inputValues.noShows.appointmentRevenue,
            min: 12,
            textMin: '$12',
            max: 25,
            textMax: '$25',
            identifier: 'appointmentRevenue',
            step: 1
          }
        ],
        changeInputs: handleChangeValuesInputs,
        tabIdentifier: 'noShows'
      }
    }
  }

  const infoTabSelected = infosTab[tabSelected];
  
  const [copied, setCopied] = useState(false);
  const [urlLocal, setUrlLocal] = useState('');
  const iframeHTML = `<iframe src="${urlLocal}" width="100%" height="700"></iframe>`;
 useEffect(() => {
   const url = window.location.href;
    setUrlLocal(url)
 }, [])
  const otherCopy = () => {
    setCopied(true);

    setTimeout(() => {
       setCopied(false);
    }, 3000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6 p-12">
      <InfoPage />
      <section className="max-w-7xl w-full" id="calculator">
        <ListTab clickHandler={changeTabHandler} tabSelected={tabSelected}/>
        <SectionCalculator 
          infosTab={infoTabSelected} 
          costTotal={formatTotal}
          changeTab={changeTabHandler}
          infoBottom={infoTabSelected.infoTab.infoBottom}
        />
      </section>      
      <CopyToClipboard onCopy={otherCopy} text={iframeHTML}>
        <div className='button-copy'>
          {copied && <p>Iframe copyed</p>}
          <button type='button'>Copy Iframe code HTML</button>
        </div>  
      </CopyToClipboard>
    </main>
  )
}
