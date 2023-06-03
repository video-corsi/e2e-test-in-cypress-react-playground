import axios from 'axios';
import { useEffect, useState } from 'react';

export interface User {
  id: number;
  name: string;
  username: string;
}

export function PlaygroundPage() {
  const [list, setList] = useState<User[]>([]);
  const [listError, setListError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setList(res.data))
      .catch(() => setListError(true));
  }, []);


  function deleteItem(id: number) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setList((s) => s.filter((p) => p.id !== id));
      })
      .catch(() => console.log("ERROR!"));
  }
  return (
    <div>
      <ul data-testid="userList" className="list">
        {listError && "list not loaded"}
        {list.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name} ({item.username})</span>
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  )
}

