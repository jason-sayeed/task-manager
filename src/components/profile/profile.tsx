import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// Interfaces help you ensure type safety during development
// by catching errors at compile time rather than at runtime.
// This is specific to TypeScript.
interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = (
  props,
): ReactElement => {
  const { name = 'John' } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

// PropTypes is a runtime type-checking mechanism for React props and is used with JavaScript.
// It does not offer the same compile-time safety as TypeScript interfaces.
Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
