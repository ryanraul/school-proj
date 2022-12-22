import { Student } from "./Student"

export interface School {
   id?: number
   name: string
   email: string
   phone: string
   zipCode: string
   street: string
   state: string
   district: string
   city: string
   classes?: SchoolClass[]
 }
 
 export interface SchoolClass {
   id: number
   code: string
   name: string
   representative_id: string
   startDate: string
   endDate: string
   students?: Student[]
 }
 