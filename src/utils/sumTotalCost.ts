  export const sumTotalCost = (costs: {[key: string]: number}): number => {
    delete costs['total']
    const isValueEmpty = Object.values(costs).indexOf(0) > -1;

    if (isValueEmpty) return 0;

    const quantityCallsAnswer = (costs['quantityPatient'] * costs['itemPercent1']) / 100;
    const callsToBePrescreened = costs['itemPercent2'] ? (quantityCallsAnswer * costs['itemPercent2']) / 100 : quantityCallsAnswer;
    const hourEarly = callsToBePrescreened * costs['hourlyRate'];
    const costToYear = (hourEarly * 20) * 12;

    return costToYear;
  }