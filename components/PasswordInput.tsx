// components/PasswordInput.tsx
import React from "react";

type PasswordInputProps = {
  password: string;
  setPassword: (value: string) => void;
  valid: boolean;
};

export function PasswordInput({ password, setPassword, valid }: PasswordInputProps) {
  return (
    <div className="space-y-2">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />
      {!valid && <p className="text-xs text-red-500">Password inválido</p>}
    </div>
  );
}

export default PasswordInput;
