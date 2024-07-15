import PostList from "../components/PostList"
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>);
}

export default Posts

export async function loader() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await response.json();
  console.log(data)
  return data;
}