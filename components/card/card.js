export default function MediaCard({ resturant }) {
  const { online, public_url, name, mainimage  } = resturant
  return (
    <div className="card">
      <div className="card-image" />
      <figure className="image is-square">
        <img src={mainimage} alt="Placeholder image"/>
      </figure>
      <div />
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
    </div>
  )
}
