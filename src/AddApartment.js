import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';



const ADD_APARTMENT = gql`
  mutation CreateOrUpdateApartment($address: String!, $apartmentId: Int!) {
    CreateOrUpdateApartment(input: { streetAddress: $address, apartmentId: $apartmentId }) {
      id
      street_address
    }
  }
`;

let input;
let id;
const AddApartment = () => (
    <Mutation mutation={ADD_APARTMENT} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        {(addAparment, { data }) => (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addAparment({ variables: { address: input.value, apartmentId: id.value } });
                        input.value = "";
                    }}
                >
                    <div>ID:</div>
                    <input
                        ref={node => {
                            id = node;
                        }}
                    />
                    <br/>
                    <div>STREET ADRESS:</div>
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    <br/>
                    <button type="submit">Add Or Update Apartment</button>
                </form>
            </div>
        )}
    </Mutation>
);
export default AddApartment;
