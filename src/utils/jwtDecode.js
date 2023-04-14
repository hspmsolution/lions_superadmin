import jwtDecode from 'jwt-decode';

export default function decodeJWT(token) {  
    try {
      const decoded =jwtDecode(token);
      return decoded;
    } catch (error) {
      console.log('Error decoding JWT', error);
      return null;
    }
  }
  