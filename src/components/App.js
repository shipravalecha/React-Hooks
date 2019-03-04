import React, { useState } from 'react';
import ResourceList from './ResourceList.js';
import UserList from './UserList.js';

const App = () => {
  const [resource, setResource] = useState('posts');
    return (
      <div>
      <UserList />
        <div>
          <button onClick={() => setResource('posts')}>posts</button>
          <button onClick={() => setResource('todos')}>todos</button>
        </div>
            <ResourceList resource={resource} />
      </div>
    );
}


export default App;
