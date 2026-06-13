# URLS de los Endpoints

## ENTIDAD: AUTORES

### Obtener lista de Autores
* URL: `http://localhost:3000/api/autores`
* Respuesta de ejemplo body JSON:
```json
[
  {
    "id": 1,
    "nombre": "Alejandro Sanz",
    "email": "alejandro.sanz@appblog.com",
    "imagen": "https://placehold.net/600x600.png"
  },
  {
    "id": 2,
    "nombre": "Beatriz Merino",
    "email": "beatriz.merino@appblog.com",
    "imagen": "https://placehold.net/600x600.png"
  },
  ...
  ]
  ```

### Insertar un nuevo Autor
* URL: `http://localhost:3000/api/autores``
* body JSON esperado por la aplicación:
```json
  {
    "nombre": "Alejandro Sanz",
    "email": "alejandro.sanz@appblog.com",
    "imagen": "https://placehold.net/600x600.png"
  }
```

## ENTIDAD: POSTS

### Obtener todos los posts incluidos los datos de los autores pertenecientes
* URL: `http://localhost:3000/api/posts`
* Respuesta de ejemplo body JSON:
```json
[
  {
    "post_id": 1,
    "titulo": "El laberinto de la condición humana en Don Quijote",
    "descripcion": "Un análisis profundo sobre cómo Cervantes rompió los esquemas de las novelas de caballería...",
    "fecha_creacion": "2026-06-13T18:31:58.000Z",
    "categoria": "Crítica Literaria",
    "autor_id": 1,
    "autor_nombre": "Alejandro Sanz",
    "autor_email": "alejandro.sanz@appblog.com",
    "autor_imagen": "https://placehold.net"
  },
  ...
]
```
### Obtener posts de un unico autor especifico (3)
* URL: `http://localhost:3000/api/posts/autor/3`
* Respuesta de ejemplo body JSON:
```json
[
  {
    "post_id": 6,
    "titulo": "1984 vs Un mundo feliz: ¿Qué distopía acertó más?",
    "descripcion": "Comparativa entre el control totalitario mediante el miedo de Orwell...",
    "fecha_creacion": "2026-06-13T18:33:35.000Z",
    "categoria": "Comparativas",
    "autor_nombre": "Carlos Gardel",
    "autor_email": "carlos.gardel@appblog.com"
  },
  ...
]
```
### Insertar un nuevo post
* URL: `http://localhost:3000/api/posts``
* body JSON esperado por la aplicacion:
```json
{
  "titulo": "Reseña: Los pilares de la Tierra de Ken Follett",
  "descripcion": "Exploramos cómo esta obra maestra logra transportar al lector al siglo XII británico...",
  "categoria": "Reseñas",
  "autor_id": 2
}    
```


