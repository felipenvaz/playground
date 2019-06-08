import * as React from 'react';
import {
  DataProps,
  compose,
} from 'react-apollo';
import { Paper } from '@material-ui/core';
import {
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import Repository from '../../graphQL/Repository';
import RepositoryList from './RepositoryList';
import withRepositories, { RepositoriesQuery } from '../../graphQL/hoc/withRepositories';

const styles = createStyles({
  root: {
    display: 'flex',
    width: '100%',
    padding: '40px 2rem',
    boxSizing: 'border-box',
  },
  repositories: {

  },
});

interface MergeProps extends WithStyles<typeof styles>, DataProps<RepositoriesQuery> { }

function Merge({
  classes,
  data: {
    organization,
  },
}: MergeProps) {
  let repositories: Repository[] = [];
  if (organization) repositories = organization.repositories.nodes;
  repositories = repositories.filter(r => !r.isArchived);

  return (
    <div className={classes.root}>
      <Paper>
        <RepositoryList repositories={repositories} />
      </Paper>
    </div>
  );
}

export default compose(
  withStyles(styles),
  withRepositories,
)(Merge);
