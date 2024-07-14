import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import {baseUrl} from '../../utils/baseUrl';

const getFdrPackage = async setError => {
  try {
    const res = await axios.get(`${baseUrl}packagelist`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setError(null);
    return res;
  } catch (err) {
    const errorMsg = catchErrors(err);
    setError(errorMsg);
  }
};

export {getFdrPackage};
