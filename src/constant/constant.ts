import { CarModelType, FormType, LocationType, LoginType, MembershipType, RegisterType } from "../interface/interface";


export  const credential : LoginType = {
    email: "selva@gmail.com",
    password : "Selva@123"
}

export const submittedRegisterData: RegisterType[] = [];

export const submittedLoginData: LoginType[] = [];


// Email Validation
export const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Name Validation (Only alphabets)
export const NAME_REGEX: RegExp = /^[a-zA-Z]+$/;

// Password Validation (Min 8, 1 uppercase, 1 lowercase, 1 special character)
export const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

// Contact Number Validation (Exactly 10 digits)
export const CONTACT_NUMBER_REGEX: RegExp = /^\d{10}$/;


export const Validators = {
    isValidEmail: (value: string): boolean => EMAIL_REGEX.test(value),
    isValidName: (value: string): boolean => NAME_REGEX.test(value),
    isValidPassword: (value: string): boolean => PASSWORD_REGEX.test(value),
    isValidContact: (value: string): boolean => CONTACT_NUMBER_REGEX.test(value),
  };


export const submittedFormData: FormType[] = [];


export const membershipData:MembershipType[]= [
  {
    membershipId:1,
    membershipType:"Basic"
  },
  {
    membershipId:2,
    membershipType:"Premium"
  },
  {
    membershipId:3,
    membershipType:"VIP"
  }
]

export const locationData:LocationType[]= [
  {
    locationId:1,
    location:"New York"
  },
  {
    locationId:2,
    location:"Los Angeles"
  },
  {
    locationId:3,
    location:"Chicago"
  }
]

export const carmodelData:CarModelType[]= [
  {
    carmodelId:1,
    carModel:"Toyota"
  },
  {
    carmodelId:2,
    carModel:"Honda"
  },
  {
    carmodelId:3,
    carModel:"Ford"
  }
]