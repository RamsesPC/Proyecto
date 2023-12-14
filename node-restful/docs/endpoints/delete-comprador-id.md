# Endpoint: `DELETE /comprador/{id}`

Permite eliminar un comprador existente mediante su identificador único.

## Parámetros de URL
`{id}` (obligatorio): Identificador único del comprador que se desea eliminar.

## Ejemplo de Solicitud
```http
DELETE /comprador/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_comprador": 1,
  "mensaje": "Comprador eliminado exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el comprador."
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
- Asegúrate de incluir un dato válido en la solicitud para obtener información sobre un tema en específico.
