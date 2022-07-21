import { Meta, Story } from '@storybook/react';

import { UserListResult, UserListProps } from './UserListResult';

export default {
  title: 'templates/UserListResult',
  component: UserListResult
} as Meta;

const usersListWithRepos = {
  total_count: 820650,
  incomplete_results: false,
  items: [
    {
      login: 'Mar',
      id: 23293,
      node_id: 'MDQ6VXNlcjIzMjkz',
      avatar_url: 'https://avatars.githubusercontent.com/u/23293?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mar',
      html_url: 'https://github.com/Mar',
      followers_url: 'https://api.github.com/users/Mar/followers',
      following_url: 'https://api.github.com/users/Mar/following{/other_user}',
      gists_url: 'https://api.github.com/users/Mar/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Mar/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Mar/subscriptions',
      organizations_url: 'https://api.github.com/users/Mar/orgs',
      repos_url: 'https://api.github.com/users/Mar/repos',
      events_url: 'https://api.github.com/users/Mar/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Mar/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    },
    {
      login: 'Marak',
      id: 70011,
      node_id: 'MDQ6VXNlcjcwMDEx',
      avatar_url: 'https://avatars.githubusercontent.com/u/70011?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Marak',
      html_url: 'https://github.com/Marak',
      followers_url: 'https://api.github.com/users/Marak/followers',
      following_url:
        'https://api.github.com/users/Marak/following{/other_user}',
      gists_url: 'https://api.github.com/users/Marak/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Marak/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Marak/subscriptions',
      organizations_url: 'https://api.github.com/users/Marak/orgs',
      repos_url: 'https://api.github.com/users/Marak/repos',
      events_url: 'https://api.github.com/users/Marak/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Marak/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    },
    {
      login: 'marijnh',
      id: 144427,
      node_id: 'MDQ6VXNlcjE0NDQyNw==',
      avatar_url: 'https://avatars.githubusercontent.com/u/144427?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/marijnh',
      html_url: 'https://github.com/marijnh',
      followers_url: 'https://api.github.com/users/marijnh/followers',
      following_url:
        'https://api.github.com/users/marijnh/following{/other_user}',
      gists_url: 'https://api.github.com/users/marijnh/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/marijnh/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/marijnh/subscriptions',
      organizations_url: 'https://api.github.com/users/marijnh/orgs',
      repos_url: 'https://api.github.com/users/marijnh/repos',
      events_url: 'https://api.github.com/users/marijnh/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/marijnh/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    },
    {
      login: 'markdalgleish',
      id: 696693,
      node_id: 'MDQ6VXNlcjY5NjY5Mw==',
      avatar_url: 'https://avatars.githubusercontent.com/u/696693?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/markdalgleish',
      html_url: 'https://github.com/markdalgleish',
      followers_url: 'https://api.github.com/users/markdalgleish/followers',
      following_url:
        'https://api.github.com/users/markdalgleish/following{/other_user}',
      gists_url: 'https://api.github.com/users/markdalgleish/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/markdalgleish/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/markdalgleish/subscriptions',
      organizations_url: 'https://api.github.com/users/markdalgleish/orgs',
      repos_url: 'https://api.github.com/users/markdalgleish/repos',
      events_url: 'https://api.github.com/users/markdalgleish/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/markdalgleish/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    },
    {
      login: 'markerikson',
      id: 1128784,
      node_id: 'MDQ6VXNlcjExMjg3ODQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1128784?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/markerikson',
      html_url: 'https://github.com/markerikson',
      followers_url: 'https://api.github.com/users/markerikson/followers',
      following_url:
        'https://api.github.com/users/markerikson/following{/other_user}',
      gists_url: 'https://api.github.com/users/markerikson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/markerikson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/markerikson/subscriptions',
      organizations_url: 'https://api.github.com/users/markerikson/orgs',
      repos_url: 'https://api.github.com/users/markerikson/repos',
      events_url: 'https://api.github.com/users/markerikson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/markerikson/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    }
  ]
};

const Template: Story<UserListProps> = (args: UserListProps) => (
  <UserListResult {...args} />
);

export const Default = Template.bind({});
Default.args = {
  usersList: usersListWithRepos.items
};
