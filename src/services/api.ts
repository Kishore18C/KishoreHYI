interface IServiceProps {
  params?: any;
  endPoint: string;
  isLoader?: boolean;
}

const API = {
  get: async (serviceProps: IServiceProps) => {
    const url = serviceProps.endPoint;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      const json = await response.json();

      return json;
    } catch (error) {
      return {status: 'failure', status_msg: 'Something went wrong!'};
    }
  },

  post: async (serviceProps: IServiceProps) => {
    const url = serviceProps.endPoint;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(serviceProps.params),
      });

      const json = await response.json();

      return json;
    } catch (error) {
      return {status: 'failure', status_msg: 'Something went wrong!'};
    }
  },

  put: async (serviceProps: IServiceProps) => {
    const url = serviceProps.endPoint;
    try {
      const response = await fetch(url, {
        method: 'PUT',
      });

      const json = await response.json();

      return json;
    } catch (error) {
      return {status: 'failure', status_msg: 'Something went wrong!'};
    }
  },

  delete: async (serviceProps: IServiceProps) => {
    const url = serviceProps.endPoint;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      const json = await response.json();

      return json;
    } catch (error) {
      return {status: 'failure', status_msg: 'Something went wrong!'};
    }
  },
};

export default API;
