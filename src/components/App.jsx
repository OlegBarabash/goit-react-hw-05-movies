import { fetchTrending } from 'services/api';

export const App = () => {
  const getTrending = async () => {
    try {
      const resp = await fetchTrending();
      console.log('resp', resp);
    } catch (error) {}
  };

  getTrending();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
