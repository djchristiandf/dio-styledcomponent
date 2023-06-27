import React from 'react';    
import { ErrorMessage, IconContainer, InputContainer, InputText } from './styles';

import { Controller } from 'react-hook-form';

const Input = ({leftIcon, name, control, errorMessage,...rest})  =>{
  return (
    <>
      <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({field}) => <InputText { ...field} {...rest} />}
      />      
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage }</ErrorMessage> : null}
    </>    
  )
}

export { Input };

