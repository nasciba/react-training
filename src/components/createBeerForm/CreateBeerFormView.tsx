import React from 'react';
import Button from '../button/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import formStyle from './CreateBeerFormView.style';

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

function CreateBeerFormView(props: Props) {
    const classes = formStyle()
    return (
        <FormControl
            className={classes.root}
        >
            <TextField
                label='Beer name'
                name='beerName'
                variant='outlined'
                onChange={props.handleChange}
                className={classes.margins}
                value={props.beerName}
            />
            <TextField
                select={true}
                variant='outlined'
                className={classes.margins}
                label='Beer type'
                name='beerType'
                onChange={props.handleChange}
                value={props.beerType}
            >
                <MenuItem color='primary' key='ale' value='ale'>
                    Ale
                    </MenuItem>
                <MenuItem color='primary' key='lager' value='lager'>
                    Lager
                    </MenuItem>
                <MenuItem color='primary' key='stout' value='stout'>
                    Stout
                    </MenuItem>
                <MenuItem color='primary' key='pilsen' value='pilsen'>
                    Pilsen
                </MenuItem>
            </TextField>
            <TextField
                label="Ingredients"
                name="ingredients"
                variant='outlined'
                className={classes.margins}
                onChange={props.handleChange}
                value={props.ingredients}
                multiline
                rows={4}
            />
            <FormControlLabel
                label="Contains corn"
                labelPlacement='end'
                className={classes.margins}
                control={
                    <Checkbox
                        onClick={props.handleCheckboxValue}
                        name='hasCorn'
                        color='primary'
                        checked={props.hasCorn}
                    />
                }
            />
            <Button type='submit' onClick={props.handleSubmit}>Save</Button>
        </FormControl>
    )
}

export default CreateBeerFormView