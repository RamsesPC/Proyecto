# Endpoint: `POST /artista`

Permite crear un nuevo producto.

## Parámetros del Cuerpo (JSON)
Puedes incluir cualquier combinación de los siguientes campos para actualizar:
- `nombre`: (Obligatorio) Nombre actualizado del artista.
- `biografia`: (Obligatorio) Tipo actualizado del artista.
- `obras`: (Obligatorio) Cantidad actualizada del artista.

## Ejemplo de Solicitud
```http
POST /artista
Content-Type: application/json

{
  "nombre": "Nuevo Artista",
  "biografia": "Breve descripción del nuevo artista",
  "obras": "Obra 1, Obra 2"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "status": 201,
  "message": "Created"
}

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

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
  "error_description": "Ocurrió un problema para procesar la solicitud."
   }

  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un artista en específico.