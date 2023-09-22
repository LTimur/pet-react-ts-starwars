import { Input } from '@mantine/core';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useFilter } from './FilterModel';

type FilterProps = {
  onChange?: (value:string) => void;
};
export function Filter({ onChange }:FilterProps) {
  const [value, setValue] = useState('');
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    onChange?.(event.currentTarget.value);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Start filter..."
    />
  );
}
