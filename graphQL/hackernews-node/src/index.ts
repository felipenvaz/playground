import { GraphQLServer } from 'graphql-yoga';
import Link from './Link';
import path from 'path';

let links: Link[] = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;
// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
    link: (parent, args) => {
      const link = links.find(link => link.id === args.id);
      return link;
    }
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      const link: Link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const link = links.find(link => link.id === args.id);
      if (link) {
        if (args.description) link.description = args.description;
        if (args.url) link.url = args.url;
      }
      return link;
    },
    deleteLink: (parent, args) => {
      const link = links.find(link => link.id === args.id);
      links = links.filter(link => link.id !== args.id);
      return link;
    },
  },
}

// 3
const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './schema.graphql'),
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))