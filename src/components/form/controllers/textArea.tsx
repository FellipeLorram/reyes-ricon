import React from 'react';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
    label: string;
}

export function TextArea({ label, ...props }: Props) {
    return (
        <label {...props}>
            {label}
            <textarea />
        </label>
    )
}
