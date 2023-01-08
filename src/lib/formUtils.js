export const UPDATE_FORM = "UPDATE_FORM"
/**
 * Triggered every time the value of the form changes
 */
export const onInputChange = (name, value, dispatch, formState) => {
   console.log(name)
   const { hasError, error } = validateInput(name, value);
   console.table({"name state": formState.name});

   let isFormValid = true;

   for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
         isFormValid = false;
         break
      } else if (key !== name && item.hasError) {
         isFormValid = false;
         break
      }
   }

   dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: false, isFormValid },
   });
}

export const validateInput = (name, value) => {
   console.log("Validating:", name, value);
   let hasError = false,
      error = "";
   switch (name) {
      case "firstName":
         if (value.trim() === "") {
            hasError = true;
            error = "First name cannot be empty";
         } else if (!/^[a-zA-Z ]+$/.test(value)) {
            hasError = true;
            error = "Invalid Name. Avoid Special characters";
         } else {
            hasError = false;
            error = "";
         }
         console.log(hasError, error);
         break
      default:
         break
   }
   return { hasError, error };
}

export const onFocusOut = (name, value, dispatch, formState) => {
   console.log(name)
   const { hasError, error } = validateInput(name, value);
   console.table({"name state": formState.name});

   let isFormValid = true;

   for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
         isFormValid = false;
         break
      } else if (key !== name && item.hasError) {
         isFormValid = false;
         break
      }
   }

   dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: true, isFormValid },
   });
}
