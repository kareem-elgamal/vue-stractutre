// this function helps you to convert objects to FormData

export default function toFormData(
  data: Record<string, any>,
  formData: FormData = new FormData(),
  parentKey?: string,
): FormData {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (typeof value === "object" && !(value instanceof File)) {
        // If the value is an object and not a File, recursively process it
        toFormData(value, formData, formKey);
      } else if (Array.isArray(value)) {
        // If the value is an array, add each item as a separate field
        value.forEach((item, index) => {
          if (typeof item === "object" && !(item instanceof File)) {
            // If the item in the array is an object and not a File, recursively process it
            toFormData(item, formData, `${formKey}[${index}]`);
          } else {
            if (item instanceof File) {
              // If the item is a File, append it directly to the FormData
              formData.append(formKey, item);
            } else {
              formData.append(`${formKey}[${index}]`, item);
            }
          }
        });
      } else {
        // If the value is not an object or array, add it as a single field
        if (value instanceof File) {
          // If the value is a File, append it directly to the FormData
          formData.append(formKey, value);
        } else {
          formData.append(formKey, value);
        }
      }
    }
  }
  return formData;
}
