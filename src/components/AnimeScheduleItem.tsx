import './AnimeScheduleItem.css';

type AnimeScheduleItemProps = {
  time: string;
  title: string;
  subtitle: string;
  channel: string;
  color: string;
};

function AnimeScheduleItem({
  time,
  title,
  subtitle,
  channel,
  color,
}: AnimeScheduleItemProps) {
  return (
    <div className="AnimeScheduleItem">
      <div className="AnimeTime">{time}</div>

      <div
        className="AnimeDot"
        style={{ backgroundColor: color }}
      />

      <div>
        <div className="AnimeTitle">{title}</div>
        <div className="AnimeSubtitle">{subtitle}</div>
      </div>

      <div className="AnimeChannel">
        {channel}
      </div>

      <div className="AnimeFavorite">
        ♡
      </div>
    </div>
  );
}

export default AnimeScheduleItem;