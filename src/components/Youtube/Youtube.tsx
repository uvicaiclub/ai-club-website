import { useEffect } from 'react'
import './youtube.css'

const Youtube = () => {
  function labnolIframe(div: any) {
    var iframe = document.createElement('iframe')
    iframe.setAttribute(
      'src',
      'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0'
    )
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allowfullscreen', '1')
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    )
    div.parentNode.replaceChild(iframe, div)
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player')
    for (var n = 0; n < playerElements.length; n++) {
      var video = playerElements[n] as HTMLElement
      var videoId = video.dataset.id as string
      var div = document.createElement('div')
      div.setAttribute('data-id', videoId)
      var thumbNode = document.createElement('img')
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId)
      div.appendChild(thumbNode)
      var playButton = document.createElement('div')
      playButton.setAttribute('class', 'play')
      div.appendChild(playButton)
      div.onclick = function () {
        labnolIframe(this)
      }
      playerElements[n].appendChild(div)
    }
  }
  useEffect(() => {
    initYouTubeVideos()
  })

  return <div className="youtube-player" data-id="5j8I7V6blqM"></div>
}

export default Youtube
