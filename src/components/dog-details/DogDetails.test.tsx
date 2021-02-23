import React from 'react'
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import DogDetails from './DogDetails'

it('should import DogDetailsView component', () => {
    const mockFunction = jest.fn();
    const instanceMockFunction = mockFunction();

    const wrapper = shallow(
        <DogDetails image={"anImage"}
            dogsName={"Adolfo"}
        />
    );
    console.log(wrapper.debug())
    expect(wrapper.matchesElement(
        <DogDetailsView image={"anImage"}
            dogsName={"Adolfo"}
            bark={instanceMockFunction}
        />)).toEqual(true);

});

