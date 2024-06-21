import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from "../../../config/Cookies"

const useAuth = () => {

    const token = getCookie("auth_token")

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`/protected?token=${token}`);
        if (response.data.status == "valid_token") {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
