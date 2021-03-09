import React, { useCallback } from 'react';
import { CreateBeerFormikTypes } from './CreateBeerFormik.types'
import CreateBeerFormikFormView from './CreateBeerFormikView'


function CreateBeerFormik() {

  const onSubmit = useCallback((values: CreateBeerFormikTypes) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  },
    []
  )
  return (
    <CreateBeerFormikFormView onSubmit={onSubmit} />
  )
}

export default CreateBeerFormik