import { useState } from "react";
import { toast } from "sonner";

interface UseFormSubmitOptions<T> {
  endpoint: string;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useFormSubmit<T>({
  endpoint,
  onSuccess,
  onError,
  successMessage = "Form submitted successfully!",
  errorMessage = "Something went wrong. Please try again.",
}: UseFormSubmitOptions<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitForm = async (values: T) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      setIsSuccess(true);
      toast.success(successMessage);
      
      if (onSuccess) {
        onSuccess(data);
      }
      
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      toast.error(errorMessage);
      
      if (onError) {
        onError(error);
      }
      
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
    reset,
  };
}