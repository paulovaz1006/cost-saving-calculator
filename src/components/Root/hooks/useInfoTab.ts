import { TInfoTab } from "@/types/TInfoTab";

export const useInfoTab = (inputValues, handleChangeValuesInputs, tabSelected) => {
  const infosTab: TInfoTab = {
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
          value: inputValues.phoneTag.quantityPatient,
          placeholder: "Number Patient",
          identifier: 'quantityPatient'
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
            value: inputValues.phoneTag.hourlyRate,
            min: 10,
            textMin: '$10',
            max: 30,
            textMax: '$30',
            identifier: 'hourlyRate',
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
            value: inputValues.abandonedCalls.hourlyRate,
            min: 12,
            textMin: '$12',
            max: 30,
            textMax: '$30',
            identifier: 'hourlyRate',
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
            value: inputValues.noShows.hourlyRate,
            min: 12,
            textMin: '$12',
            max: 25,
            textMax: '$25',
            identifier: 'hourlyRate',
            step: 1
          }
        ],
        changeInputs: handleChangeValuesInputs,
        tabIdentifier: 'noShows'
      }
    }
  }

  const infoTabSelected = infosTab[tabSelected];
  return [infoTabSelected]
}