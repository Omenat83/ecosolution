import { useEffect, useState } from 'react';

import {
  ElectricityContainer,
  ElectricityTitle,
  ElectricityVertLine,
  ElectricityAmount,
  ElectricityUnit,
  ElectricityCounter,
} from './Electricity.styled';

const Electriciti = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricityContainer>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityVertLine></ElectricityVertLine>
      <ElectricityCounter>
        <ElectricityAmount>{counter.toLocaleString('de-DE')}</ElectricityAmount>
        <ElectricityUnit>kWh</ElectricityUnit>
      </ElectricityCounter>
    </ElectricityContainer>
  );
};

export default Electriciti;
