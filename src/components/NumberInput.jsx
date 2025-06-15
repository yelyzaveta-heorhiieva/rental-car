import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const NumberInput = () => {
  const [value, setValue] = useState('');

  const handleReset = () => {
    setValue('');
  };

  return (
    <div>
      <NumericFormat
        value={value}
        onValueChange={(values) => setValue(values.value)}
        thousandSeparator=','
        allowNegative={false}
        placeholder='Введіть число'
      />
      <button onClick={handleReset}>Очистити</button>
    </div>
  );
};

export default NumberInput;
