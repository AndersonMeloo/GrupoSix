export interface UTMParams {
    utm_source?: string;
    utm_mediun?: string;
    utm_content?: string;
    utm_term?: string;
}

export interface FormData {
    name: string;
    email: string;
    phone?: string;
}

export interface CheckoutFormData extends FormData {
    quantity: number
}