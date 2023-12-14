### POST /comprador

Permite crear un nuevo comprador.

#### Parámetros del Cuerpo (JSON)
- `nombre` (obligatorio): Nombre del nuevo comprador.
- `biografia` (obligatorio): Biografía del nuevo comprador.
- `obras` (obligatorio): Obras del nuevo comprador.

#### Ejemplo de Solicitud
```http
POST /comprador
Content-Type: application/json

{
  "nombre": "Ana López",
  "biografia": "Amante del arte",
  "obras": "La Gioconda, El Grito"
}
```

#### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_comprador": 4,
  "mensaje": "Comprador creado exitosamente."
}
```

#### Respuestas de Errores Posibles
- Código 400 Bad Request:
  ```json
  {
    "errno": 400,
    "error": "bad_request",
    "error_description": "Faltan parámetros obligatorios en la solicitud."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```

## Notas Adicionales

- Asegúrate de incluir datos válidos en la solicitud para obtener la información sobre un tema en específico.