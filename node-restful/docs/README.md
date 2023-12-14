# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                        | Descripción |
| ------------------------------ | ----------- |
| `GET /artistas`                | Recupera la lista de todos los artistas disponibles. |
| [`GET /artistas/{id}`](./endpoints/get-artistas-id.md)                  | Obtiene información detallada sobre un artista específico. |
| `GET /comprador`               | Recupera la lista de todos los compradores disponibles. |
| [`GET /comprador/{id}`](./endpoints/get-comprador-id.md)               | Obtiene información detallada sobre un comprador específico. |
| [`GET /obras/{id}/usuario`](./endpoints/get-obras-id-usuario.md)        | Obtiene la lista de obras asociadas a un usuario específico. |
| [`GET /obras/{id}`](./endpoints/get-obras-id.md)                       | Obtiene información detallada sobre una obra específica. |
| `POST /artistas`               | Crea un nuevo artista. |
| `PUT /artistas/{id}`           | Reemplaza la información de un artista específico. |
| `PATCH /artistas/{id}`         | Actualiza la información de un artista específico. |
| `DELETE /artistas/{id}`        | Elimina un artista específico. |
| `PUT /comprador/{id}`          | Reemplaza la información de un comprador específico. |
| `PATCH /comprador/{id}`        | Actualiza la información de un comprador específico. |
| `DELETE /comprador/{id}`       | Elimina un comprador específico. |
