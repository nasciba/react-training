import React from 'react';
import { shallow } from 'enzyme';
import { Grid, Box, Typography } from '@material-ui/core';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';

describe('DogDetailsView', () => {
    const mockFunction = jest.fn();
    const instanceMockFunction = mockFunction();
   
    it('should render the view with the right props', () => {
        const wrapper = shallow(
            <DogDetailsView scolds={0} image={'anImage'} dogsName={"Adolfo"} bark={instanceMockFunction} countScolds={mockFunction} />
        )
        expect(wrapper.matchesElement(
            <Grid container className="makeStyles-root-1">
                <Box display="flex" flexDirection="column" className='makeStyles-media-2'>
                    <img src={'anImage'} alt="Dog image" />
                </Box>
                <Typography component='p'>Adolfo</Typography>
                <Button onClick={instanceMockFunction}>Bark</Button>
                <Typography>This dog has already been scolded {0} times!</Typography>
                <Button onClick={mockFunction}>Scold!</Button>
            </Grid>
        )).toEqual(true)
    })
    it('should handle the onClick event', () => {
        const wrapper = shallow(
            <DogDetailsView scolds={0} countScolds={mockFunction} image={'anImage'} dogsName={"Adolfo"} bark={mockFunction} />
        )
        wrapper.find('Button').at(0).simulate('click');
        wrapper.find('Button').at(1).simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    })
})