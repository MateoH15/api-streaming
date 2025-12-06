# 🎬 API Streaming

API RESTful para obtener información detallada sobre plataformas de streaming (video, música y gaming). Incluye datos de planes, precios, características y más.

## 🚀 Características

- ✅ **API REST** con Express.js
- 🔒 **Seguridad** con Helmet y CORS configurado
- 🛡️ **Rate Limiting** para prevenir abuso
- ✔️ **Validación de datos** con express-validator
- 🗄️ **Base de datos** MongoDB con Mongoose
- ⚛️ **Frontend** React + Vite + TailwindCSS
- 🎨 **Interfaz moderna** con modo oscuro
- 📱 **Responsive design**

## 🎯 Plataformas

### 🎥 Streaming de Video

- Netflix
- Disney+
- Max (HBO Max)
- Amazon Prime Video
- Apple TV+

### 🎵 Streaming de Música

- Spotify
- Apple Music
- YouTube Music

### 🎮 Gaming

- PlayStation Plus
- Xbox Game Pass

## 📡 API Endpoints

### Obtener todas las plataformas

```http
GET /api/plataformas
```

**Respuesta:**

```json
[
  {
    "_id": "...",
    "nombre": "Netflix",
    "categoria": "streaming-video",
    "descripcion": "Servicio de streaming de películas y series",
    "planes": [...],
    "caracteristicas": [...],
    "disponibilidad": {...}
  }
]
```

### Obtener plataforma específica

```http
GET /api/plataformas/:plataforma
```

**Parámetros:**

- `plataforma` - Nombre de la plataforma (ej: `netflix`, `spotify`, `playstation-plus`)

**Ejemplo:**

```http
GET /api/plataformas/netflix
```

**Respuesta:**

```json
{
  "_id": "...",
  "nombre": "Netflix",
  "categoria": "streaming-video",
  "descripcion": "Servicio de streaming de películas y series",
  "planes": [
    {
      "nombre": "Básico",
      "precio": 9.99,
      "caracteristicas": ["HD", "1 pantalla"]
    }
  ],
  "caracteristicas": ["Contenido original", "Sin anuncios"],
  "disponibilidad": {
    "paises": ["Argentina", "México", "España"],
    "idiomas": ["Español", "Inglés"]
  }
}
```

## 🏗️ Estructura del Proyecto

```
api-streaming/
├── client/                    # Frontend React
│   └── streaming-info/
│       ├── src/
│       │   ├── components/   # Componentes React
│       │   ├── App.jsx       # Componente principal
│       │   └── main.jsx      # Punto de entrada
│       ├── public/           # Archivos estáticos
│       └── package.json
├── src/                      # Backend
│   ├── config/              # Configuración (DB)
│   ├── controllers/         # Controladores
│   ├── middleware/          # Middlewares (validación)
│   ├── models/              # Modelos de Mongoose
│   ├── routes/              # Rutas de la API
│   ├── seed/                # Scripts de seed
│   ├── app.js               # Configuración de Express
│   └── server.js            # Servidor
├── .env.example             # Ejemplo de variables de entorno
├── .gitignore
├── package.json
└── README.md
```

## 🔒 Seguridad

- **Helmet**: Protección contra vulnerabilidades comunes
- **CORS**: Control de acceso desde orígenes permitidos
- **Rate Limiting**: Límite de 100 peticiones por 15 minutos por IP
- **Validación**: Validación de parámetros con express-validator
- **Variables de entorno**: Datos sensibles protegidos

## 🛡️ Rate Limiting

La API implementa rate limiting para prevenir abuso:

- **Ventana**: 15 minutos (configurable)
- **Máximo de peticiones**: 100 por ventana (configurable)
- **Respuesta**: HTTP 429 cuando se excede el límite

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

**Mateo Herrera**

- GitHub: [@MateoH15](https://github.com/MateoH15)

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
