import type React from 'react';
import Card from './Card';
import InputText from './InputText';

function PersonalInfo({
  error,
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
}: {
  error: boolean;
  name: string;
  email: string;
  phone: string;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Card
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <form className="mt-10 flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-blue-950 lg:text-base">
              Name
            </label>
            {error && name.length === 0 && (
              <span className="font-semibold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <InputText
            placeholder="e.g Stephen King"
            type="text"
            required={true}
            value={name}
            onChangeText={setName}
            error={error}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-blue-950 lg:text-base">
              Email
            </label>
            {error && email.length === 0 && (
              <span className="font-semibold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <InputText
            placeholder="e.g stephenking@lorem.com"
            type="email"
            required={true}
            value={email}
            onChangeText={setEmail}
            error={error}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-blue-950 lg:text-base">
              Phone Number
            </label>
            {error && phone.length === 0 && (
              <span className="font-semibold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <InputText
            placeholder="e.g +1 234 567 890"
            type="number"
            required={true}
            value={phone}
            onChangeText={setPhone}
            error={error}
          />
        </div>
      </form>
    </Card>
  );
}

export default PersonalInfo;
