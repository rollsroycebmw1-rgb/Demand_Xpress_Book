import { ValidationErrors } from '../types/Contact';

/**
 * Validates email format using regex pattern
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number to be exactly 10 digits
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Comprehensive form validation function
 */
export const validateContactForm = (name: string, email: string, phone: string): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Name validation
  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  const cleanPhone = phone.replace(/\D/g, '');
  if (!phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(phone)) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }

  return errors;
};

/**
 * Formats phone number for display (xxx) xxx-xxxx
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};