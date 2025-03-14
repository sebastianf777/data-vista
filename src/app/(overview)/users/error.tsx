'use client';

import ErrorComponent from '@/components/error-component/error-component';

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <ErrorComponent
      error={error}
      reset={reset}
      title="Dashboard Error"
      message="Something went wrong on the dashboard."
    />
  );
}
