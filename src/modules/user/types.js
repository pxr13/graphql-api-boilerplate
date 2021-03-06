import { objectType } from '@nexus/schema';

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.string('tokenExpiry');
    t.field('user', { type: 'User' });
  },
});

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.posts({ pagination: false });
  },
});

const LogoutPayload = objectType({
  name: 'LogoutPayload',
  definition(t) {
    t.boolean('success');
  },
});

export default {
  AuthPayload,
  User,
  LogoutPayload,
};
