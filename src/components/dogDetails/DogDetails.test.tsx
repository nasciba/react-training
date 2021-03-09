import React from 'react'
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import DogDetails from './DogDetails'

describe("DogDetails", () => {

    it('should render the view with the right props', () => {
        const wrapper = shallow(
            <DogDetails image={"anImage"}
                dogsName={"Adolfo"}
            />
        );

        expect(wrapper.type()).toBe(DogDetailsView)
        expect(wrapper.props()).toMatchObject({
            "image": "anImage",
            "dogsName": "Adolfo",

        });
        // describe('onCount', () => {
        //     it('should update the counter to a new value', () => {
        //         const wrapper = shallow(
        //             <DogDetails image={"anImage"}
        //                 dogsName={"Adolfo"}
        //             />
        //         );
        //         wrapper.setState({ count: 0})
        //     })
        // })

    });
})

