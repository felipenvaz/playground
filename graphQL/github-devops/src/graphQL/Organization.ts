import Repository from './Repository';

export default interface Organization {
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
}
