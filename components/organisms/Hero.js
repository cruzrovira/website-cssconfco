import Subtitle from '../atoms/Subtitle'
import Container from '../atoms/Container'

import { decisions } from '../../utils/designTokens'

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="tribals">
          <div className="tribal-container">
            <div className="date-tribal tribal">
              <div className="lovers"></div>
            </div>
            <Subtitle size={1} color="blue">
              📆 April 10th, 2021
            </Subtitle>
          </div>
          <div className="tribal-container">
            <div className="city-tribal tribal"></div>
            <Subtitle size={1} color="red">
              📹 Live Streaming
            </Subtitle>
          </div>
          <div className="tribal-container">
            <div className="place-tribal tribal"></div>
            <Subtitle size={1} color="yellow">
              🌈 Open for Everyone
            </Subtitle>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .hero {
          position: relative;
          padding: 30px ${decisions.container.padding};
        }

        .tribals {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lovers {
          display: none;
          background-image: url('/static/images/css-lovers-text.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          width: 100%;
          height: 100%;
          max-height: 300px;
          margin: 80px 50px;
          transition: filter 0.5s ease;
        }

        .lovers:hover {
          transition: filter 1s ease;
        }

        .tribal-container {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          height: 180px;
          margin: 10px 20px;
          width: 100%;
        }

        .tribal-container :global(.subtitle) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }

        .tribal-container-reverse {
          flex-direction: column-reverse;
        }

        .tribal {
          width: 100%;
          height: 500px;
          background-size: cover;
          transition: filter 1s ease;
        }

        .tribal:hover {
          filter: saturate(10);
          transition: filter 0.5s ease;
        }

        .date-tribal {
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('/static/images/date-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
        }

        .city-tribal {
          background-image: url('/static/images/medellin-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
        }

        .place-tribal {
          background-image: url('/static/images/rutan-tribal-vector.svg');
          background-position: center left;
          background-repeat: no-repeat;
        }

        @media (${decisions.queries.screens.desktop}) {
          .hero {
            padding-top: 20px;
          }

          .tribal {
            margin-bottom: 20px;
          }

          .tribals {
            flex-direction: row;
          }

          .tribal-container {
            height: 100%;
            margin: 20px;
          }

          .tribal-container :global(.subtitle) {
            position: relative;
            top: auto;
            left: auto;
            transform: translate(0, 0);
            white-space: normal;
            text-align: right;
          }

          .lovers {
            display: block;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
