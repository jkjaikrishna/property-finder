export const GET_PROPERTY = 'GET_PROPERTY';

export const getPropertyDetails = (propertyId) => ({type: GET_PROPERTY, payload: propertyId});