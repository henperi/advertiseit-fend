
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const siginStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5, 0),
  },
  facebookLogin: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1, 0),
    backgroundColor: grey[100],
  },
}));

export default siginStyles;
