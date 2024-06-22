import { useState, useEffect } from 'react';
import { getCookie } from "../../../config/Cookies";
import Api from '../../api/Api';

const useAuth = () => {
  const token = getCookie("auth_token");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Use null to indicate loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Api.get(`/protected?token=${token}`);

        if (response.data.status === "valid") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [token]);

  return isAuthenticated;
};

export default useAuth;
