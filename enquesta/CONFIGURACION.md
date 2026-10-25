# Modo activo: envío por correo

Por decisión del usuario, la encuesta envía respuestas a hello@odas-eu.com con FormSubmit, igual que el formulario existente. No se activa Supabase ni el panel de historial. Se mantiene consentimiento explícito no premarcado y texto sobre uso de datos y retirada por correo; no hay enlace a una política de privacidad. No se afirma cumplimiento jurídico por tener una casilla.

Los envíos tienen bloqueo de doble clic, tiempo máximo de espera, errores recuperables y una referencia estable por sesión. FormSubmit no garantiza idempotencia: un reintento tras un timeout podría duplicar un correo; la referencia permite reconocerlo. No hay almacenamiento persistente ni historial centralizado en este modo. El éxito solo aparece cuando FormSubmit confirma la aceptación, no confirma la entrega al buzón.

Cambios: `npm run build` regenera `enquesta/survey.js`. El botón Únete abre `/enquesta/`. La URL pública puede compartirse directamente o utilizarse en un QR.

# Opción futura: Supabase y panel privado

La siguiente configuración queda preparada y sin activar. Para cambiar a este modo, retirar `emailEndpoint` de config.js y completar la configuración.


La web conserva Vite, React, TypeScript y Framer Motion. No requiere migrar la web a Next.js. GitHub Pages sirve `/enquesta/`; el botón Únete lleva a esa ruta. El panel está en `/enquesta/?admin` y exige iniciar sesión; conocer la URL no concede acceso.

## Activar

1. Crear un proyecto de Supabase en la región elegida por el responsable del tratamiento. Revisar contrato de encargo, región, destinatarios y retención antes de recoger datos.
2. Ejecutar `supabase/survey.sql` una vez en SQL Editor. Crear un usuario administrador en Authentication y añadir su UUID a `survey_admins` con la instrucción final del SQL. Desactivar altas públicas si no se necesitan. Ningún usuario corriente obtiene acceso a las respuestas.
3. Editar `enquesta/config.js` con la URL del proyecto y su clave pública `anon` (JWT público compatible con REST). Nunca usar `service_role` ni claves privadas. El frontend llama al RPC público de inserción, no puede consultar respuestas anónimamente. El administrador conserva su sesión solo en memoria y debe volver a entrar tras recargar.
4. Añadir la URL HTTPS de una política real y la identidad legal del responsable. La política debe cubrir encuesta, contacto y piloto, categorías de datos, base jurídica, destinatarios/Supabase, transferencias si existen, plazos de conservación y ejercicio de derechos/contacto. La casilla está desmarcada y es obligatoria. Modificar `privacy_version` en SQL si cambia la política y documentar cada versión.
5. `npm run build` genera el bundle estático. Subir fuentes, `enquesta/` y aliases al repositorio que publica GitHub Pages. Para otro dominio como pages.cat se necesita acceso y configuración DNS, no se modifica automáticamente.
6. Probar vendedor, comprador y ambos en catalán/español; enviar una respuesta y verificarla con un administrador. Comprobar con un usuario no administrador que REST devuelve cero respuestas. Borrar el registro de prueba mediante SQL Editor.

Mientras no se complete la configuración, se muestra vista previa y el envío está desactivado. No se guardan borradores con datos personales en almacenamiento del navegador y no hay respuestas simuladas.

## Seguridad y operación

La base valida las opciones, tamaños, email y consentimiento en servidor. El UUID de envío evita duplicados ante reintentos de la misma sesión; no impide que una persona empiece otra encuesta. El CSV neutraliza fórmulas de hoja de cálculo. Las políticas RLS restringen lecturas a administradores; solo el RPC permite inserción pública y no devuelve registros. No incluir datos de contacto en logs. La protección contra abuso público adicional (cuotas/CAPTCHA) debe configurarse según el tráfico de la feria; la encuesta no presupone que un UUID sea un control antibot. Revisar y ejecutar la retención de datos definida por el responsable.

El panel suma límites inferiores de intervalos, no ingresos previstos ni un volumen exacto, y advierte del posible solapamiento entre compradores y vendedores.
