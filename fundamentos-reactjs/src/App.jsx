import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "",  role: "" }
// publsheAr: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/101279529?v=4',
      name: 'Max Henrique',
      role: 'Developer Front end'     
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },      
    ],
    publishedAt: new Date('2022-08-19 12:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/101263529?v=4',
      name: 'Giovanna',
      role: 'Educator'     
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },      
    ],
    publishedAt: new Date('2022-08-22 10:45:00'),
  },
]; 

// para fazer iteração use map
// const algo = posts.forEach(post => {
//   return 1;
// });
// const algo = posts.map(post => {
//   return 1;
// });

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
