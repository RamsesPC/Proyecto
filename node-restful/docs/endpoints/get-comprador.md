### GET /comprador/{id}

Permite obtener información detallada sobre un comprador específico mediante su identificador único.

#### Parámetros de URL
- `{id}` (obligatorio): Identificador único del comprador que se desea recuperar.

#### Ejemplo de Solicitud
```http
GET /comprador/1
```

#### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_comprador": 1,
  "nombre": "Ana López",
  "biografia": "Amante del arte",
  "obras": "La Gioconda, El Grito"
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

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```

### DELETE /comprador/{id}

Permite eliminar un comprador existente mediante su identificador único.

#### Parámetros de URL
- `{id}` (obligatorio): Identificador único del comprador que se desea eliminar.

#### Ejemplo de Solicitud
```http
DELETE /comprador/1
```

#### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_comprador": 1,
  "mensaje": "Comprador eliminado exitosamente."
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

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```
