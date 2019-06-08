import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';
import {
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import Repository from '../../graphQL/Repository';

const styles = createStyles({
  root: {
    padding: 0,
    maxHeight: '600px',
    overflow: 'auto',
  },
  listItem: {
    '&:not(:last-child)': {
      borderBottom: '1px solid lightgray',
    },
  },
});

interface RepositoryListProps extends WithStyles<typeof styles> {
  repositories: Repository[];
}

function RepositoryList({
  classes,
  repositories,
}: RepositoryListProps) {
  return (
    <Paper>
      <List className={classes.root}>
        {repositories.map(repository => (
          <ListItem key={repository.name} className={classes.listItem}>
            <ListItemText primary={repository.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default withStyles(styles)(RepositoryList);
