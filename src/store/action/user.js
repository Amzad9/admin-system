import {  toast } from 'react-toastify';
import axios from 'axios';

import { stopLoading, startLoading, setUser } from '../slice/userReducer';


export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoading(true))
            const response = await axios.get(`${import.meta.env.VITE_URL}/users`);
            dispatch(setUser(response.data))
            dispatch(stopLoading(false))
        } catch (error) {
            console.error('Error fetching users:', error);
            toast.error(error)
            dispatch(stopLoading(false))
        }
    }
};
export const deleteUser = (userId) => {
    return async (dispatch) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
        try {
            await axios.delete(`${import.meta.env.VITE_URL}/users/${userId}`);
            dispatch(fetchUsers()); // Refresh the user list after deletion
            toast('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user', error);
            throw error;
        }
    }
    };
};

export const saveUser = (formData, update) => {
    return async (dispatch) => {
      try {
        const errors = validateForm(formData);
  
        if (Object.keys(errors).length > 0) {
          Object.values(errors).forEach((error) => {
            toast.error(error);
          });
        } else {
          const newUser = {
            username: formData.username,
            email: formData.email,
            role: formData.role,
          };
  
          if (update) {
            await axios.put(
              `${import.meta.env.VITE_URL}/users/${formData.id}`,
              newUser
            );
            toast.success('User updated successfully');
          } else {
            const response = await axios.post(
              `${import.meta.env.VITE_URL}/users`,
              newUser
            );
            toast.success('New user created successfully');
          }
  
          dispatch(fetchUsers());
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error(`Failed to create/update user: ${error.message}`);
      }
    };
  };
  
  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };