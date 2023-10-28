  export const sumTotalCostPhoneTag = (costs) => {    
    delete costs['total']
    const isValueEmpty = Object.values(costs).indexOf(0) > -1;

    if (isValueEmpty) return 0;

    const totalCallFaillWithClient = 100 - costs['average'];
    const revenueToMin = costs['hourlyRate'] / 60;
    const revenueToCallWithClient = revenueToMin * costs['percentageSpeakingClient'];
    const revnueTotalToClient = revenueToCallWithClient * costs['quantityPatient'];
    const costToYear = (revnueTotalToClient * 20) * 12;    
    const costTotal = (costToYear* totalCallFaillWithClient) / 100

    return costTotal;
  }