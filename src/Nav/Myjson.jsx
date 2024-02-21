import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Myjson() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/path/to/php/page.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* استخدم البيانات في تطبيقك React */}
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Myjson;