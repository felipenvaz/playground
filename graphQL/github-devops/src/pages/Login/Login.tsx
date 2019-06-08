import * as React from 'react';
import {
  Grid,
  Paper,
  TextField,
} from '@material-ui/core';
import {
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import localizedStrings from '../../translations/localizedStrings';

const styles = createStyles({
  root: {
    display: 'flex',
    width: '100%',
    padding: '40px 2rem',
  },
  loginBox: {
    padding: '40px',
    backgroundColor: '#00adea',
    width: '400px',
    margin: 'auto',
  },
  button: {
    marginTop: '20px',
  },
});

interface LoginProps extends WithStyles<typeof styles> { }

function Login({
  classes,
}: LoginProps) {
  const [userName] = React.useState('');
  const [password] = React.useState('');

  return (
    <div className={classes.root}>
      <Paper classes={{ root: classes.loginBox }}>
        <form>
          <Grid container={true} spacing={24} >
            <Grid item={true} xs={12} >
              <TextField
                name="userName"
                value={userName}
                fullWidth={true}
                label={localizedStrings.name}
                /* onChange={this.onChange} */
                required={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                name="password"
                value={password}
                fullWidth={true}
                label={localizedStrings.password}
                type="password"
                /* onChange={this.onChange} */
                required={true}
              />
            </Grid>
            {/* <Grid item={true} xs={12}>
          <Button
            fullWidth={true}
            classes={{ root: classes.button }}
            onClick={this.login}
          >
            {localizedStrings.login}
          </Button>
        </Grid> */}
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Login);
