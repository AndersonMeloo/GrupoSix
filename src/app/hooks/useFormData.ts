/**
 * Gerenciar dados de formulários 
 */

'use client'

import { useState, useCallback } from 'react';
import { FormData } from '../types/index';

interface UseFormDataReturn {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
  isValid: () => boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
};

export function useFormData(initial?: Partial<FormData>): UseFormDataReturn {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    ...initial,
  });

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
  }, []);

  const isValid = useCallback((): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim().length > 0 &&
      emailRegex.test(formData.email) &&
      formData.email.trim().length > 0
    );
  }, [formData]);

  return {
    formData,
    updateField,
    resetForm,
    isValid,
  };
}
