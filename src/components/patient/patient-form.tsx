import { useForm } from 'react-hook-form';
import { cn } from '@/lib';

// Components
import { FormField } from '@/components/ui/form-field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Types
import type {
  Patient,
  PatientUpdateData,
  PatientCreateData,
} from '@/types/patient';

type PatientFormProps = {
  patient?: Patient | null;
  onSubmit: (data: PatientUpdateData | PatientCreateData) => void;
  onClose: () => void;
};

export const PatientForm = ({
  patient,
  onSubmit,
  onClose,
}: PatientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientUpdateData | PatientCreateData>({
    defaultValues: {
      name: patient?.name || '',
      avatar: patient?.avatar || '',
      description: patient?.description || '',
      website: patient?.website || '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] flex flex-col gap-4"
    >
      {!patient && (
        <FormField
          label="Avatar URL"
          htmlFor="avatar"
          required
          error={errors.avatar}
        >
          <Input
            id="avatar"
            {...register('avatar', {
              required: 'Avatar is required',
              minLength: {
                value: 10,
                message: 'Name must be at least 10 characters',
              },
            })}
            placeholder="Enter avatar URL"
            className={cn(errors.avatar && 'border-destructive')}
          />
        </FormField>
      )}
      {/* Name - Required */}
      <FormField label="Name" htmlFor="name" required error={errors.name}>
        <Input
          id="name"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          })}
          placeholder="Enter patient name"
          className={cn(errors.name && 'border-destructive')}
        />
      </FormField>
      {/* Description - Required */}
      <FormField
        label="Description"
        htmlFor="description"
        required
        error={errors.description}
      >
        <Input
          id="description"
          {...register('description', {
            required: 'Description is required',
            minLength: {
              value: 10,
              message: 'Description must be at least 10 characters',
            },
          })}
          placeholder="Enter description"
          className={cn(errors.description && 'border-destructive')}
        />
      </FormField>
      {/* Website - Required */}
      <FormField
        label="Website"
        htmlFor="website"
        required
        error={errors.website}
      >
        <Input
          id="website"
          {...register('website', {
            required: 'Website is required',
            minLength: {
              value: 10,
              message: 'Website must be at least 10 characters',
            },
          })}
          placeholder="Enter website"
          className={cn(errors.website && 'border-destructive')}
        />
      </FormField>
      {/* Actions */}
      <div className="flex gap-3 mt-6 pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting
            ? 'Saving...'
            : patient
              ? 'Update Patient'
              : 'Add Patient'}
        </Button>
      </div>
    </form>
  );
};
