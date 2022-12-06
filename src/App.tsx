import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/phpaulohenrique.png",
            name: "Paulo Henrique",
            role: "Desenvolvedor Web",
        },
        content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
                type: "paragraph",
                content:
                    "acabei de subir mais um projeto no meu portfólio. O nome do projeto é DoctorCare 🚀. da uma olhadinha lá",
            },
            {
                type: "link",
                content:
                    "https://phpaulohenrique.github.io/doctor-care_nlw-return-origin/",
            },
        ],
        publishedAt: new Date("2022-12-01 20:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/phpaulohenrique.png",
            name: "Paulo Henrique",
            role: "Desenvolvedor Web",
        },
        content: [
            { type: "paragraph", content: "Bom diaa pessoal" },
            {
                type: "paragraph",
                content: "Acabei de subir mais um projeto no meu portfólio. 🚀",
            },
            { type: "link", content: "https://github.com/phpaulohenrique/" },
        ],
        publishedAt: new Date("2022-12-08 20:00:00"),
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://github.com/phpaulohenrique.png",
            name: "Paulo Henrique",
            role: "Desenvolvedor Web",
        },
        content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
                type: "paragraph",
                content:
                    "acabei de subir mais um projeto no meu portfólio. O nome do projeto é DoctorCare 🚀. da uma olhadinha lá",
            },
            {
                type: "link",
                content:
                    "https://phpaulohenrique.github.io/doctor-care_nlw-return-origin/",
            },
        ],
        publishedAt: new Date("2022-12-01 20:00:00"),
    },
];

export function App() {
    return (
        <div className="App">
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
