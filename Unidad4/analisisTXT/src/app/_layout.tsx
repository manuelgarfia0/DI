import { Stack } from "expo-router";

/**
 * Configura el navegador de la aplicacion.
 * @returns Navegador Stack de Expo Router.
 * @precondition Expo Router debe estar configurado en la aplicacion.
 * @postcondition Devuelve el navegador raiz de la aplicacion.
 */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
