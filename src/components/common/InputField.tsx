import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  TextareaProps
} from '@chakra-ui/react';
import React, { InputHTMLAttributes, forwardRef } from 'react';

type ConsumerProps = Record<'name' | 'label', string> & { textarea?: boolean };
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  ConsumerProps &
  TextareaProps;

const InputField: React.FC<InputFieldProps> = forwardRef(
  ({ label, size: _, textarea = false, width = 'xs', ...props }, ref) => {
    const InputField = textarea ? (
      <Textarea ref={ref} {...props} />
    ) : (
      <Input ref={ref} w={width} {...props} />
    );
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        {InputField}
      </FormControl>
    );
  }
);

export default InputField;
