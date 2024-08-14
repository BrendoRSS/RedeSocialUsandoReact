//esse tipo de importação se baseia em 'named export' onde você importa a função pelo nome exato que ela possui com as {} envolvendo.
import { Header } from './components/Header';

import styles from './App.module.css';
import { Post } from './components/Post';
import './global.css';
import { Sidebar } from './components/Sidebar'

// ESTRTUTURA BÁSICA DOS POSTS:
    // author: { avatar_url: "", name: "", role: "" }
    // publishedAt: Date
    // content: String

const posts = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://github.com/brendorss.png', 
        name: 'Brendo Silva', 
        role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
      publishedAt: new Date('2024-23-02 09:48:00'),
    },
    {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png', 
          name: 'Mayk Brito', 
          role: 'Educator Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-23-02 09:48:00'),
      },
  ];

// ITERAÇÃO: Significa criarmos uma estrutura de repetição

export function App() {
  return (
    //propriedades: as propriedades servem para alterar elementos visuais em precisarmos criar um novo arquivo abaixo as propriedades utilizadas para o componente "post" são "author" e "content"
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />/
        <main>
          {posts.map(post =>{
            return ( <Post
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

