# Endpoint: `PUT /product/{id}`

Permite actualizar completamente la información de un producto existente mediante su identificador único.

## Parámetros de URL
`{id}` (obligatorio): Identificador único del producto que se desea actualizar.

## Parámetros del Cuerpo (JSON)
- `nombre`: (Obligatorio) Nombre actualizado del artista.
- `biografia`: (Obligatorio) Tipo actualizado del artista.
- `obras`: (Obligatorio) Cantidad actualizada del artista.
- 
## Ejemplo de Solicitud
```http
PUT /product/1
Content-Type: application/json

PUT /artista/1
Content-Type: application/json

{
  "nombre": "Nuevo Nombre",
  "biografia": "Nueva biografía",
  "obras": "Nueva obra 1, Nueva obra 2"
}


```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "message": "Updated successfully"
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

- Asegúrate de incluir datos válidos en la solicitud para obtener información sobre un tema específico.