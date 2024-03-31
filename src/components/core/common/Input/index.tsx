import React, { ReactNode } from 'react';

import * as S from './Input';
import Image from 'next/image';

export interface InputPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

interface InputProps extends InputPropsStyles {
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  label?: ReactNode;
  icons?: string;
  required?: boolean;
  id?: string;
  [key: string]: any;
}

const Input = ({
  className,
  type,
  label,
  icons,
  disabled,
  placeholder,
  prefix,
  suffix,
  required,
  width = '100%',
  height = '46px',
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: InputProps) => {
  const renderInput = (inputType?: string) => {
    switch (inputType) {
      case 'textarea':
        return (
          <S.TextareaCommon
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            style={{ width: width, height: height }}
            {...props}
          />
        );
      case 'password':
        return (
          <S.InputPasswordCommon
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            style={{ width: width, height: height }}
            {...props}
          />
        );
      case 'number':
        return (
          <S.InputCommon
            type="number"
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            style={{ width: width, height: height }}
            {...props}
          />
        );
      default:
        return (
          <S.InputCommon
            type={inputType}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            style={{ width: width, height: height }}
            {...props}
          />
        );
    }
  };
  return (
    <S.InputWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label className={icons ? 'icon' : ''} htmlFor={id}>
          {label}{' '}
          {icons && <Image src={icons} width={24} height={24} alt={icons} />}{' '}
          {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      {renderInput(type)}
    </S.InputWrapper>
  );
};

export default Input;
