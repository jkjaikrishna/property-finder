import properties from '../Data/MOCK_DATA.json';

const initialState = {
    properties,
    currentProperty: {}
}

function Reducer( state= initialState, action ) {
    switch(action.type) {
        case 'GET_PROPERTY': 
            let currentProperty = state.properties.find( property => property.guid == action.payload );
            return {
                ...state,
                currentProperty
            }
    }
    return state;
}

export default Reducer;