import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <Typography sx={{p:2}} variant='h5'>Login</Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <Box sx={{p:2}}>
        <InputLabel htmlFor="username">
          Username:
          <Input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </InputLabel>
      </Box>
      <Box sx={{p:2}}>
        <InputLabel htmlFor="password">
          Password:
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputLabel>
      </Box>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
