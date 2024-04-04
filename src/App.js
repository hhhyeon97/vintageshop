import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchPost = async () => {
    setIsLoading(true);
    const url = 'http://localhost:3005/posts';
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="wrap">
      <Header />
      <section>
        내용입니다
        <div>
          {data?.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
