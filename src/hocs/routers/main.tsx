import React, { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

function WithMainLayoutHOC({ children }: Props) {
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
}

export default WithMainLayoutHOC;
