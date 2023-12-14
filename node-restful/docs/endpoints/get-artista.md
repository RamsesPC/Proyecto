# Endpoint: `GET /product`

Permite obtener información detallada sobre un producto específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del producto que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /artista
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_artista": 1,
    "nombre": "Pablo Picasso",
    "biografia": "Famoso pintor español",
    "obras": "Guernica, La Noche Estrellada"
  },
  // Otros artistas...
]

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "Solicitud inválida."
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