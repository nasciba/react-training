import React, { useCallback } from 'react';
import { CreateBeerFormikTypes } from './CreateBeerFormik.types'
import CreateBeerFormikFormView from './CreateBeerFormikView'


function CreateBeerFormik() {

  const onSubmit = useCallback((values: CreateBeerFormikTypes) => {
    console.log(values);
  },
    []
  )
  return (
    <CreateBeerFormikFormView onSubmit={onSubmit} />
  )
}

export default CreateBeerFormik