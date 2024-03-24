"use client";

import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";

export default function SubscribeNewsletter() {
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}suscribe`,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "suscribed") {
        reset();
        return setSuccessMessage("subscribed successfully");
      }
      setErrorMessage(data.message);
    }
  });

  return (
    <div className="flex flex-col">
      <FormMessage {...formState} />
      <form
        onSubmit={onSubmit}
        key={key}
        id="footer_email"
        className="flex flex-col"
      >
        <input
          type="text"
          id="footer_email_field"
          placeholder="Email address"
          required
          name="email"
        />
        <input
          disabled={formState.loading}
          type="submit"
          value="Subscribe"
          id="footer_email_submit"
          className="disabled:opacity-50 disabled:pointer-events-none"
        />
      </form>
    </div>
  );
}
