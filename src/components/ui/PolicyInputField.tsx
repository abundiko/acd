"use client";

import { useState } from "react";
import AppInput from "./AppInput";

export type PolicyInputFieldProps = {
  policy?: string;
};

export default function PolicyInputField({ policy }: PolicyInputFieldProps) {
  const [hasPolicy, setHasPolicy] = useState(!!policy);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="policy-checkbox" className="flex gap-2">
        <input
          type="checkbox"
          checked={hasPolicy}
          onChange={(e) => setHasPolicy(e.target.checked)}
          name="hasPolicy"
          id="policy-checkbox"
        />
        <span>This Organisation Has Inclusive Statement in their Policy</span>
      </label>
      {hasPolicy && (
        <AppInput
          name="policy"
          placeholder="enter policy inclusive statement"
          textarea
        />
      )}
    </div>
  );
}
