import * as React from 'react';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

export const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);
