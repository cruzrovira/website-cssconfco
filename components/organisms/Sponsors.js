import PropTypes from 'prop-types'

import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Sponsor from '../molecules/Sponsor'

import { decisions } from '../../utils/designTokens'

const Sponsors = ({ sponsors }) => {
  return (
    <Container>
      <section id="sponsors">
        <div className="sponsors__container">
          <div className="sponsor-title__container">
            <div className="sponsor-separator__container sponsor-separator__container--right">
              <div className="sponsor-separator__svg"></div>
            </div>
            <Heading size={2} color="blue">
              Sponsors
            </Heading>
            <div className="sponsor-separator__container sponsor-separator__container--left">
              <div className="sponsor-separator__svg"></div>
            </div>
          </div>
          <Sponsor
            sponsors={sponsors.platinum}
            title="🏅 Platinum"
            imgSize="xl"
          />
          <Sponsor sponsors={sponsors.gold} title="🥇 Gold" imgSize="lg" />
          <Sponsor sponsors={sponsors.silver} title="🥈 Silver" imgSize="md" />
          <Sponsor
            sponsors={sponsors.support}
            title="🥉 Support"
            imgSize="sm"
          />
          <div className="frog"></div>
        </div>
      </section>
      <style jsx>
        {`
          .sponsors__container {
            position: relative;
            padding: 100px 20px 30px;
            min-height: 800px;
            overflow: hidden;
          }

          .sponsor-separator__container {
            width: 100%;
          }

          .sponsor-separator__container--right {
            margin-right: 30px;
          }

          .sponsor-separator__container--left {
            margin-left: 30px;
          }

          .sponsor-separator__container--right .sponsor-separator__svg {
            background-position: center right;
          }

          .sponsor-separator__container--left .sponsor-separator__svg {
            background-position: center left;
          }

          .sponsor-separator__svg {
            background-image: url(/static/images/sponsors-separator.svg);
            background-repeat: no-repeat;
            background-size: cover;
            display: block;
            width: 100%;
            height: 100%;
          }

          .sponsor-title__container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
          }

          .frog {
            position: absolute;
            display: inline-block;
            background-image: url('/static/images/frog-tribal-vector.svg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            top: 0;
            left: -400px;
            width: 800px;
            height: 800px;
            opacity: 0.1;
            z-index: -1;
          }

          @media (${decisions.queries.screens.desktop}) {
            .sponsors__container {
              overflow: hidden;
            }

            .sponsor-separator__container {
              width: 45%;
            }

            .sponsor-separator__svg {
              background-size: contain;
            }

            .frog {
              top: 180px;
              right: 0;
              left: auto;
              width: 800px;
              height: 800px;
              opacity: 1;
            }
          }
        `}
      </style>
    </Container>
  )
}

Sponsors.defaultProps = {
  sponsors: {
    platinum: [],
    gold: [],
    silver: [],
    support: []
  }
}

Sponsors.propTypes = {
  sponsors: PropTypes.shape({
    platinum: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    gold: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    silver: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    support: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    )
  })
}

export default Sponsors
