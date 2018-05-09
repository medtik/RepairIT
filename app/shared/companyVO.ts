export interface CompanyVO {
    id: string,
    name: string,
    logo: string,
    colors: Array<string>,
    email: string,
    website: string,
    phone: string,
    description: string,
    password: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    issues: Array<string>,
    locations: Array<string>
}