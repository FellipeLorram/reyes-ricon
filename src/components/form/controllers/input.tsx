import React from 'react';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
}

export function Input({ label, ...props }: Props) {
  return (
    <label {...props}>
      {label}
      <input type='text' />
    </label>
  )
}
