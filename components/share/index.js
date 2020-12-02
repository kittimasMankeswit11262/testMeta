import { useState, useEffect, useRef, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import css from './css'
import LinkIcon from '@components/elements/icons/share/link'
import FavIcon from '@components/elements/icons/share/favourite'
import * as Actions from '@store/actions'
import service from '@store/service'
import { withTranslation } from '@root/i18n'

import { FacebookShareButton, TwitterShareButton, LineShareButton } from 'react-share'

const IconStyle = {}
const IconStyleContianer = { padding: 0 }

const View = (props) => {
  const dispatch = useDispatch()
  const $container = useRef(null)
  const [open, setOpen] = useState(false)
  const { orderCampaign, userFavourite } = useSelector(({ favourite }) => favourite)
  let checkIndexof = 0
  useEffect(() => {
    const handleClickDocument = (e) => {
      if ($container.current.contains(e.target)) return

      if (open) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickDocument)

    return () => {
      document.removeEventListener('click', handleClickDocument)
    }
  })

  useEffect(() => {
    if (props.campaignId) {
      const favourite = userFavourite.data
      checkIndexof = favourite.indexOf(props.campaignId)
      if (checkIndexof == -1) {

      }
      else {


      }
    }
  }, [checkIndexof])
  function onFavourite(id) {
    dispatch(Actions.collectFavouriteCampaign(id))
  }

  const { className, url = '', isFavIcon = false } = props
  const urlForDev = window.location.href
  return (
    <div ref={$container} className={className}>
      <div className="link-container">
        <div className="social-container tooltip">
          <span className="tooltiptext">{props.i18n.language == "th" ? "แชร์" : "Share"}</span>
          <LinkIcon onClick={() => setOpen(!open)} />
          {open && (
            <div className="popover-container">
              <p>
                <strong>Share via:</strong>
              </p>
              <div className="link-container">
                {/* <FacebookShareButton url={Url} quote={Quout} hashtag={Hashtag} style={IconStyle} > */}
                <div style={IconStyleContianer}>
                  <FacebookShareButton
                    url={urlForDev}
                    style={IconStyle}
                  >
                    <img src="/static/images/share/icon-facebook.svg" />
                  </FacebookShareButton>
                </div>
                <div style={IconStyleContianer}>
                  <TwitterShareButton url={urlForDev} style={IconStyle}>
                    <img src="/static/images/share/icon-twitter.svg" />
                  </TwitterShareButton>
                </div>
                <div style={IconStyleContianer}>
                  <LineShareButton url={urlForDev} style={IconStyle}>
                    <img src="/static/images/share/icon-line.svg" />
                  </LineShareButton>
                </div>
              </div>
            </div>
          )}
        </div>
        {isFavIcon &&
          <FavIcon
            onClick={() => onFavourite(props.campaignId)}
            device={props.device}
          />
        }
      </div>
    </div >
  )
}

export default withTranslation()(styled(View)`
  ${css}
`)
