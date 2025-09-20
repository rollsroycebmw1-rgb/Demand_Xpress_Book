/**
 * Contact interface defining the structure of a contact object
 */
export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Form validation errors interface
 */
export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}