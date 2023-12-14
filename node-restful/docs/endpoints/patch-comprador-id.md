### PATCH /comprador/{id}

Permite actualizar parcialmente la información de un comprador existente mediante su identificador único.

#### Parámetros de URL
- `{id}` (obligatorio): Identificador único del comprador que se desea actualizar.

#### Parámetros del Cuerpo (JSON)
Puedes incluir cualquier combinación de los siguientes campos para actualizar:
- `nombre`: Nombre actualizado del comprador.
- `biografia`: Biografía actualizada del comprador.
- `obras`: Obras actualizadas del comprador.

#### Ejemplo de Solicitud
```http
PATCH /comprador/1
Content-Type: application/json

{
  "biografia": "Nueva biografía del comprador",
  "obras": "Nuevas obras del comprador"
}
```

#### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_comprador": 1,
  "mensaje": "Comprador actualizado exitosamente."
}
```

#### Respuestas de Errores Posibles
- Código 404 Not Found:
  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el comprador."
  }
  ```

- Código 400 Bad Request:
  ```json
  {
    "errno": 400,
    "error": "bad_request",
    "error_description": "No se proporcionaron campos válidos para actualizar."
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

Asegúrate de incluir datos válidos en la solicitud para obtener la información sobre un comprador en específico.