# Endpoint: `PATCH /artista/{id}`

Permite actualizar parcialmente la información de un producto existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
Puedes incluir cualquier combinación de los siguientes campos para actualizar:
- `nombre`: Nombre actualizado del artista.
- `biografia`: Tipo actualizado del artista.
- `obras`: Cantidad actualizada del artista.

## Ejemplo de Solicitud
```http
PATCH /artista/1
Content-Type: application/json

{
  "obras": "Nueva obra, Otra obra"
}


```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "message": "Successful partial update"
}

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el artista."
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
  "error_description": "Ocurrió un problema para procesar la solicitud."
  }

  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.