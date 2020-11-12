import React from 'react';

import Button from '../../lib/styles/Button';

function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
        backgroundColor="gray"
      >
        Log out
      </Button>
    </>
  );
}

export default LogoutForm;
