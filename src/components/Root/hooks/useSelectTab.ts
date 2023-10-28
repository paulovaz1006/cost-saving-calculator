import { useState } from "react";

export const useSelectTab = () => {
  const [tabSelected, setTabSelected] = useState('phoneTag')
  const changeTabHandler = (tabSelected: string) => setTabSelected(tabSelected);

  return [tabSelected, changeTabHandler]
}
