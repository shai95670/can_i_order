import { style } from '../../style'

export default function MediaCard({ resturant }) {
  const { online, public_url, name, mainimage } = resturant

  return (
    <div className="card is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" style={style.card}>
      <div className="card-image" />
      <figure className="image">
        <img style={style.borderRadius} src={mainimage} alt="Placeholder image" />
      </figure>
      <div />
      <div >
        <div className="media has-text-centered">
          <div className="media-content is-size-4-mobile is-size-4-touch is-size-4-tablet is-size-4-desktop is-size-4-widescreen is-size-4-fullhd">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
