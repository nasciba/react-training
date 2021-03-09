import React from 'react';
import { shallow } from 'enzyme';
import { Grid, Box, Typography } from '@material-ui/core';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';

describe('DogDetailsView', () => {
    const mockFunction = jest.fn();
    const instanceMockFunction = mockFunction();
   
    it('should render correctly', () => {
        const wrapper = shallow(
            <DogDetailsView scolds={0} image={'anImage'} dogsName={"Adolfo"} onBark={instanceMockFunction} onCountScolds={mockFunction} />
        )
        expect(wrapper.matchesElement(
            <Grid container className="makeStyles-root-1">
                <Box display="flex" flexDirection="column" className='makeStyles-media-2'>
                    <img src={'anImage'} alt="Dog image" />
                </Box>
                <Typography component='p'>Adolfo</Typography>
                <Button type="button" onClick={instanceMockFunction}>Bark</Button>
                <Typography>This dog has already been scolded {0} times!</Typography>
                <Button type="button" onClick={mockFunction}>Scold!</Button>
            </Grid>
        )).toEqual(true)
    })
    
})
