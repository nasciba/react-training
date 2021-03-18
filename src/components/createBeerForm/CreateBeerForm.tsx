import React, { useCallback, useState } from 'react';
import { CreateBeerFormTypes } from './CreateBeerForm.types'
import CreateBeerFormView from './CreateBeerFormView'

function CreateBeerForm() {
    const [formInfo, setFormInfo] = useState<CreateBeerFormTypes>({
        beerName: '',
        beerType: '',
        hasCorn: false,
        ingredients: ''
    });

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormInfo({
            ...formInfo,
            [name]: value
        });
    }, [formInfo])

    const handleSelectElement = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setFormInfo({
            ...formInfo,
            beerType: event.target.value as string
        });
    }, [formInfo])

    const handleCheckboxValue = useCallback(() => {
        setFormInfo({
            ...formInfo,
            hasCorn: !formInfo.hasCorn
        });
    }, [formInfo])

    const handleSubmit = useCallback(() => {
        console.log(formInfo)
        setFormInfo({
            beerName: '',
            beerType: '',
            hasCorn: false,
            ingredients: ''
        });
    }, [formInfo])


    return (
        <CreateBeerFormView
            handleChange={handleChange}
            handleSelectElement={handleSelectElement}
            handleSubmit={handleSubmit}
            handleCheckboxValue={handleCheckboxValue}
            beerName={formInfo.beerName}
            beerType={formInfo.beerType}
            hasCorn={formInfo.hasCorn}
            ingredients={formInfo.ingredients}
        />
    )
}

export default CreateBeerForm