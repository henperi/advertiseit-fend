import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

// eslint-disable-next-line react/jsx-props-no-spreading
const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default LinkRouter;
