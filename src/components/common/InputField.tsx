import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  TextareaProps
} from '@chakra-ui/react';
import React, { InputHTMLAttributes, forwardRef, LegacyRef } from 'react';

type ConsumerProps = Record<'name' | 'label', string> & { textarea?: boolean };
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  ConsumerProps &
  TextareaProps;

const InputField: React.FC<InputFieldProps> = forwardRef(({ label, size: _, textarea = false, width = 'xs', ...props }, ref) => {
  const CustomField = textarea ? (
    <Textarea ref={ref as LegacyRef<HTMLTextAreaElement>} {...props} />
  ) : (
    <Input ref={ref as LegacyRef<HTMLInputElement>} w={width} {...props} />
  );
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {CustomField}
    </FormControl>
  );
});

export default InputField;
