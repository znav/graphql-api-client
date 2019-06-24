import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';



const ADD_APARTMENT = gql`
  mutation CreateOrUpdateApartment($address: String!) {
    CreateOrUpdateApartment(input: { streetAddress: $address, apartmentId: 123 }) {
      id
      street_address
    }
  }
`;
let input;

const AddApartment = () => (
    <Mutation mutation={ADD_APARTMENT}>
        {(addAparment, { data }) => (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addAparment({ variables: { address: input.value } });
                        input.value = "";
                    }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    <button type="submit">Add Apartment</button>
                </form>
            </div>
        )}
    </Mutation>
);
export default AddApartment;
