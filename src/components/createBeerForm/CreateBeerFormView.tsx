import React from 'react';
import Button from '../button/Button';
import Box from '@material-ui/core/Box';

interface Props {
    beerName: string,
    beerType: string,
    hasCorn: boolean,
    ingredients: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleCheckboxValue: () => void,
    handleSubmit: () => void,
    handleSelectElement: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const CreateBeerFormView = (props: Props) => {
    return (
        <form>
            <Box display="flex" flexDirection="column">
                <label>Beer name:
                    <input
                        type='text'
                        name="beerName"
                        value={props.beerName}
                        onChange={props.handleChange}
                    />
                </label>
                <label>Type:
                    <select
                        name="beerType" value={props.beerType}
                        onChange={props.handleSelectElement}>
                        <option value="ale" > Ale</option>
                        <option value="lager">Lager</option>
                        <option value="stout">Stout</option>
                        <option value="pilsen">Pilsen</option>
                    </select>
                </label>
                <label>
                    Has corn?
                    <input type="checkbox" onClick={props.handleCheckboxValue} />
                </label>
                <label>
                    Ingredients:
                    <textarea
                        value={props.ingredients} name='ingredients' onChange={props.handleChange}
                    />
                </label>
                <Button onClick={props.handleSubmit}>Enviar</Button>
            </Box>
        </form>
    )
}

export default CreateBeerFormView