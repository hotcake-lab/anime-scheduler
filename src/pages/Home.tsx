import Card from '../components/Card';

function Home() {
  return (
    <>
      <h1>Anime Scheduler</h1>

      <Card>
        <h2>今日のアニメ</h2>
        <p>本日放送予定はありません</p>
      </Card>

      <Card>
        <h2>今週の予定</h2>
        <p>放送予定はありません</p>
      </Card>

      <Card>
        <h2>近日放送開始</h2>
        <p>データ未取得</p>
      </Card>
    </>
  );
}

export default Home;