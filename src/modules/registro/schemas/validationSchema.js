import * as yup from 'yup';

export const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio."),
  email: yup.string().email("Tiene que ser una cuenta valida.").required("El correo es obligatorio.")
});
