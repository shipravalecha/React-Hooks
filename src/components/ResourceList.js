import React from 'react';
import useResources from './useResources.js';

const ResourceList = ({ resource }) => {

  const resources = useResources(resource);

    // or directly call fn without calling fetchResource(resource) in useEffect like below: use () around fn and then invoke using (resource)

    // useEffect(() => {
    //   (async (resource) => {
    //     const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    //
    //     setResources(response.data);
    //   })[resource]
    // }, [resource]);

    return (
    <ul>{resources.map(record =>
      <li key={record.id}>{record.title}</li>
    )}</ul>
    );
}

export default ResourceList;
