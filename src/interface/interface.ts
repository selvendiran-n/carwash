
export interface LoginType{
    email: string,
    password: string 
};


export interface RegisterType{
    username:string,
    email:string,
    password:string,
    confirmPassword: string 
}

export interface FormType {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    gender:string,
    dateOfBirth:string,
    contact:string,
    status:null | boolean,
    membershipId:number,
    membership:string,
    locationId:number,
    location:string,
    carModelId:number,
    carModel:string,
    transmissionType:string,
    fuelType:string 
}



export interface FormValidationType {
    firstName:string,
    lastName:string,
    email:string,
    gender:string,
    dateOfBirth:string,
    contact:string,
    status:string,
    membership:string,
    location:string,
    carModel:string,
    transmissionType:string,
    fuelType:string 
}



export interface MembershipType{
    membershipId:number,
    membershipType:string
}

export interface LocationType{
    locationId:number,
    location:string
    // membershipId:number
}

export interface CarModelType{
    carmodelId:number,
    carModel:string
}

export interface TransmissionType{
    transmissionId:number,
    transmissionType:string
}

export interface FuelType{
    fuelId:number,
    FuelType:string
}