import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
          input: {
            index: './index.html',
            home: './src/html/home.html',
            quienes_somos: './src/html/quienes_somos.html',
            login: './src/html/login.html',
            registro: './src/html/registro.html',
            contacto: './src/html/contacto.html',
            cursos: './src/html/cursos.html',
            curso_1: './src/html/cursos/curso_1.html',
            curso_2: './src/html/cursos/curso_2.html',
            blog: './src/html/blog.html',
            noticia_1: './src/html/noticias/noticia_1.html',
            noticia_2: './src/html/noticias/noticia_2.html',
          },
        },
    },
});