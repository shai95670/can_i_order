export default function MediaCard({ resturant }) {
  const { online, public_url, name, mainimage } = resturant

  const style = {
    card: {
      width: '15%',
      height: '15%'
    },
    text: {
      fontSize: 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'
    }
  }

  return (
    <div className="card is-square" style={style.card}>
      <div className="card-image" />
      <figure className="image">
        <img src={mainimage} alt="Placeholder image" />
      </figure>
      <div />
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p style={style.text} className="title is-4">{name}</p>
            <p style={style.text} className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
    </div>
  )
}
