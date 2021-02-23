import React from 'react';
import { shallow } from 'enzyme';
import { Grid, Box, Typography } from '@material-ui/core';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';

describe('DogDetailsView', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <DogDetailsView image="anImage" dogsName="Adolfo" bark={mockFunction} />
    )

    it('should render the view with the right props', () => {
        wrapper.matchesElement(
            <Grid container className="aClass">
                <Box display="flex" flexDirection="column" className="aClass">
                    <img src="anImage" alt="Dog image" />
                </Box>
                <Typography component='p'>Adolfo</Typography>
                <Button onClick={mockFunction}>Bark</Button>
            </Grid>
        )
    })
    it('should handle the onClick event', () => {
        wrapper.find('Button').simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    })
})