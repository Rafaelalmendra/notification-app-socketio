import { useState } from 'react';

import Navbar from './components/Navbar';
import Card from './components/Card';
import { posts } from './data'
import './styles/app.css';

const App = () => {
  const [ username, setUsername ] = useState('');
  const [ user, setUser ] = useState('');

  console.log(user)

  return (
    <div className="container">
      {user ? (
        //usuario-logado
        <>
          <Navbar />
          {posts.map(post => (
            <Card 
              key={post.id}
              post={post}
              
            />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        //usuario-nao-logado
        <div className="login">
          <input 
            type="text"
            placeholder="coloque seu nome"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;