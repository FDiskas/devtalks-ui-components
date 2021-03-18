import React from 'react';

import { User } from '../interfaces';

type Props = {
  data: User;
};

export const ListItem = ({ data }: Props) => (
  <a href="#sd">
    {data.id}: {data.name}
  </a>
);
