import Card from '../components/Card';
import AnimeScheduleItem from '../components/AnimeScheduleItem';
import './Home.css';

function Home() {
  return (
    <>
<Card>
  <div className="CardHeader">
    <h2 className="CardTitle">今日のアニメ</h2>

    <span className="CardDate">
      6月9日(火)
    </span>
  </div>

  <div className="FilterRow">
    <input type="checkbox" />
    <span>マイアニメのみ表示</span>
  </div>

  <AnimeScheduleItem
    time="21:00"
    title="怪異学園のX"
    subtitle="第4話「交差する影」"
    channel="BS11"
    color="#FF4D4D"
  />

  <AnimeScheduleItem
    time="23:30"
    title="星の旅人たち"
    subtitle="第5話「未知への扉」"
    channel="TOKYO MX"
    color="#3B82F6"
  />

  <AnimeScheduleItem
    time="25:00"
    title="恋するミライ"
    subtitle="第4話「選んだ気持ち」"
    channel="ABEMA"
    color="#EC4899"
  />
</Card>

<Card>
  <div className="HomeCardTitle">
    今週の予定
  </div>

  <div className="HomeSubText">
    今週の放送予定
  </div>
</Card>

<Card>
  <div className="HomeCardTitle">
    近日放送開始
  </div>

  <div className="HomeSubText">
    データ未取得
  </div>
</Card>
    </>
  );
}

export default Home;