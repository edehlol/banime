import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

export const PersonInfo = ({ person }) => {
  let voice_acting_roles;
  if (person.voice_acting_roles) {
    voice_acting_roles = person.voice_acting_roles.map((role) => (
      <div key={nanoid()}>{role.anime.name}</div>
    ));
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <img src={person.image_url} alt={person.title} />
      {person.voice_acting_roles && (
        <div>
          <h5>Voice Acting Roles</h5>
          {voice_acting_roles}
        </div>
      )}
    </div>
  );
};
