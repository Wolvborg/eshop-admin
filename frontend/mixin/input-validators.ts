import { ComponentOptions } from 'vue/types/options';

const inputValidators: ComponentOptions = {
  data: () => ({
    rules: {
      required: (value: string) => !!value || 'This Field is Required',
      counter: (value: string) => value.length <= 10 || `Max 10 characters`,
      email: (value: string) => {
        const emailPattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(value) || 'Invalid Email ID';
      },
    },
  }),
};

export default inputValidators;
