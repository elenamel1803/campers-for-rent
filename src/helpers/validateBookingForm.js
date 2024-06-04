export const validate = ({ state, setErrors }) => {
  let tempErrors = {};
  tempErrors.name = state.name ? '' : 'This field is required.';
  tempErrors.email = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
    state.email
  )
    ? ''
    : 'Email is invalid.';
  tempErrors.date = state.date ? '' : 'This field is required.';
  tempErrors.comment = state.comment ? '' : 'This field is required.';
  setErrors({
    ...tempErrors,
  });

  return Object.values(tempErrors).every(x => x === '');
};
