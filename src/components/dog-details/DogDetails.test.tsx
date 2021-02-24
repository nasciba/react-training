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
    expect(wrapper.matchesElement(
        <DogDetailsView image={"anImage"}
            dogsName={"Adolfo"}
            scolds={0}
            countScolds={instanceMockFunction}
            bark={instanceMockFunction}
        />)).toEqual(true);

});

